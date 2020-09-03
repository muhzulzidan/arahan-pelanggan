import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"
const NotFoundPage = () => (
  <div>
  <Header/>
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
  <Footer />
  
  </div>
)
export default NotFoundPage
