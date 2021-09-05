---
title: Project Portfolio Site
---

# Project Portfolio Site

**6-7 minutes :octicons-book-16:**

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