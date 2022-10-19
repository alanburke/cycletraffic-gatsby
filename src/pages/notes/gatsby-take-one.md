---
title: "Gatsby - Taking the first steps"
date: "2019-09-06"
tags: netlify, gatsby
path: "/notes/gatsby-first-step"
---

I've been listening to the mighty [Marky](https://mark.ie/) preach [about Gatsby](https://www.frontendunited.org/sessions/live-demo-using-gatsbyjs-build-decoupled-drupal-website) at a number of events, but I didn't have the brainspace to get around to building my own [Gatsby](http://gatsbyjs.org/) site.

Until now.

I'm no stranger to [static site generators](https://www.staticgen.com/) having used [Jekyll](https://jekyllrb.com/) for a number of websites over the years, particularly as it was driving Github pages. But I've never really warmed to React, and especially 'CSS in JS' and 'Markup in JS'. Gatsby has done an incredible job of building a tool for blazing-fast websites so it would be remiss of me to ignore it any longer. 

My [Cycletraffic](https://www.cycletraffic.com/) has been through a number of iterations over the years, built using everthing from [Drupal](https://www.drupal.org) to a single html page and everything in between. In fact, the previous iteration was served by Github Pages but I've [spun it up on Netlify](2018.cycletraffic.com) to keep a record. 

Perhaps all that listening to Mark paid off, but starting off with Gatsby was straighforward. I can't recommend the [Gatsby tutorials](https://www.gatsbyjs.org/tutorial/) highly enough. Furthermore, there are some very useful [starters](https://www.gatsbyjs.org/starters/) available. 

The [quick starter](https://www.gatsbyjs.org/docs/quick-start) uses a starter itelf, and it was enough to get the _Cycletraffic_ site up and running. I did split the content into three pages, mainly so I could use and get my head around the [Link](https://www.gatsbyjs.org/docs/linking-between-pages/) component.  
I didn't go to the effort of using CSS in JS yet but there's a way to just [keep my generatated css](https://www.gatsbyjs.org/docs/global-css/). 

It was _disturbingly_ easy to deplpy the site to Netlify - once it was connected to the [github repo](https://github.com/alanburke/cycletraffic-gatsby) that hosts the source code, it worked out that I was running a Gatsby site and configured the build process immediately. 

I'm barely scratching the surface of what Gatsby is capable of, but that will come in time. In the meantime, thanks to Netlify, I can link directly to the state of the site [just after building in Gatsby](https://5d716d9f8464df934e14bf06--elated-jepsen-d3fc1d.netlify.com/).
