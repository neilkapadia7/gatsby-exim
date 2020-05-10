import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Mission from "../components/mission"
import Reconditioning from "../images/reconditioning.jpg"
import Health from "../images/health-checkup.jpg"
import Repair from "../images/repair.jpg"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="sec1-home">
      <div className="App">
        <h1 className="site-title">
          <hr className="heading-line" />
          EXIM <br />
          AIR CARE
        </h1>
        <p className="site-description">
          Welcome to Exim AirCare, Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua
        </p>
        <div className="button-div">
          <a href="#sec2-home" className="button-blue">
            Know More
          </a>
        </div>
      </div>
    </div>
    <div id="sec2-home">
      <div className="App">
        <div className="about-sec-main-div">
          <div className="about-sec-left">
            <h1 className="title2">About Exim Aircare</h1>
            <p className="about-sec-para">
              The EXIM AirCare spares are used in various kinds of industries
              including Engineering &amp; automobiles, chemical industry,
              industrial gases, etc. The export of EXIM AirCare spares covers
              countries like Saudi Arabia, Nepal, UK, Asian countries, USA, etc.
              ‘EXIM AirCare’ has its strength in crafting spares based on
              several international origins as per the customized requirement of
              the users. The range of the spares includes Valves and Valve
              Components, Piston, Piston Rings, Rider Ring, Packing Rings,
              Bearing, Gaskets, ‘O’ Rings, Scrapper Rings, Cross Heads,
              Connecting Rods and Liners.
            </p>
            <Link to="/about" className="button-blue">
              Learn More
            </Link>
          </div>
          <div c className="about-sec-right"></div>
        </div>
      </div>
    </div>
    <div id="sec3-home">
      <div className="App">
        <h1 className="title">OUR SERVICES</h1>
        <div className="card-div">
          <div className="card">
            <div className="card-top">
              <img src={Reconditioning} alt="Exim AirCare Reconditioning" />
            </div>
            <div className="card-bottom">
              <h2 className="card-title">RECONDITIONING OF SPARE PARTS</h2>
              <p className="card-body">
                Reconditioning of the compressor is essential for keeping the
                valves in good condition and to enhance the performance of the
                compressors. If the compressors are not kept under maintenance
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={Repair} alt="Exim AirCare Repair" />
            </div>
            <div className="card-bottom">
              <h2 className="card-title">ONSITE REPAIRS AND SERVICING</h2>
              <p className="card-body">
                EXIM AIRCARE provides onsite repairs &amp; services, when you
                need the reliability of compressor committed to keeping every
                compressor running at peak performance, the experienced people
                at
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={Health} alt="Exim AirCare Health Checkup" />
            </div>
            <div className="card-bottom">
              <h2 className="card-title">HEALTH CHECK UP</h2>
              <p className="card-body">
                We are having experienced / well trained compressor specialist
                with successful track records in the field of Oil, Gas,
                Petrochemicals, Refineries, Air Separation Plant,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Mission />

    <div id="sec4-home">
      <div className="row3">
        <div className="box2">
          <i className="fas fa-map-marker-alt"></i>
          <p className="chota_heading3">VISIT OUR OFFICE</p>
          <a href="#!">
            <p className="sub_heading2">
              401 Broadway, 24th Floor
              <br /> New York, NY 10013.
            </p>
          </a>
          <a href="#!">
            <p className="last_chota_heading">GET DIRECTION</p>
          </a>
        </div>
        <div className="box2">
          <i className="far fa-comments"></i>
          <p className="chota_heading3">LET'S TALK</p>
          <a href="#!">
            <p className="sub_heading2">
              Phone: 1-800-222-000
              <br />
              Fax: 1-800-222-002
            </p>
          </a>
          <a href="#!">
            <p className="last_chota_heading">CALL US</p>
          </a>
        </div>
        <div className="box2">
          <i className="far fa-envelope"></i>
          <p className="chota_heading3">E-MAIL US</p>
          <a href="#!">
            <p className="sub_heading2">
              info@yourdomain.com <br />
              hr@yourdomain.com
            </p>
          </a>
          <a href="#!">
            <p className="last_chota_heading">SEND E-MAIL</p>
          </a>
        </div>
        <div className="box2">
          <i className="fas fa-bullhorn"></i>
          <p className="chota_heading3">CUSTOMER SERVICES</p>
          <a href="#!">
            <p className="sub_heading2">
              Lorem Ipsum is simply dummy <br />
              text of the printing.
            </p>
          </a>
          <a href="#!">
            <p className="last_chota_heading">OPEN TICKET</p>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
