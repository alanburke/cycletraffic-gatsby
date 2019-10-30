---
title: "Gatsby - Making use of the Data Layer"
date: "2019-09-11"
tags: netlify, gatsby, graphql
path: "/notes/gatsby-next-steps"
---

In the first edition of this stite in Gatsby, I wasn't really making any use of one of the key features of Gatsby - its ability to allow data from a variety of sources to be _processed_ and then _generated_ into pages.

To rectify that, well, I needed some data. And what you're reading now is [some of that data](/notes). I haven't been blogging, or producing much content online for a while, and now was (another!) attempt to rectify that. I put together some notes on my recent work, in Markdown format. Nothing special, just text and links for now.

The first step was to get Gatsby to recognise this data, which mean adding a plugin to [process the Markdown posts](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) and pull them into the data layer. 

Next was configuing the `gatsby-config` file to interrogate the Graphql layer, pull out the data now available, and generate the pages. 

```javascript
// In your gatsby-config.js
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-notes`,
        path: `${__dirname}/src/pages/notes`,
      },
    },
    resolve: `gatsby-transformer-remark`,
```

So now the data was available at the data layer, the last part of the process was generating the actual HTML pages. For this we move to the `gatsby-node` file, query the data layer and produce the pages.

```javascript
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const noteTemplate = path.resolve(`src/templates/noteTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: noteTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
```
It could be a little more elegant, and I'm in trouble once I hit 1000 posts! But it does the job, and now the world can read my wisdom again.


