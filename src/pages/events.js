import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventsPage = () => (
  <Layout>
    <SEO title="Event participation by Alan Burke" />
    <section class="events">
    <h3>Not in Galway? - Meet me here!</h3>
    <ul>
      <li>No events currently on the agenda.</li>
    </ul>
    <h3>Too Late - But I was here&hellip;</h3>
    <ul>
      <li><a href="http://www.frontendunited.org/">FrontEnd United Utrecht</a> - <time datetime="2019-05-17">May 2019</time></li>
      <li><a href="https://events.drupal.org/vienna2017">DrupalCon Vienna</a> - <time datetime="2017-09-26">September 2017</time></li>
      <li><a href="http://www.frontendunited.org/">FrontEnd United Athens</a> - <time datetime="2017-05-26">May 2017</time></li>
      <li><a href="https://dcnlights.drupal.is/">Drupalcamp Northern Lights, Iceland</a> - <time datetime="2017-02-24">February 2017</time></li>
      <li><a href="https://events.drupal.org/dublin2016">DrupalCon Dublin</a> - <time datetime="2016-09-01">September 2016</time></li>
      <li><a href="http://2016.frontendunited.org/">FrontEnd United Ghent</a> - <time datetime="2016-05-26">May 2016</time></li>
      <li><a href="https://amsterdam2014.drupal.org/">DrupalCon Amsterdam</a> - <time datetime="2014-11-09">September 2014</time></li>
      <li><a href="http://2014.drupal.ie/">Drupalcamp Dublin 2014</a> - <time datetime="2014-05-16">May 2014</time></li>
      <li><a href="http://drupalcampcork.org/">Drupalcamp Cork</a> - <time datetime="2013-11-08">November 2013</time></li>
      <li><a href="http://prague2013.drupal.org/">DrupalCon Prague</a> - <time datetime="2013-09-01">September 2013</time></li>
      <li><a href="http://www.drupalcampireland.org/">Drupalcamp Dublin</a> - <time datetime="2013-03-05">May 2013</time></li>
      <li><a href="http://frontendunited.org/">Frontend United</a> - <time datetime="2013-04-13">April 2013</time></li>
      <li><a href="http://munich2012.drupal.org/">DrupalCon Munich</a> - <time datetime="2012-08-01">August 2012</time></li>
    </ul>
  </section>
  </Layout>
)

export default EventsPage
