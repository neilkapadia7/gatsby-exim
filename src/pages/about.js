import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Mission from "../components/mission"
import ServiceCard from "../components/ServiceCard"
import AboutPic1 from "../images/about-img10.jpg"
import AboutPic2 from "../images/about-img3.jpg"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div id="sec1-home">
        <div className="App">
          <h1 className="title">About Us</h1>
          <center>
            <p className="page-description-para">
              We are idea-driven, working with a strong focus on design and user
              experience. Our projects should engage your audience, we want to
              create wonderful digital things that people love to be part of and
              use.
            </p>
          </center>
          <div className="about-page-main-div">
            <div className="about-page-left">
              <img src={AboutPic1} alt="Exim Air Care" />
            </div>
            <div className="about-page-right">
              <h3 className="about-heading-para">WHAT WE DO?</h3>
              <p className="about-subheading-para">
                Exim AirCare is a branch of Exim group which provides you
                compressors and air filters as per your necessities.
              </p>
              <p className="about-page-para">
                EXIM group has been in the field of export-import since the year
                2000.After successfully attaining its position in the world of
                corporate gift suppliers, EXIM has now come forward with its
                EXIM AirCare branch which provides compressors and air filters
                across India and overseas. Incepted by the stalwart Mr. Md.
                Shamse Azam, EXIM AirCare has grown across the country as well
                as in overseas. Hence, establishing themselves as a high end
                solution provider in the Compressor spares and air filter
                industry.
              </p>
            </div>
          </div>

          <div className="about-page-main-div2">
            <div className="about-page-left2">
              <h3 className="about-heading-para">WHY US?</h3>
              <p className="about-subheading-para">
                The EXIM AirCare spares are used in various kinds of industries
                including Engineering &amp; automobiles, chemical industry,
                industrial gases, etc.
              </p>
              <p className="about-page-para">
                The export of EXIM AirCare spares covers countries like Saudi
                Arabia, Nepal, UK, Asian countries, USA, etc. ‘EXIM AirCare’ has
                its strength in crafting spares based on several international
                origins as per the customized requirement of the users. The
                range of the spares includes Valves and Valve Components,
                Piston, Piston Rings, Rider Ring, Packing Rings, Bearing,
                Gaskets, ‘O’ Rings, Scrapper Rings, Cross Heads, Connecting Rods
                and Liners.
              </p>
            </div>
            <div className="about-page-right2">
              <img src={AboutPic2} alt="Exim Air Care" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Mission />
      </div>
      <div className="sec3-home">
        <div className="App">
          <center>
            <h1 className="title3">Our Services</h1>
          </center>
          <ServiceCard />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
