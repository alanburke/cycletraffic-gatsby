import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TalksPage = () => (
  <Layout>
    <SEO title="Speaking Engagements by Alan Burke" />
    <section class="speaking">
    <h1>Preaching to the masses&hellip;</h1>
    <ul>
      <li><a href="https://dcnlights.drupal.is/sessions">Building a co-lingual website - lessons learned from ireland.ie</a> at <a href="https://dcnlights.drupal.is/">Drupalcamp Northern Lights, Iceland</a></li>
      <li><a href="https://events.drupal.org/dublin2016/sessions/choosing-drupal-insider-advice-irish-multinational">Choosing Drupal - Insights from an Irish multinational</a> at <a href="https://events.drupal.org/dublin2016">DrupalCon Dublin</a> </li>
      <li><a href="https://events.drupal.org/dublin2016/sessions/irelandie-peek-behind-curtain-4-things-make-it-tick">Building a co-lingual website - lessons learned from ireland.ie</a> at <a href="https://events.drupal.org/dublin2016">DrupalCon Dublin</a> </li>
      <li><a href="https://amsterdam2014.drupal.org/session/gss-css-layout-system-thats-2-generations-ahead">GSS - CSS layout system</a> at <a href="https://amsterdam2014.drupal.org">DrupalCon Amsterdam 2014</a></li>
      <li><a href="./assets/presentations/cloudbursting-2012/mobile-first.htm">Mobile First - from the front lines</a> - Cloudbursting</li>
      <li><a href="./assets/pdfs/responsive.pdf">A responsive theme in 50 lines of code</a> - Drupalcamp Dublin</li>
      <li><a href="./assets/pdfs/polyfills.pdf">What the f**k is a polyfill?</a> - Frontend United Amsterdam</li>
      <li><a href="./assets/pdfs/gitdrupalorg.pdf">git on Drupal.org - its easier than you think</a> - Drupalcon Chicago 2010</li>
    </ul>
  </section>
  </Layout>
)

export default TalksPage
