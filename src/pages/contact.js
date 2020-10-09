import React from "react"
import Layout from "./../components/layout"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <h1> Contact </h1>
        <p>email@gmail.com</p>
        <p>
          Want to reach me on Linkedin?{" "}
          <a
            href="https://www.linkedin.com/in/moises-perez-web-developer/"
            target="_blank"
            rel="noreferrer"
          >
            Click here.
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
