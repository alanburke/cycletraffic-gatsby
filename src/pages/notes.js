import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink post={edge.node} />)

  return (
    <Layout>
    <SEO title="Alan Burke, Website Developer" />
      <h1>Notes on Web Development</h1>
	<h2>Because writing blog posts can feel daunting.</h2>
      <ul>
        {Posts}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
