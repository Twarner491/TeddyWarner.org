---
title: Project Portfolio Site
hide:
  - navigation
---

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>

<style>

.share {
  float:right;
  margin-top: 0px;
  font-size: 1.1em;
}

.share a {
  color: inherit;
}

.twitter {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.fa-twitter:hover {
    color: #00acee;
}

.fb {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.fa-facebook-square:hover {
    color: #3b5998;
}

.pin {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.fa-pinterest:hover {
    color: 	#E60023;
}

.ln {
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.fa-linkedin:hover {
    color: #0e76a8;
}

.email {
  padding-left: 0.2em;
  padding-right: 1.5em;
}

</style>

# Project Portfolio Site

<!-- Compleation Badge

![progress]()

Done - https://img.shields.io/badge/progress-done!-success?style=flat-square
Pending - https://img.shields.io/badge/progress-pending%20completion-yellow?style=flat-square
Halted - https://img.shields.io/badge/progress-halted-critical?style=flat-square
Constantly Updating - https://img.shields.io/badge/progress-constantly%20updating-informational?style=flat-square
-->

![progress](https://img.shields.io/badge/progress-done!-success?style=flat-square)
![GitHub](https://img.shields.io/github/license/Twarner491/Project-Documentation-Site?color=%234051b5&style=flat-square)

<!--- Social Links

HTML Link Generator - https://www.websiteplanet.com/webtools/sharelink/

<span class="share" style=" color: inherit;">
<a class="fb" title="Share on Facebook" href="FACEBOOK-URL"><i class="fab fa-facebook-square"></i></a>
<a class="twitter" title="Share on Twitter" href="TWITTER-URL"><i class="fab fa-twitter"></i></a>
<a class="pin" title="Share on Pinterest" href="PINTEREST-URL"><i class="fab fa-pinterest"></i></a>
<a class="ln" title="Share on LinkedIn" href="LINKEDIN-URL"><i class="fab fa-linkedin"></i></a>
<a class="email" title="Share via Email" href="EMAIL-URL"><i class="fas fa-paper-plane"></i></a>
</span>

-->

**6-7 minutes :material-book-open-page-variant:**
<span class="share" style=" color: inherit;">
<a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fab fa-facebook-square"></i></a>
<a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/ProjectPortfolioSite/&text=Check%20Out%20the%20Behind%20the%20Scenes%20to%20teddywarner.org%20on"><i class="fab fa-twitter"></i></a>
<a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/ProjectPortfolioSite/&media=&description=Check%20Out%20the%20Behind%20the%20Scenes%20to%20teddywarner.org%20on%20https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fab fa-pinterest"></i></a>
<a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fab fa-linkedin"></i></a>
<a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=Check%20Out%20the%20Behind%20the%20Scenes%20to%20teddywarner.org%20on%20https://teddywarner.org/Projects/ProjectPortfolioSite/"><i class="fas fa-paper-plane"></i></a>
</span>

****

**The behind the scenes of the site you are on right now :)**

This site relies on [MKdocs](https://www.mkdocs.org/), a static site generator is written in python to create the content of the site, as well as the [MKdocs Material Theme](https://squidfunk.github.io/mkdocs-material/) for customization. I used this same static site generator to create my [Fab Academy Documentation Site](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/), however, that site runs strictly on the [MKdocs Material Theme](https://squidfunk.github.io/mkdocs-material/) without custom alterations. This site relies on the same structure as the prior [Fab Academy Documentation Site](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/) but includes experiments with entirely custom components, and an altered [MKdocs Material Theme](https://squidfunk.github.io/mkdocs-material/). In addition to all that, it's also built and hosted through my personal [GitHub Pages](https://pages.github.com/) repo, under my personal domain. 

## Repo Setup and Cloning

To start the site I created a new [GitHub Pages](https://pages.github.com/) repo on my [GitHub](https://github.com/Twarner491) and cloned in some of my site files from my prior [Fab Academy Documentation Site](http://fabacademy.org/2021/labs/charlotte/students/theodore-warner/) (the cloned files were just so site setup files, as well as a bit of content on my Fab Academy final project to be displayed on this site). I then pulled this repo to my system folder with the command

```
git clone git@github.com:<username>/<your-repository>.git
```

### SSH setup

To clone a Git repository locally, an SSH key must be generated on your computer and then attached to your GitHub account. GitHub has really good documentation on [creating a new SSH key](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and attaching it to your GitLab account. 

```
Get-Content ~/.ssh/id_filename.pub | Set-Clipboard
```
The process for generating and attaching a new SSH key to your GitLab is relatively pain-free when following this documentation and using the command written above. My process involved running these commands
```
ssh-keygen -t ed25519 -C "<Your-SSH-Name-Here>"  \\ generates a new SSH key on your computer

\\ continue to click enter when prompted with
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/user/.ssh/id_ed25519):

\\ then when prompted with 
Enter passphrase (empty for no passphrase):
Enter the same passphrase again:
\\ enter a passphrase for your SSH key that you can remember, as you will need this password whenever you attempt to pus your site back to the GitLab

Get-Content ~/.ssh/id_filename.pub | Set-Clipboard  \\ copies your new SSH key to clipboard
```
Once copied to the clipboard, you can paste the newly generated SSH key in your SSH key settings on GitHub, to link your computer and your GitHub. Now you can finally clone your GitHub repository locally as discussed above.

## Mkdocs Material Install & Site Building

**Requirements**

 - Latest Version of [Python](https://www.python.org/downloads/)
 - Latest Version of [Git](https://git-scm.com/downloads)

Open your cloned GitHub Pages repo in your code editor of choice, my personal favorite source-code editor is [Visual Studio Code](https://code.visualstudio.com/), so naturally, I used this. In a new terminal in the clone site folder, run the command

```
pip install mkdocs-material
```
This will install all dependencies needed to run a static site with [MKdocs](https://www.mkdocs.org/), as well as the [MKdocs Material Theme](https://squidfunk.github.io/mkdocs-material/).

Following this setup, I build my static site locally with the command in my site folders terminal

```
mkdocs serve
```

and followed the link given in my computer's web browser. You should get an output like this after the *mkdocs serve* command ...

```
INFO     -  Documentation built in X.XX seconds
INFO     -  [XX:XX:XX] Serving on http://YOUR-LOCAL-SITE/
```

### Auto Site Building

The easiest way for your static site to be built in GitHub pages upon a push is through [GitHub Actions](https://github.com/features/actions) allowing for an automated workflow to run to build and pipeline your static site publicly. 

At the root of your repository, create a new GitHub Actions
workflow, e.g. `.github/workflows/ci.yml`, and copy and paste the following
contents:

```
    name: ci // You can change the name to your liking.
    on:
      push:
        branches: // At some point, GitHub renamed `master` to `main`. If your default branch is named `master`, you can safely remove `main`, vice versa.
          - master
          - main
    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-python@v2
            with:
              python-version: 3.x
          - run: pip install mkdocs-material // This is the place to install further MkDocs plugins or Markdown extensions with `pip` to be used during the build.
          - run: mkdocs gh-deploy --force
```

For my site setup, I added the line ...

``` 
      - run: pip install mkdocs-git-revision-date-localized-plugin
```

following *- run: pip install mkdocs-material* to install the Git Revision date plugin to my site, allowing for the date each page was updated to be displayed under all of the contents of the page.

## Site Customisation

The basic setup and customization of your static site are covered wonderfully on the [Mkdocs Material Theme Setup Documentation](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/). However, following this basic theme setup, your site can be altered farther by extending the [Material Theme](https://squidfunk.github.io/mkdocs-material/) -  Witch can be read about [here](https://squidfunk.github.io/mkdocs-material/customization/#extending-the-theme). All of my overrides can be found in [this site's GitHub repo](https://github.com/Twarner491/Project-Documentation-Site/).

## Site Publishing

Finally, after any changes are made to your site, you can merge your local changes back to your [GitHub Pages](https://pages.github.com/) repo to be built and published with the commands ...

```
git add .  // stages all new changes made to your site
git commit -m "Updated Site"  // gives your push a title that will be visible on GitHub
git push  //pushes changes to your GitHub - when prompted, enter your SSH password
```

**Congrats!** You now have built your very own static site with [MKdocs](https://www.mkdocs.org/) and its [Material Theme](https://squidfunk.github.io/mkdocs-material/).

**Wooo :partying_face: :partying_face:** as of 12/1/2021, *teddywarner.org* is now **100 Commits** old!!
![](../images/PortfolioSite/100commit.jpg){width="100%"}

<!-- begin wwww.htmlcommentbox.com -->
 <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Comment Form</a> is loading comments...</div>
 <link rel="stylesheet" type="text/css" href="https://www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
 <script type="text/javascript" id="hcb"> /*<!--*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="https://www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%24rC8CBT1V7ZoWek7B.CC5x."+"&opts=16798&num=10&ts=1634155475586");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); /*-->*/ </script>
<!-- end www.htmlcommentbox.com -->