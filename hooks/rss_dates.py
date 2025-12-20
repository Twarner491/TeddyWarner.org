"""
MkDocs hook to extract dates from JSON-LD schema for RSS feed generation.
This hook reads datePublished and dateModified from the embedded JSON-LD
in each page's content and adds them to the page's meta for the RSS plugin.

To exclude a page from the RSS feed (e.g., work in progress), add to frontmatter:
  draft: true
"""
import re
import json
from datetime import datetime


def on_page_markdown(markdown: str, page, config, files):
    """Extract dates from JSON-LD schema and add to page meta."""
    
    # Only process pages in Projects or writings folders
    src_path = page.file.src_path
    if not (src_path.startswith("Projects/") or src_path.startswith("writings/")):
        return markdown
    
    # Initialize page.meta if needed
    if not hasattr(page, 'meta') or page.meta is None:
        page.meta = {}
    
    # Check for draft flag - exclude from RSS feed
    # The 'draft' key comes from YAML frontmatter
    if page.meta.get('draft', False):
        # Setting rss.exclude tells the RSS plugin to skip this page
        page.meta['rss'] = {'exclude': True}
        return markdown
    
    # Look for JSON-LD script block
    json_ld_pattern = r'<script type="application/ld\+json">\s*(\{[\s\S]*?\})\s*</script>'
    match = re.search(json_ld_pattern, markdown)
    
    if match:
        try:
            json_ld = json.loads(match.group(1))
            
            # Extract dates
            date_published = json_ld.get("datePublished")
            date_modified = json_ld.get("dateModified")
            image = json_ld.get("image")
            
            # Add dates to meta for RSS plugin
            if date_published:
                # Parse ISO format and convert to date object
                try:
                    dt = datetime.fromisoformat(date_published.replace('Z', '+00:00'))
                    page.meta['date'] = dt
                except ValueError:
                    pass
            
            if date_modified:
                try:
                    dt = datetime.fromisoformat(date_modified.replace('Z', '+00:00'))
                    page.meta['date_modified'] = dt
                except ValueError:
                    pass
            
            # Add image for RSS enclosure
            if image and 'image' not in page.meta:
                page.meta['image'] = image
                
        except json.JSONDecodeError:
            pass
    
    return markdown
