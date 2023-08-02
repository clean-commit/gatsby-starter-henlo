---
id: 44d0d78e-1f11-4f92-85ac-d144d60bb573
type: post
layout: post
title: Philosophy behind Henlo.
permalink: /blog/hello-world/
thumbnail: /img/henlo-cover.png
date: 2022-05-11T19:16:41.067Z
author: a1d1172a-8736-47c1-831d-3e508729fee2
excerpt: If you’re a WordPress developer then you must have heard about a plugin
  called Advanced Custom Fields and a Flexible Content field that allows editors
  to generate new pages easily.
---

If you’re a WordPress developer then you must have heard about a plugin called Advanced Custom Fields and a Flexible Content field that allows editors to generate new pages easily.

When I started to move more into JAMStack I wanted to recreate ACF’s Flexible Content field in Gatsby. It's possible to use WordPress as a headless CMS and some headless CMS have implemented some sort of an alternative. Prismic has Slices (unfortunately you can’t create multiple repeatable fields within fields).

For smaller projects WordPress or Prismic may be too complex. In such cases, I usually go with my favorite flat-file CMS - Netlify CMS.

Netlify CMS offers everything you need, it’s open-source and free to use. The only thing missing? Flexible Content field. Fortunately, with beta features - Manual Initialization and Variable Types for List fields we can easily create a solution that copies ACF's Flexible Content.

## Why using flexible content is a great idea?

Advanced Custom Fields' Flexible Content allows editors to quickly make significant changes without engaging developers. Creating new pages is a breeze, and optimizing for conversions is easier.

Using a singular template may not be the best way to organize your content, especially if you want to quickly test new changes. That's why component-based, modular design gives you much more flexibility.

It lowers development and maintenance costs. Websites are tools that have to generate business value. The better system you build the longer it’ll last without any code changes.
