import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import InvoicingSummary from "../images/hero/InvoicingSummary.webp"
import { HiSearch } from "react-icons/hi";
import { Tabs, Collapse } from "antd";
import DashboardBusinessAccounting from "../images/hero/DashboardBusinessAccounting.webp"
import OutstandingReceiptsReport from "../images/hero/OutstandingReceiptsReport.webp"
import "antd/dist/reset.css"; // Ant Design CSS
import FinacialReports from "../images/hero/FinancialReports.webp"
import Inventorymanagement from "../images/hero/InventoryManagement.webp"
import inventorymanagementsoftware from "../images/hero/inventorymanagementsoftware.webp"
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import GooglePlay from "../images/hero/GooglePlay.webp"
import AppStore from "../images/hero/AppStore.webp"
import AppChat from "../images/hero/AppChat.webp"
import businessTips1 from "../images/hero/businessTips1.png"
import businessTips2 from "../images/hero/businessTips2.png"
import businessTips3 from "../images/hero/businessTipse3.png"
import businessTips4 from "../images/hero/businessTipse4.png"
import trustedpeopleimg1 from "../images/hero/trustedpeopleimg1.webp"
import trustedpeopleimg2 from "../images/hero/trustedpeopleimg2.webp"
import trustedpeopleimg3 from "../images/hero/trustedpeopleimg3.webp"
import CapterraLogo from "../images/hero/CapterraLogo.webp"
import { RiUser3Fill } from "react-icons/ri";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Footer from "./Footer";

