---
title: "Up and running with Netlify"
date: "2019-08-28"
tags: jamstack, netlify
path: "/notes/up-running-netlify"
---

I've been using Static hosting services for a few years now, starting with GitHub pages as soon as I got my head around it. It's been good enough to host some small production sites and does a fine job.

I've played around with [Zeit](https://zeit.co/) and [Surge](https://surge.sh/) but never got as far as having a real website up and running. 

I've heard about [Netlify](https://www.netlify.com) for quite a while but it wasn't until I heard [Phil Hawksworth](https://twitter.com/philhawksworth) at [Frontend United](https://www.frontendunited.org/) in May of this year that I knew I was really missing out. 

I bought my own _.ie_ domain name [alanburke.ie](https://www.alanburke.ie) a while back but it only served a redirect to [cycletraffic](https://www.cycletraffic.com) - it was time to get something up there. 

Not being blessed with design skills I took a simple template from [html5up](https://html5up.net/identity) and tweaked it for my own use. 

## So what did it take?

The site is just a static html page, and doesn't make use of a statc site generator just yet, so I committed the code and pushed to a [public github repo](https://github.com/alanburke/alanburkeie). 

Next, over to Netlify to add a free account, and setup a new site. I was prompted to allow Netflify access to the freshly created GitHub repo - a seamless process - and the only configuration required was to specify which folder under the git root contained the actual web page. 

That was it - the site was _instantly_ available at a [Netlify URL](https://elegant-payne-0aa07a.netlify.com/). 

Lastly, I just needed to wire up the [DNS configuration](https://www.netlify.com/docs/custom-domains/#manual) for the [custom domain](https://www.alanburke.ie). 

## And what do I get?

Each deployments, Super-fast hosting and custom domain with SSL cert. And I haven't put my hand in my pocket yet. There's a lot to love. 

Of course, I'm not making much use of the power of Netlify yet, but you have to start somewhere.