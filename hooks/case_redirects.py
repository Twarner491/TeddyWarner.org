"""
Hook to create case-insensitive URL redirects.
Generates redirect pages for alternate case versions of Projects and writings folders.
Only runs on case-sensitive filesystems (Linux CI/GitHub Actions) to avoid issues on Windows.
"""
import os
import sys
from pathlib import Path

# Define the case mappings: alternate_case -> canonical_case
CASE_MAPPINGS = {
    'projects': 'Projects',  # /projects/X -> /Projects/X
    'Writings': 'writings',  # /Writings/X -> /writings/X
}

def is_case_sensitive_fs(path):
    """Check if the filesystem at the given path is case-sensitive."""
    # Create a test file to check case sensitivity
    test_file_lower = path / '.case_test_lower'
    test_file_upper = path / '.case_test_LOWER'
    
    try:
        test_file_lower.write_text('test')
        
        # If we can create a different file with different case, it's case-sensitive
        if test_file_upper.exists():
            # Case-insensitive: both names point to same file
            test_file_lower.unlink()
            return False
        else:
            # Case-sensitive: we can create both files
            test_file_lower.unlink()
            return True
    except Exception:
        # Default to not creating redirects if we can't determine
        try:
            test_file_lower.unlink()
        except:
            pass
        return False

def on_post_build(config, **kwargs):
    """After build, create redirect HTML files for alternate case URLs."""
    site_dir = Path(config['site_dir'])
    site_url = config.get('site_url', '').rstrip('/')
    
    # Only run on case-sensitive filesystems (Linux CI)
    # On Windows/macOS, the folders would conflict
    if not is_case_sensitive_fs(site_dir):
        print("case_redirects: Skipping on case-insensitive filesystem")
        return
    
    print("case_redirects: Creating alternate case redirects...")
    
    for alt_case, canonical_case in CASE_MAPPINGS.items():
        canonical_dir = site_dir / canonical_case
        alt_dir = site_dir / alt_case
        
        if not canonical_dir.exists():
            print(f"case_redirects: Canonical dir {canonical_case} not found, skipping")
            continue
        
        # Create the alternate case directory
        alt_dir.mkdir(exist_ok=True)
        redirect_count = 0
        
        # Walk through all files in the canonical directory
        for root, dirs, files in os.walk(canonical_dir):
            rel_path = Path(root).relative_to(canonical_dir)
            
            for filename in files:
                if filename.endswith('.html'):
                    # Calculate paths
                    if rel_path == Path('.'):
                        alt_file_path = alt_dir / filename
                        canonical_url_path = f'{canonical_case}/{filename}'
                    else:
                        alt_subdir = alt_dir / rel_path
                        alt_subdir.mkdir(parents=True, exist_ok=True)
                        alt_file_path = alt_subdir / filename
                        canonical_url_path = f'{canonical_case}/{rel_path}/{filename}'
                    
                    # Clean up URL (remove index.html for cleaner URLs)
                    if filename == 'index.html':
                        if rel_path == Path('.'):
                            canonical_url_path = f'{canonical_case}/'
                        else:
                            canonical_url_path = f'{canonical_case}/{rel_path}/'
                    
                    # Build the full target URL
                    if site_url:
                        target_url = f'{site_url}/{canonical_url_path}'
                    else:
                        target_url = f'/{canonical_url_path}'
                    
                    # Normalize any double slashes (but preserve https://)
                    while '//' in target_url.replace('://', ''):
                        target_url = target_url.replace('://', '___PROTO___')
                        target_url = target_url.replace('//', '/')
                        target_url = target_url.replace('___PROTO___', '://')
                    
                    # Create redirect HTML
                    redirect_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <link rel="canonical" href="{target_url}">
    <meta http-equiv="refresh" content="0; url={target_url}">
    <script>window.location.replace("{target_url}");</script>
</head>
<body>
    <p>Redirecting to <a href="{target_url}">{target_url}</a>...</p>
</body>
</html>'''
                    
                    alt_file_path.write_text(redirect_html, encoding='utf-8')
                    redirect_count += 1
            
            # Create subdirectories in alt case
            for dirname in dirs:
                subdir_path = alt_dir / rel_path / dirname
                subdir_path.mkdir(parents=True, exist_ok=True)
        
        print(f"case_redirects: Created {redirect_count} redirects for {alt_case} -> {canonical_case}")
