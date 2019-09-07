import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <li>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} <small>[{post.frontmatter.date}</small>]
    </Link>
  </li>
)

export default PostLink