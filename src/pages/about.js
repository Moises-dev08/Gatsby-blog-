import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1> About Us </h1>
        <p> Post makers</p>
        <p>
          Need a developer? <Link to="/contact">Contact me. </Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
