import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Alan Burke, Website Developer" />
    <h1> Hello! I'm Alan Burke. I'm a website developer specialising in <a href="https://www.drupal.org">Drupal</a>, jamstack websites, and front-end perfomance.</h1>
    <h2>I work for <a title="Drupal Development, Ireland" href="https://www.annertech.com">Annertech</a>, where we build <a href="https://www.annertech.com/case-studies">great websites</a> and help people get the most from the Internet.</h2>
    <p><small>Luckily, <a href="https://www.annertech.com/about">some other people</a> do the design work!</small></p>

    <section className="contact">
    <h3>Don't be shy, Get in touch!</h3>
    <ul>
      <li className="mail"><i className="icon-envelope icon-large"></i><a href="mailto:alan@cycletraffic.com">alan@cycletraffic.com</a></li>
      <li className="twitter"><i className="icon-twitter-sign icon-large"></i><a href="http://twitter.com/alanjosephburke">@alanjosephburke</a></li>
      <li className="drupal"><i className="icon-tint icon-large"></i> <a href="http://drupal.org/user/35997">alanburke on drupal.org</a></li>
      <li className="github"><i className="icon-github-sign icon-large"></i> <a href="http://github.com/alanburke">alanburke on github</a></li>
    </ul>
  </section>

  <section className="work">
    <h3>So what have I been involved with lately?</h3>
    <ul>
      <li><a href="https://www.folens.ie">Folens Publishers</a></li>
      <li><a href="https://www.bothar.ie">Bóthar</a></li>
      <li><a href="https://www.avonmore.ie">Avonmore</a></li>
      <li><a href="https://www.esri.ie">Economic and Social Research Institute</a></li>
      <li><a href="https://web.actuaries.ie">Society of Actuaries</a></li>
      <li><a href="https://www.glanbianutritionals.com">Glanbia Nutritionals</a></li>
      <li><a href="http://freitag.ch">Freitag</a></li>
      <li><a href="http://www.cancer.ie">Irish Cancer Society</a></li>
      <li><a href="http://www.5km.ie">Galway 5km series</a></li>
      <li><a href="http://www.athenryac.com">Athenry Athletic Club</a></li>
    </ul>
  </section>
  
  </Layout>
)

export default IndexPage
