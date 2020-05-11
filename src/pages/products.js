import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Mission from "../components/mission"
import ServiceCard from "../components/ServiceCard"
import Airfilter from "../images/products/air-filter.jpg"
import Bearing from "../images/products/bearing.jpg"
import Gasket from "../images/products/gasket.jpg"
import Oring from "../images/products/o-ring.jpg"
import Piston from "../images/products/piston.jpg"
import PreFilter from "../images/products/pre-filters.jpg"
import SpecialFIlter from "../images/products/special-filter.jpg"
import Valve from "../images/products/valve.jpg"

const products = () => {
  return (
    <Layout>
      <SEO title="Products" />
      <div id="sec1-home">
        <div className="App">
          <h1 className="title">Our Products</h1>
          <center>
            <p className="page-description-para">
              We are idea-driven, working with a strong focus on design and user
              experience. Our projects should engage your audience, we want to
              create wonderful digital things that people love to be part of and
              use.
            </p>
          </center>

          <div className="product-div">
            <div className="product-card">
              <div className="product-card-top">
                <img src={Valve} alt="valve" />
              </div>
              <div className="product-card-bottom">
                <h3 className="card-title">Valves and Valves components</h3>
                <p className="card-body">
                  We offer variety of valve components seat plates, channels,
                  channel springs, wear springs, guide and guide inserts, Valve
                  plates, spring &amp; spring plates, lift washers, unloaders,
                  etc...
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-top">
                <img src={Piston} alt="piston" />
              </div>
              <div className="product-card-bottom">
                <h3 className="card-title">
                  Piston rings, rider rings, oil scrapper rings
                </h3>
                <p className="card-body">
                  Rings are made of bronze, Babbitt, cast iron, filled PTFE
                  compound, PEEK, etc. We offer a wide variety of service
                  applications, operating pressure and temperatures.
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-top">
                <img src={Gasket} alt="gasket" />
              </div>
              <div className="product-card-bottom">
                <h3 className="card-title">Gasket</h3>
                <p className="card-body">
                  A wide range of gaskets made up from soft iron, compressed
                  asbestos, aluminum, asbestos-filled copper.
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-top">
                <img src={Bearing} alt="bearing" />
              </div>
              <div className="product-card-bottom">
                <h3 className="card-title">Bearings</h3>
                <p className="card-body">
                  Bearings made from graded bronze, Babbitt or aluminum alloy
                  are manufactured to perfect dimension tolerance.
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-top">
                <img src={Oring} alt="o-ring" />
              </div>
              <div className="product-card-bottom">
                <h3 className="card-title">O-Rings</h3>
                <p className="card-body">
                  O-rings of neoprene rubber, silicon rubber, Viton rubber are
                  also developed to withstand severe operating conditions.
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-top">
                <img src={SpecialFIlter} alt="special filters" />
              </div>
              <div className="product-card-bottom">
                <h3 className="card-title">Special Air filters</h3>
                <p className="card-body">
                  Special filters such as STAT FILTERS, GUARD, DUST BAG &amp;
                  BAG HOUSING, etc. are produced. STAT is an electrostatic
                  permanent washable air filter. GUARD filters are designed to
                  be used in extreme heat situations.
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-top">
                <img src={PreFilter} alt="pre-filter" />
              </div>
              <div className="product-card-bottom">
                <h3 className="card-title">
                  Pre-filters and replacement rolls
                </h3>
                <p className="card-body">
                  Types of pre-filters such AS PANEL, PLEAT, POLYFIBER,
                  INDUSTRIAL ROBUST, ALUMINIUM, RING PANEL, METALLIC, ANDREA
                  PLEAT, CUBE FILTERS, etc. are produced as per the industrial
                  requirements. Replacement rolls are usually made of fiberglass
                  pads, synthetic rolls, hog hair rolls, etc.
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-top">
                <img src={Airfilter} alt="air filters" />
              </div>
              <div className="product-card-bottom">
                <h3 className="card-title">Carbon Air Filters</h3>
                <p className="card-body">
                  CARBON TRAY FILTERS with activated carbon granules in a metal
                  frame for odor removal. CARBON FILTERS are used when
                  undesirable gases, vapors, odors or fumes are present.
                </p>
              </div>
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

export default products
