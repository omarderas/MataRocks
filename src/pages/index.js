import * as React from "react"
import "./home/home.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Button, Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "./home/components/hero"

import Welcome from "./home/components/welcome"
import Rooms from "./home/components/rooms"
import About from "./home/components/about"
import Facilities from "./home/components/facilities"
import Services from "./home/components/services"
import Reviews from "./home/components/reviews"

const IndexPage = () => (
  <Layout>
    <Seo title="Hotel in San Pedro Belize" />
    <Hero />
    <Welcome />
    <Rooms />
    <About />
    <Facilities />
    <Services />
    <Reviews />
    
  </Layout>
)

export default IndexPage
                 