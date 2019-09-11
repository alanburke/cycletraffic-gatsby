import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TalkLink from "../components/talk-link"

export const talksQuery = graphql`
query MyQuery {
  allTalksJson {
    edges {
      node {
        title
        url
        event
      }
    }
  }
}
`
const TalksPage = ({
  data: {
    allTalksJson: { edges },
  },
}) => {
  const Talks = edges
    .map(edge => <TalkLink talk={edge.node} />)

  return (
    <Layout>
    <SEO title="Speaking Engagements by Alan Burke" />
    <section class="speaking">
      <h1>Preaching to the masses&hellip;</h1>
      <ul>
        {Talks}
      </ul>
    </section> 
    </Layout>
  )
}

export default TalksPage