import { IoMdStar } from "react-icons/io"; const { TabPane } = Tabs;
const Hero = () => {
  const { Panel } = Collapse;
  const [showTopBtn, setShowTopBtn] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>



      <section className="First-Software-Section">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-md-6" style={{ paddingLeft: "25px", paddingTop: "25px" }}>
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
            <div className="col-md-6 col-lg-6 mt-3">
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
              <p className="Accounting-Software-Designed-inner-p mt-3">With ProfitBooks accounting software, you can create  professional <br />estimates or invoices and track outstanding payments due with few clicks.</p>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Estimates & Sales Orders
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Automated Email Reminders
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Payment Gateway Integrations
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Multi-user, Multi-currency system
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    In-depth Sales Reports
                  </li>
                </ul>
                <div className="learn-more-link">
                  <p> Learn more about Invoicing Features </p>
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
                    <SlArrowRightCircle className="icon-style" />
                    Invoice & Purchase Management
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Sales Order Management
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Manage Multiple Warehouses
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Mult-user, Multi-currency system
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    In-depth Inventory Reports
                  </li>
                </ul>
                <div className="learn-more-link">
                  <p className="">

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
                    <SlArrowRightCircle className="icon-style" />
                    Invoice & Purchase Management
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Sales Order Management
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Manage Multiple Warehouses
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Mult-user, Multi-currency system
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
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
      <section className="Software-Designed-section">
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
      </section>
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
                    <SlArrowRightCircle className="icon-style" />
                    Import Bank Statements for easy Bank
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    GST Return Filing and Tax Calculations
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Manual Journal Entries
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Invite Auditors
                  </li>
                  <li className="icons-content">
                    <SlArrowRightCircle className="icon-style" />
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

      <section className="Tax-and-GST-section">
        <div className="container">
          <h2 className="Tax-and-GST-h2 ">Making Tax & GST Compliance Easy</h2>
          <p className="Business-Expence-p">Stay tax-ready when you manage day-to-day transactions.</p>
          <div className="row " style={{ marginTop: "10vh" }}>
            <div className="col-lg-4 col-md-4">
              <h3 className="Tax-and-GST-h3">Automate GST Calculation</h3>
              <p className="Tax-and-GST-p">When you create a invoices or purchases, CGST, IGST,
                or SGST rates are automatically calculated,
                saving you time and eliminating manual calculations.</p>
            </div>
            <div className="col-lg-4 col-md-4">
              <h3 className="Tax-and-GST-h3">E-Way Bills</h3>
              <p className="Tax-and-GST-p">You can generate an e-Way bill with all the
                transport company details while creating an invoice,
                credit note or delivery challan.</p>
            </div>
            <div className="col-lg-4 col-md-4">
              <h3 className="Tax-and-GST-h3">HSN/SAC Codes</h3>
              <p className="Tax-and-GST-p">Add your HSN or SAC code for the products you sell or
                services you provide to ensure GST compliance.
                You can also save GSTN of your customers & vendors.</p>
            </div>
          </div>
        </div>
      </section>
      {/*  NINE SECTION END  */}

      {/*  TEN SECTION START  */}

      <section className="Bookkeeping-Software-Section">
        <div className="container">
          <h2 className="Accounting-Software-Designed-h2">A Complete Accounting Solution</h2>
          <p className="Business-Expence-p"><b>Your search for the best accounting software ends here! </b></p>

          <div className="Outer-section" >
            <Tabs defaultActiveKey="1" centered animated={{ inkBar: true, tabPane: false }}>
              <TabPane tab="Invoicing" key="1">
                <div className="inner-section">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <p className="Invoicing-tab-p">
                        Our intuitive invoicing feature allows you to create and send professional invoices quickly and easily.
                        Customize templates, add line items, and track payments all in one place,
                        so you can focus on what you do best—running your business.
                      </p>
                      <div className="icons-section">
                        <ul className="icons-section-main">
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Estimates & Sales Orders
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Invoice Reminders
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Templates & Customisation
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Multi-currency & Multi-User
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Sales Reports
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img src={InvoicingSummary} alt="Invoicing Summary" className="Accounting-Software-Designed-img" />
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Payables & Receivables" key="2">
                <div className="inner-section">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <p className="Invoicing-tab-p">
                        From purchase to sales,
                        track your entire inventory lifecyle with ProfitBooks.
                        Trusted by thousands of traders & manufacturers.
                      </p>
                      <div className="icons-section">
                        <ul className="icons-section-main">
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Outstanding Receivables
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Vendor Payment Tracking
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Record Advance Payments
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Allocation of Advance Payments
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Customer Portal
                          </li>
                        </ul>
                        <button className="Explore-Feature-btn">
                          <span className="search-icon"><HiSearch /> </span>Explore Feature</button>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                      <img src={OutstandingReceiptsReport} alt="Invoicing Summary" className="Accounting-Software-Designed-img" />
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Inventory Management" key="3">
                <div className="inner-section">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <p className="Invoicing-tab-p">
                        From purchase to sales, track your entire financial
                        life cycle with ProfitBooks’ 45+ filterable financial reports.
                        Trusted by thousands of businesses across the globe.
                      </p>
                      <div className="icons-section">
                        <ul className="icons-section-main">
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Create Purchase Orders
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Record Production, Wastage & Stock Transfer
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Maintain Multiple Warehouses
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Manage Vendors & Their Outstanding
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            In-depth Inventory Reports
                          </li>
                        </ul>
                        <button className="Explore-Feature-btn">
                          <span className="search-icon"><HiSearch /> </span>Explore Feature</button>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                      <img src={Inventorymanagement} alt="Invoicing Summary" className="Accounting-Software-Designed-img" />
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Business Accounting" key="4">
                <div className="inner-section">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <p className="Invoicing-tab-p">
                        ProfitBooks is the simplest online accounting software that lets you create great looking professionals invoices,
                        track expenses, record transactions and more; all on the cloud!
                      </p>
                      <div className="icons-section">
                        <ul className="icons-section-main">
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Chart of Accounts
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Journal Entries
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Bank Reconcilliation
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Invitation to Auditor
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Project Management
                          </li>
                        </ul>

                      </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                      <img src={DashboardBusinessAccounting} alt="Invoicing Summary" className="Accounting-Software-Designed-img" />
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Financial Reporting" key="5">
                <div className="inner-section">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <p className="Invoicing-tab-p">
                        ProfitBooks provides over 45 comprehensive financial reports,
                        from detailed sales summaries
                        to in-depth inventory analysis.
                        Get the insights you need to make informed decisions and drive your business forward.
                      </p>
                      <div className="icons-section">
                        <ul className="icons-section-main">
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Balance Sheet, P & L and Cashflow Statement
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Transaction Reports Like Ledger, Day Book, etc
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Audit Trail & Employee Reports
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Email Invoice
                          </li>
                          <li className="Invoicing-icons-content">
                            <SlArrowRightCircle className="icon-style" />
                            Sales & Expense Reports
                          </li>
                        </ul>
                        <button className="Explore-Feature-btn">
                          <span className="search-icon"><HiSearch /> </span>Explore Feature</button>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                      <img src={FinacialReports} alt="Invoicing Summary" className="Accounting-Software-Designed-img" />
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </section>

      {/*  TEN SECTION END  */}

      {/* ELEVEN SECTION START */}
      <section className="All-the-ways-section">
        <div className="container">
          <h2 className="Accounting-Software-Designed-h2">All The Ways We Can Help You</h2>
          <p className="Business-Expence-p">ProfitBooks Provides A Complete Accounting Suite For Small & Medium Business</p>
          <div className="row " style={{ marginTop: "5vh" }}>
            <div className="col-lg-4 col-md-4">
              <h4 className="All-The-Ways-h4">Invoicing</h4>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Estimates/Quotations
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Sales Orders
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Multi-currency Invoices
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Payment Gateway Integrations
                  </li>
                </ul>

              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4 className="All-The-Ways-h4">Receipts</h4>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Record Receipts
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Record Advance Receipts
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Allocation of Receipts to Invoices
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Record Non-Invoice Income
                  </li>
                </ul>

              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4 className="All-The-Ways-h4">Expense Management</h4>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Record Business Expenses
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Inventory Purchases
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Create Purchase Orders
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Vendor Management
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4">
              <h4 className="All-The-Ways-h4"> Inventory Management</h4>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Record Consumption of Raw Materials
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Record production of Finished Goods
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Stock Transfer Within Warehouses
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Record Inventory Wastage
                  </li>
                </ul>

              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4 className="All-The-Ways-h4"> Customer & Vendors</h4>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Customer Statement In 1-Click
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Customer Specific Currency
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Record Vendor Payments
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Track Vendor Advances
                  </li>
                </ul>

              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4 className="All-The-Ways-h4">User Management</h4>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Create Multiple Users
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Role-based Access
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Special Role For Sales
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Invite Your Accountant
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4">
              <h4 className="All-The-Ways-h4">Banking</h4>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Import Bank Statements
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Easy Reconciliation
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Record Deposits & Withdrawals
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Transfer Entries a.k.a. Contra Entries
                  </li>
                </ul>

              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4 className="All-The-Ways-h4">Business Accounting</h4>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Chart of Accounts
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Create Journal Entries
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Auditor Access
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Project-wise Categorisation
                  </li>
                </ul>

              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4 className="All-The-Ways-h4">45+ Insightful Reports</h4>
              <div className="icons-section">
                <ul className="icons-section-main">
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Balance Sheet, Profit & Loss, Cashflow
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Taxation Reports
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Sales Reports
                  </li>
                  <li className="Invoicing-icons-content">
                    <SlArrowRightCircle className="icon-style" />
                    Audit Trail
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ELEVEN SECTION END */}


      {/*  TWELEVE SECTION START */}

      <section className="Remote-Bookkeeping-Service">
        <h2 className="Remote-Bookkeeping-h2">Remote Bookkeeping Service </h2>
        <p className="Remote-Bookkeeping-p">Don’t have time for accounting? Let us handle it for you!</p>
        <div className="container">
          <div className="row" style={{ marginTop: "5vh" }}>
            <div className="col-md-6 col-lg-6">
              <img src={inventorymanagementsoftware} className="Accounting-Software-Designed-img" />
            </div>
            <div className="col-md-6 col-lg-6">
              <p className="Remote-Bookkeeping-Service-p">Our team of expert accountants will help you with accounting & tax filing.
                All you have to do is to send your bank statement,
                invoices & expense bills to us and your dedicated bookkeeper will do the rest.</p>
              <ul className="Remote-Bookkeeping-main">
                <li className="Remote-Bookkeeping-icons-content">
                  <IoIosArrowForward className="Remote-Bookkeeping-icon-style" />
                  Always on-time tax filing
                </li>
                <li className="Remote-Bookkeeping-icons-content">
                  <IoIosArrowForward className="Remote-Bookkeeping-icon-style" />
                  Up to date bookkeeping of all transactions
                </li>
                <li className="Remote-Bookkeeping-icons-content">
                  <IoIosArrowForward className="Remote-Bookkeeping-icon-style" />
                  Monthly reporting of financial performance
                </li>
                <li className="Remote-Bookkeeping-icons-content">
                  <IoIosArrowForward className="Remote-Bookkeeping-icon-style" />
                  Call with expert accountants to address queries
                </li>
              </ul>
            </div>
          </div>
          <div className="btn-grp d-flex justify-content-center">
            <button className="learn-more-btn">Learn More About This Service <sapn className="learn-more-btn-icon"><IoArrowForwardSharp /></sapn></button>
          </div>
        </div>
      </section>
      {/*  TWELEVE SECTION END */}

      {/*  THIRTEEN SECTION START */}
      <section className="Accounting-Software-Designed-h2">
        <div className="container">
          <h2 className="Accounting-Software-Designed-h2">Your Success is Our Success!</h2>
          <div className="row " style={{ marginTop: "5vh" }}>
            <div className="col-md-6 col-lg-6">
              <p className="Our-Success-p">
                We understand that we can succeed only when each of our  <br />customers is happy and successful.
                Once you signup, you’ll get <br /> access to:
              </p>
              <ul className="Our-Success-ul">
                <li className="Our-Success-li">In-app chat support available in 3 languages, 5 days a week.</li>
                <li className="Our-Success-li">A complete Support Center with lots of How-To guides.</li>
                <li className="Our-Success-li">A YouTube channel with demos and small tutorials.</li>
                <li className="Our-Success-li">A business blog filled with articles that help you grow your business.</li>
                <li className="Our-Success-li">You can now manage your finances from wherever you are through<br /> the ProfitBooks app for iOS and Android.</li>
              </ul>
              <div className="app-store-img">
                <img src={AppStore} width="120" height="40" alt="App Store" />
                <img src={GooglePlay} width="120" height="40" alt="Google Play" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <img src={AppChat} />
            </div>
          </div>
        </div>
      </section>
      {/*  THIRTEEN SECTION END */}

      {/*  FOURTEEN SECTION START */}

      <div className="Expert-Tips-section">
        <div className="container">
          <h2 className="Expert-Tips-h2">Expert Tips For Better Running Your Business</h2>
          <p className="Accounting-Software-Designed-p">
            Check Out Our Extensively Researched Blog Posts
          </p>
          <div className="row" style={{ marginTop: "5vh" }}>
            <div className="col-md-3 col-lg-3">
              <img src={businessTips1} className="zoom-image" width="100%" height="100%" />
              <p className="Expert-Tips-p">
                Financial Planning for Seasonal Sales in Online Clothing Businesses
              </p>
            </div>
            <div className="col-md-3 col-lg-3">
              <img src={businessTips2} className="zoom-image" width="100%" height="100%" />
              <p className="Expert-Tips-p">
                5 FREE Invoicing Software in Australia
              </p>
            </div>
            <div className="col-md-3 col-lg-3">
              <img src={businessTips3} className="zoom-image" width="100%" height="100%" />
              <p className="Expert-Tips-p">
                6 Best GST Billing Software in India
              </p>
            </div>
            <div className="col-md-3 col-lg-3">
              <img src={businessTips4} className="zoom-image" width="100%" height="100%" />
              <p className="Expert-Tips-p">
                Best International Payment Gateway In India
              </p>
            </div>
          </div>
          <div className="Experts-Tips-btn">
            <button className="Explore-Feature-btn">
              <span className="search-icon"><HiSearch /> </span>Explore More Articles</button>
          </div>
        </div>
      </div>
      {/*  FOURTEEN SECTION END */}

      {/*  FIFTEEN SECTION START */}
      <div className="Trusted-By-Over-section">
        <h2 className="Trusted-By-Over-h2">Trusted By Over 75,000+ Businesses Across The World</h2>
        <div className="container">
          <div className="row ">
            <div className="col-md-4 col-lg-4">
              <div className="trusted-card">
                <img src={trustedpeopleimg1} />
                <p className="card-content">“Very Satisfied! Very convenient to<br /> make customer invoices and apply <br />taxes as needed.
                  Invoices are the Key. <br />Easy Creation, modification, and Generation.”</p>
                <h4 className="trusted-people-name">Ankush P., Systems Engineer</h4>
                <img src={CapterraLogo} style={{ marginTop: "20px" }} />
                <div className="start-icon">
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="trusted-card">
                <img src={trustedpeopleimg2} />
                <p className="card-content">“Profitbooks saves lots of time and <br /> dollars for me.
                  My experience with <br /> profit books is as excellent as walking <br />on a piece of cake.”</p>
                <h4 className="trusted-people-name">Ankush P., Systems Engineer</h4>
                <img src={CapterraLogo} style={{ marginTop: "20px" }} />
                <div className="start-icon">
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="trusted-card">
                <img src={trustedpeopleimg3} />
                <p className="card-content">This is the best software so far that I <br /> have encountered for use by small <br /> commissaries.
                  It can function as an  <br />alternative to other expensive ERP solutions”</p>
                <h4 className="trusted-people-name">Ankush P., Systems Engineer</h4>
                <img src={CapterraLogo} style={{ marginTop: "20px" }} />
                <div className="start-icon">
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                  <span className="start-icon-style"> <IoMdStar /></span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/*  FIFTEEN SECTION END */}


      {/*  SIXTEEN SECTION START */}
      <div className="Free-Accounting-Software-section">
        <div className="container">
          <h2 className="Free-Accounting-Software-h2"> Get 100% FREE Accounting Software</h2>
          <p className="Accounting-Software-Designed-p">Take Control of Your Billing, Inventory, Taxes and Complete Business Accounting!</p>
          <div className="row justify-content-center align-items-center" style={{ marginTop: "5vh", }}>
            <div className="col-md-5 col-lg-5 start-free-card" style={{ padding: "25px" }}>
              <h3 className="start-free-h3"><b>Start FREE !</b></h3>
              <p className="start-free-p">
                Powerful accounting software <br />
                backed with remote bookkeeping <br />
                service.
              </p>
              <button className="start-free-btn">
                <span className="start-free-btn-icon"><RiUser3Fill /></span> Get Your FREE Account
              </button>
            </div>

            <div className="col-md-5 col-lg-5">
              <ul className="icons-section-main">
                <li className="Invoicing-icons-content">
                  <SlArrowRightCircle className="icon-style" />
                  Create invoices & receive payments
                </li>
                <li className="Invoicing-icons-content">
                  <SlArrowRightCircle className="icon-style" />
                  Track business expenses
                </li>
                <li className="Invoicing-icons-content">
                  <SlArrowRightCircle className="icon-style" />
                  Manage inventory
                </li>
                <li className="Invoicing-icons-content">
                  <SlArrowRightCircle className="icon-style" />
                  Prepare tax reports
                </li>
                <li className="Invoicing-icons-content">
                  <SlArrowRightCircle className="icon-style" />
                  Get access to 45+ financial reports
                </li>
                <li className="Invoicing-icons-content">
                  <SlArrowRightCircle className="icon-style" />
                  Outsource accounting to experts
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/*  SIXTEEN SECTION END */}


      {/*  SEVENTEEN SECTION START */}


      <section className="Frequently-Asked-Questions-section">
        <div className="container">
          <h2 className="Frequently-Asked-Questions-h2">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Collapse
                accordion
                expandIcon={({ isActive }) =>
                  isActive ? <MinusOutlined className="faq-icon" /> : <PlusOutlined className="faq-icon" />
                }
                className="custom-collapse" >
                <Panel header="What is your refund policy?" key="1">
                  <div className="collapse-data">"We, at ProfitBook are on a mission to help 1 million business owners manage their finances efficiently.
                    Apart from the free plan,
                    we offer a premium plan for companies that need multiple users and integrations.
                    We make enough money from the premium plan to support our free offering".
                  </div>
                </Panel>
                <Panel header="Hows this better than creating orders from Excel?" key="2">
                  <div>Unlike Excel, where data duplication and linking errors are common due to manual entry and static spreadsheets,
                    ProfitBooks ensures real-time updates across all your financial data.
                  </div>
                  <br />
                  <div>With ProfitBooks, information is automatically synced—so when you update one entry, it reflects across invoices,
                    expense records, and reports instantly. This eliminates the need for manual linking, reduces errors,
                    and saves you from the hassle of updating multiple sheets.</div>
                  <br />
                  <div>It provides real-time insights, easy collaboration with your team or accountant,
                    and integrates with other business tools—features that spreadsheets can’t match.</div>
                </Panel>
                <Panel header="Are there any limitations to ProfitBooks?" key="3">
                  <div>ProfitBooks is free for one user. In our ‘Startup’ plan, you can create up to 25 invoices,
                    manage up to 25 customers and track up to 25 products/services. </div>
                  <br />
                  <div>These limits reset every month.</div>
                  <br />
                  <div>You may upgrade to the ‘SMB’ plan and use the application unrestricted after logging in to your account.</div>
                </Panel>

                <Panel header="Can I collaborate with my accountant or auditor in ProfitBooks?" key="4">
                  <div >Yes, ProfitBooks allows you to easily collaborate with your accountant or auditor. You can securely invite them to access your financial data, enabling them to review your books
                    , reconcile transactions, and generate reports in real time. </div>
                  <br />
                  <div>This streamlines the accounting process, eliminates the need for back-and-forth data sharing,
                    and ensures accurate financial management.</div>
                </Panel>
                <Panel header="Is my financial data secure with ProfitBooks?" key="5">
                  <div >Yes, your financial data is highly secure with ProfitBooks.
                    We use advanced encryption protocols and industry-standard AWS (Amazon Web Services) to host and protect your data,
                    ensuring robust security and reliability. </div>
                  <br />
                  <div>In addition to secure cloud storage, ProfitBooks performs regular data backups,
                    so your information is always safe from loss or unauthorized access,
                    giving you complete peace of mind while managing your finances.</div>
                </Panel>

              </Collapse>
            </div>

            <div className="col-md-6 col-lg-6">
              <Collapse
                accordion
                expandIcon={({ isActive }) =>
                  isActive ? <MinusOutlined className="faq-icon" /> : <PlusOutlined className="faq-icon" />
                }
                className="custom-collapse"
              >
                <Panel header="Do you support GST in India?" key="6">
                  <div>Yes! ProfitBooks is fully compliant with the VAT regime.
                    You can apply VAT on every invoice you create.</div>
                  <br />
                  <div>
                    You can also generate GSTR 3B, GSTR 1 and do much more.
                  </div>
                </Panel>
                <Panel header="Do you support VAT in UAE?" key="7">
                  <div>Yes! ProfitBooks is fully compliant with the VAT regime. You can apply VAT on every invoice you create.</div>
                </Panel>
                <Panel header="Which countries do you support?" key="8">
                  <div>ProfitBooks works in almost all the english speaking countries. Its easy to setup country-specific taxes.</div>
                  <br />
                  <div>
                    Business owners from Australia, South Africa, UAE, USA,
                    and many other countries trust ProfitBooks’ accounting software to manage their finances efficiently. Our easy-to-use platform simplifies accounting tasks like invoicing, expense tracking, and financial reporting,
                    making it the preferred choice for businesses worldwide.
                  </div>
                </Panel>
                <Panel header="Can I export data from ProfitBooks?" key="9">
                  <div>Yes, you can export invoices, purchases, expenses, ledges, etc.
                    In fact, most of the reports can be exported in excel format.</div>
                </Panel>
                <Panel header="How do I download ProfitBooks accounting software?" key="10">
                  <div>ProfitBooks is an online accounting software.
                    There is nothing to download or install.
                    Just register with your email ID and start using the system.</div>
                </Panel>
              </Collapse>
            </div>
          </div>

        </div>
      </section>

      {/*  SEVENTEEN SECTION END */}


      {/* ADDED FOOTER SECTION  */}
      <Footer />

    </>
  );
};

export default Hero;
