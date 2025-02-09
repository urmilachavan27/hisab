import React from "react";
import TruckImage from "../images/hero/truck.svg";
import WheelImage1 from "../images/hero/tyre1.svg";
import WheelImage2 from "../images/hero/tyre2.svg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Dashboard from '../images/hero/Dashboard.webp'
const Hero = () => {
  return (
    <>

      {/* <section className="campaign-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold">Automatic e-way bill</h2>
            <p className="mb-3">
              Now, Get an e-way bill automatically when you create an invoice.
            </p>
            <div className="d-flex gap-3">
              <Link href="" className="btn2 ">
                GET STARTED FREE.
              </Link>
              <button className="btn btn-outline-secondary">
                Watch demo video
              </button>
            </div>
          </div>
          <div className="col-md-6 text-center truck-container">
            <img
              src={TruckImage}
              alt="e-way bill image hisab"
              className="truck img-fluid"
            />
            <img
              src={WheelImage1}
              alt="e-way bill wheel hisab"
              className="wheel wheel-left"
            />
            <img
              src={WheelImage2}
              alt="e-way bill wheel hisab"
              className="wheel wheel-right"
            />
          </div>
        </div>


      </section> */}
      {/* <div className="road-container ">
        <div className="road-img">
          
          </div>
        </div> */}
      <section className="accountingsoftware-main">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6">
              <h1 className="accountingsoftware-heading">#1 Free Accounting Software <span>For <br /> Small Business Owners</span></h1>
              <p className="accountingsoftware-p">ProfitBooks simplifies business accounting, invoicing, inventory tracking <br />and reporting using one powerful interface.</p>
              <p className="accountingsoftware-p">100% FREE accounting software. No strings attached.</p>
              <button className="accountingsoftware-btn">Create Your FREE Account Now <span className="accountingsoftware-icon"><FaArrowRight /></span></button>
            </div>
            <div className="col-md-6">
              <img src={Dashboard} width="100%" height="100%" />
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
