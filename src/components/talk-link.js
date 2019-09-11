
import React from "react"

const TalkLink = ({ talk }) => (
  <li>
    <a href={talk.url}>{talk.title}</a> at {talk.event}
  </li>
)

export default TalkLink