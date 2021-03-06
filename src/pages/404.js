import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Well, this is embarrasing...</h1>
    <p>You just hit a path that doesn&#39;t exist.</p>
  </Layout>
)

export default NotFoundPage
