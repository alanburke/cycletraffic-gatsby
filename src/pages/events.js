import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import EventData from "../data/events.json"
import Moment from "moment"

const EventsPage = () => (
  <Layout>
    <SEO title="Event participation by Alan Burke" />
    <section class="events">
      <h1>I show up at the occassional event &hellip;</h1>
      <h2>Not in Galway? - Meet me here!</h2>
      <ul>
        {EventData.events.map((data, index) => {
          var now = new Date();
          var eventDate = new Date(data.date);
          if (eventDate > now) {
            var printDate = new Moment(eventDate).format('MMMM YYYY');
            return <li key={`content_item_${index}`}>
              <a href={data.url}>{data.title}</a> - <time dateTime = {data.date} >{printDate}</time>
            </li>
          }
        })}
      </ul>
      <h2>Too Late - But I was here&hellip;</h2>
      <ul>
        {EventData.events.map((data, index) => {
          var now = new Date();
          var eventDate = new Date(data.date);
          if (eventDate < now) {
            var printDate = new Moment(eventDate).format('MMMM YYYY');
            return <li key={`content_item_${index}`}>
              <a href={data.url}>{data.title}</a> - <time dateTime = {data.date} >{printDate}</time>
            </li>
          }
        })}
      </ul>
    </section>
  </Layout>
)

export default EventsPage
