import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <p className={footerStyles.footer}>
      {" "}
      Created by {data.site.siteMetadata.author} | Full Stack Developer.
      Copyright 2020
    </p>
  )
}

export default Footer
