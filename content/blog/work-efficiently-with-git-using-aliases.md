---
type: article
layout: Article
title: Work efficiently with Git using aliases
thumbnail: /img/work-efficiently-with-git-using-aliases.jpg
date: 2020-02-07T07:00:00.000Z
category: Tips & Tricks
excerpt: >-
  Git is an essential tool for any modern developer. This extremely powerful
  tool proven in code-reviews, deployment, and collaboration on code. If you're
  like me, the majority of commands typed in Terminal each day are git commands.
author: Wojciech Kałużny
seo:
  seodescription: >-
    Git is an essential tool for any modern developer. This powerful tool proven
    in code-reviews,  and collaboration on code can be even better with aliases!
  seoimage: /img/work-efficiently-with-git-using-aliases-seo.jpg
  seotitle: Work efficiently with Git using aliases
---
Git is an essential tool for any modern developer. This extremely powerful tool proven in code-reviews, deployment, and collaboration on code. If you're like me, the majority of commands typed in Terminal each day are git commands.

There's a lot of commands that we need to use to get things done. Most of them are simple and easy to use, but others are quite complex and annoying to type. If you're like me, then you prefer to write as little as possible. My solution to this problem is using git specific aliases to shorten commands I use most. At the same time, it's good to improve the information they return to be more readable. Aliases I'm using save me hundreds of unnecessary keystrokes every day spending less time working with git and more time working with code.

## Git aliases
Git allows you to set aliases but they’re limited and only save you a few keystrokes (i.e. instead of `git checkout master` you can type `git com`, but you still have to type `git`). We can reduce the keystrokes it takes for each command even further with Bash/ZSH aliases. Since ZSH is Terminal’s default command-line interpreter (since macOS Catalina), we'll use zsh aliases instead.

I'll give you a list of simple and powerful aliases I use every day. Hopefully, you'll find them useful and use them as well!

## My git aliases  
The first order of business is getting rid of having to type out `git` ever time we want to use it.

```bash
alias g="git"
```

Then it's time to add the complete list of git commands and their aliases.

```bash
alias ga='git add'
alias gacm="git add -A && git commit -m"
alias gcom="git checkout master"
alias gco="git checkout"
alias gst="git status"
alias gcm="git commit -m"
alias gup="git pull --rebase"
alias gpl="git pull"
alias gmer="git merge"
Alias gra="git remote add"
alias gbr="git branch"
alias gdf="git diff"
alias gl="git log --oneline --decorate --all --graph"
alias glg="git log --graph --pretty=format:'%C(yellow)%h%Creset -%C(green)%d%Creset %s %C(red)(%an, %cr)%Creset' --abbrev-commit --date=relative"
alias    gwc="git whatchanged -p --abbrev-commit --pretty=medium"
```
