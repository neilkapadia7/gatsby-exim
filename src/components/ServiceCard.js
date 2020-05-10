import React from "react"
import Reconditioning from "../images/reconditioning.jpg"
import Health from "../images/health-checkup.jpg"
import Repair from "../images/repair.jpg"

const ServiceCard = () => {
  return (
    <div className="card-div">
      <div className="card">
        <div className="card-top">
          <img src={Reconditioning} alt="Exim AirCare Reconditioning" />
        </div>
        <div className="card-bottom">
          <h2 className="card-title">RECONDITIONING OF SPARE PARTS</h2>
          <p className="card-body">
            Reconditioning of the compressor is essential for keeping the valves
            in good condition and to enhance the performance of the compressors.
            If the compressors are not kept under maintenance
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
            EXIM AIRCARE provides onsite repairs &amp; services, when you need
            the reliability of compressor committed to keeping every compressor
            running at peak performance, the experienced people at
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
            We are having experienced / well trained compressor specialist with
            successful track records in the field of Oil, Gas, Petrochemicals,
            Refineries, Air Separation Plant,
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
