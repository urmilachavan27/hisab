import React from "react";
import TruckImage from "../images/hero/truck.svg";
import WheelImage1 from "../images/hero/tyre1.svg";
import WheelImage2 from "../images/hero/tyre2.svg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Dashboard from '../images/hero/Dashboard.webp'
import ReviewRatings from "../images/hero/ReviewRatings.webp"
import FreeInvoicingSoftware from "../images/hero/FreeInvoicingSoftware.webp"
import AccountingSoftware from "../images/hero/AccountingSoftware.webp"
import PurchaseManagement from "../images/hero/PurchaseManagement.webp"
import VendorManagement from "../images/hero/VendorManagement.webp"
import BankReconciliation from "../images/hero/BankReconciliation.webp"
import InventorymanagementReports from "../images/hero/InventorymanagementReports.webp"
import { SlArrowRightCircle } from "react-icons/sl";

 const Hero = () => {
  return (
    <>

     
      
      <section className="">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-md-6" style={{ paddingLeft: "25px", paddingTop:"25px" }}>
              <h1 className="accountingsoftware-heading">#1 Free Accounting Software <span>For  Small Business  Owners</span></h1>
              <p className="accountingsoftware-p">ProfitBooks simplifies business accounting, invoicing, inventory tracking <br />and reporting using one powerful interface.</p>
              <p className="accountingsoftware-p">100% FREE accounting software. No strings attached.</p>
              <button className="accountingsoftware-btn">Create Your FREE Account Now <span className="accountingsoftware-icon"><FaArrowRight /></span></button>
            </div>
            <div className="col-md-6">
              <img src={Dashboard} width="100%" height="100%" className="img-fluid" />
            </div>

          </div>
        </div>
      </section>

      {/* FIRST SECTION END  */}

      {/* SECOND SECTION  START */}

      <section className="review-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center com-images">
              <img
                src={ReviewRatings}
                className="img-fluid review-img"
                alt="Review Ratings"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION  END */}

      {/* THIRD SECTION  START  */}

      <section className="Software-Designed-section">
        <div className="container">
          <h2 className="Accounting-Software-Designed-h2">Accounting Software Designed for Non-Accountants</h2>
          <p className="Accounting-Software-Designed-p">ProfitBooks simplifies accounting for business owners with no accounting experience.</p>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-6">
              <img src={AccountingSoftware} className="Accounting-Software-Designed-img" />
            </div>
            <div className="col-md-6 col-lg-6 mt-5">
              <p className="Accounting-Software-Designed-inner-p">ProfitBooks is amazingly simple to use <b>free accounting software.
              </b> It <br />lets you create beautiful invoices,
                track expenses and manage taxes <br /> without any accounting knowledge.</p>
              <p className="Accounting-Software-Designed-inner-p mt-5">It’s a great alternative to complex accounting software such as Tally, <br /> Quickbooks, Xero or Sage.</p>
              <p className="Accounting-Software-Designed-inner-p mt-5">Over 75,000 businesses across the world trust ProfitBooks for their daily <br />business accounting.</p>
              <button className="accountingsoftware-btn">Create Your Free Account Now <span className="accountingsoftware-icon"><FaArrowRight /></span></button>
            </div>
          </div>
        </div>
      </section>
      {/* THIRD SECTION  END  */}

      {/*  FOUR SECTION  START  */}
      <section className="Software-Designed-section">
        <div className="container">
          <h2 className="Accounting-Software-Designed-h2">Grow Your Sales With Powerful Invoicing</h2>
          <p className="Accounting-Software-Designed-p">Get paid on time and maintain positive cash flow.</p>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <img src={FreeInvoicingSoftware} className="Accounting-Software-Designed-img" />
            </div>
            <div className="col-md-6 col-lg-6">
              <p className="Accounting-Software-Designed-inner-p mt-5">With ProfitBooks accounting software, you can create  professional <br />estimates or invoices and track outstanding payments due with few clicks.</p>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Estimates & Sales Orders
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Automated Email Reminders
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Payment Gateway Integrations
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Multi-user, Multi-currency system
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    In-depth Sales Reports
                  </li>
                </ul>
                <div className="learn-more-link">
                  <p>
                    {"Learn more about Invoicing Features".split("").map((letter, index) => (
                      <span key={index} className="hover-letter">{letter}</span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  FOUR SECTION  END  */}

      {/*  FIVE SECTION  START  */}

      <section className="Software-Designed-section">
        <div className="container">
          <h2 className="Accounting-Software-Designed-h2">Track Inventory With Ease</h2>
          <p className="Accounting-Software-Designed-p">From Purchase To Sales, Track Entire Inventory Lifecycle</p>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <p className="Accounting-Software-Designed-inner-p mt-5">Whether you are manufacturing, distributing,
                selling, servicing, <br /> or just managing the inventory,
                ProfitBooks can handle all your business <br /> processes with ease.</p>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Invoice & Purchase Management
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Sales Order Management
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Manage Multiple Warehouses
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Mult-user, Multi-currency system
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    In-depth Inventory Reports
                  </li>
                </ul>
                <div className="learn-more-link">
                  <p>
                    {"Check out Inventory Management Features".split("").map((letter, index) => (
                      <span key={index} className="hover-letter">{letter}</span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <img src={PurchaseManagement} className="Accounting-Software-Designed-img" />
            </div>
          </div>
        </div>
      </section>
      {/*  FIVE SECTION  END  */}

      {/*  SIX SECTION  START  */}

      <section className="Software-Designed-section">
        <div className="container">
          <h2 className="Accounting-Software-Designed-h2">Take Control of Your Business Expenses</h2>
          <p className="Business-Expence-p"><b>Effortlessly track, categorize, and control your business expenses with ProfitBooks.</b></p>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <img src={VendorManagement} className="Accounting-Software-Designed-img" />
            </div>
            <div className="col-md-6 col-lg-6">
              <p className="Accounting-Software-Designed-inner-p mt-5">ProfitBooks helps you efficiently manage both customers and vendors <br />by keeping track of all payables and receivables in one place.
                Easily <br /> monitor outstanding invoices, record payments,
                and streamline your business <br /> relationships for smooth financial operations.</p>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Invoice & Purchase Management
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Sales Order Management
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Manage Multiple Warehouses
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Mult-user, Multi-currency system
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    In-depth Inventory Reports
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  SIX SECTION  END  */}
      {/*  SEVEN SECTION  START  */}
      <srction className="Software-Designed-section">
        <div className="container">
          <h2 className="Accounting-Software-Designed-h2">Insightful Financial Reporting</h2>
          <p className="Business-Expence-p"><b>Turn your transaction data into insights</b></p>
          <div className="row">
            <div className="col-lg-6 col-md-6 mt-4">
              <p className="Insightful-Finacial-Reporting-p"><b>Real-time Information At A Glance</b></p>
              <p className="Accounting-Software-Designed-inner-p mt-5">
                ProfitBooks gives you instant access to important reports like inventory <br /> valuation,
                low stock alerts, pending orders,
                stock wastage and product- <br />wise transaction report.
              </p>
              <p className="Insightful-Finacial-Reporting-p mt-5"><b>45+ Filterable Reports</b></p>
              <p className="Accounting-Software-Designed-inner-p mt-5">
                All reports in ProfitBooks are fully filterable,
                allowing you to drill down <br /> easily and see the hidden details.
                No more pulling together information <br /> from various excel documents,
                paper trails, and email communications.
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src={InventorymanagementReports} className="Accounting-Software-Designed-img" />
            </div>
          </div>
        </div>
      </srction>
      {/*  SEVEN SECTION END  */}

      {/*  EIGHT SECTION START  */}

      <section className="Bookkeeping-Software-Section">
        <div className="container">
          <h2 className="Accounting-Software-Designed-h2">Comprehensive Bookkeeping Software</h2>
          <p className="Business-Expence-p"><b>From Bank Reconciliation to Manual Journals, manage entire business accounting
          </b></p>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img src={BankReconciliation} className="Accounting-Software-Designed-img" />
            </div>
            <div className="col-md-6 col-lg-6">
              <p className="ProfitBooks-p">With ProfitBooks, you can easily reconcile your bank transactions,
                ensuring your books are always accurate. The platform also simplifies GST return filing,
                keeping you compliant with tax regulations. Plus, you can manage manual journals to record any non-standard transactions for complete financial control.</p>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Import Bank Statements for easy Bank
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    GST Return Filing and Tax Calculations
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Manual Journal Entries
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    Invite Auditors
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle  className="icon-style" />
                    One-click Financial Reports Including Profit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  EIGHT SECTION END  */}

      {/*  NINE SECTION START  */}



    </>
  );
};

export default Hero;
