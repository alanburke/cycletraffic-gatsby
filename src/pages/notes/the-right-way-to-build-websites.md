---
title: The right way to build websites
date: 2022-10-22
path: /notes/right-way-to-build-websites
---
I﻿n the back of my head, somewhere, lurks my opinion on what the *right* way to build websites is. For just about every part of the stack, somewhere back there is a option on what the right thing to do it. They are loosely-held opinions, and they do change as I learn, but they are always there.

I﻿ articulate them from time to time, when talking to people or looking at how someone has approached a particular problem. I got as far as writing some of them down on some notes as much as 10 years ago. I managed to hand onto that scribble for a number of year, but alas, when now, finally, I thought it was time to time commit to code, as it where, they can't be found. But I figure its worth articulating them here, and I can see how they hold up over time. 

**T﻿rust in the [basics of the web](https://developer.mozilla.org/en-US/).**

S﻿erve actual HTML with well-marked up content as your foundation. It will stand up in the long run.

U﻿se CSS to style up the pages. Avoid a preprocessor where at all possible, but even when you do use it, use it lightly. I was a [SASS](https://sass-lang.com/) advocate for years before I realised I was veerying away from pure CSS and becoming too highly reliant on it. [PostCSS](https://postcss.org/) approach fits better with how I things should be done.

J﻿S is the cherry on top. Again, if at all possible, let things work without Javascript. But where you do use it, at least layer it on top of the other two.

A﻿nd I think it's this last point that always leaves me struggling with Javascript frameworks. I've seen the rise, and sometimes fall, of [ember.js](https://emberjs.com/), [angular.js](https://angularjs.org/) and more recently [React](https://reactjs.org/). Despite that \[at the time of writing] this site was built using a React project - [Gatsby](https://www.gatsbyjs.com/) and even the content authored with another React project - [Netflify CMS](https://www.netlifycms.org/), they've never felt natural to me, and I've struggled to articulate precisely why.

When [Vue](https://vuejs.org/) came along, its approach to HTML authoring looked closer to my poorly-defined ideals. [Svelte](https://svelte.dev/) and subsequently Sveltekit look to be even closer, thought I haven't really done much work with them.

[D﻿rupal](https://www.drupal.org), for all it's faults and failings, still spits out HTML, and with enough wrangling, something pretty close to whatever HTML you desire. And again, you can output whatever CSS and Javascript you want. Getting the output to be 100% custom is a task that can be achieved, but at a cost. Over the years I've learned to live with the wrinkles while learning that they get easier, and easier, to iron out with each major release. It wasn't always so.

B﻿ut it needs a DB, and web-server and that needs to be fully up-to-date and secured and hosted and all that.

S﻿o when static site generators started making an appearance, I was hooked. This is the way to generate a website. You can host it any where. Practically unbreakable. Survive the [Slashdot effect](https://en.wikipedia.org/wiki/Slashdot_effect) or the [Oprah effect](https://www.investopedia.com/terms/o/oprah-effect.asp) and even the [Late Late show effect](https://www.thesun.ie/tv/7981758/rte-late-late-toy-show-revolut-donates-crashes/) as it is known in Ireland.

I﻿ worked with [Jekyll](https://jekyllrb.com/) for a number of years using it for site like this very one, [www.5km.ie](https://www.5km.ie) and 10k.athenryac.com. The convenience of GitHub Pages was a big draw. I watched with interest as other generators appeared such as [Ghost](https://www.ghost.org) but the arrival of [11ty](https://www.11ty.dev/) had me smitten. JavaScript based, open-source and no opinions at all on how the HTML or even the CSS and JS should be structured. 

T﻿his site is currently run using Gastby, as, at least at one point in time, it seems to have tremendous momentum behind it, and as we're running a number of Gatsby projects at Annertech, I felt to get more up to speed with it. 

B﻿ut I'm not such how long that will last - the lure of rebuilding in 11ty seems too strong.

B﻿ut you still need some way to author the content. I love static-site generators but asking a non-technical person to crack open a code-editor and start writing Markdown files is a great way to lose friends. In this respect, Drupal shines. It's not a perfect editor experience, but it is so malleable from a developer perspective that just about any editorial flow or complex data structure can be handled. At [Annertech](https://www.annertech.com), we have a vast swathe of projects that run on Drupal purely because it has been able to adapt to complex editorial and business requirements thrown at us. 

N﻿o doubt we could have built something better, though unlikely cheaper, in each individual case, using a more bespoke tool, but Drupal has meant we have a very reliable stack across the company. And crucially, this lowers the maintenance overhead for the clients in the long run.

I﻿'m always on the lookout for a CMS, that is *just a CMS*, and thus might be an alternative to Drupal, at least for certain use cases. [Contentful](https://www.contentful.com/) is excellent, but closed-source. A few others looks useful, Ghost included, but they all seem to bring their own static-site generator to the table  - 11ty has got me covered in that regard.

A﻿s soon as [Prose.io ](https://prose.io/)made an appearance, I tried it out, and it was a million times better than just a code editor, but still felt a little clunky. As along as you were writing just text, and the project was hosted in Githhub pages, it was just fine.

T﻿his site is currently edited with NetlifyCMS and it does the tricky. Not nearly as full-featured as Drupal or some other products like Ghost, but there are an awful lot of projects where all that's needed is a clean interface to add or update some items of text. And it ticks that box well.

T﻿he democratisation of CDNs, once only available to those with deep-pockets, again tipped the balance towards Static-site generators in my head. But in the absence of any real competitors to Drupal in the CMS stakes, Drupal is still winning at the company level, and instead of just generating all the pages in advance, I'm becoming more familiar with HTTP cache headers and flush APIs.

O﻿f course new frameworks and approaches appear all the time. In between starting this item and finishing it, I stumbled across [Enhance](https://enhance.dev/docs/) which nails its colours to the mast front and centre with a [core philosophy](https://enhance.dev/docs/learn/why-enhance)

> Our mission is to enable anyone to build multi-page dynamic web apps while staying as close to the platform as possible.

N﻿ow that piqued my interest - a better articulated version of my own "**T﻿rust in the basics of the web**."

D﻿igging around there led me to [Architect](https://arc.codes/docs/en/get-started/quickstart) : "a simple framework for building and delivering powerful Functional Web Apps (FWAs) on AWS" and to [Begin](https://learn.begin.com/) , which is an alternate approach to Serverless, (I think). 

I﻿'m liking a lot of what I read here. In particular the approach to [Progressive Enhancement](https://blog.begin.com/posts/2022-08-05-progressively-enhancing-form-submissions-with-web-components) even if [I don't agree with everything](https://blog.begin.com/posts/2022-05-10-why-i-no-longer-use-static-site-generators) they say. I can see myself learning more and these tools and [FWAs](www.fwa.dev) in general.

I﻿ guess there's always something new and shiny to learn about.