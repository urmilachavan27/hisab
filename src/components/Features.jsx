import React, { useState, useEffect, useRef } from 'react';
import invoice from "../images/features/Invoicing.png";
import income1 from "../images/features/income1.png"
import income2 from "../images/features/income2.png"
import income3 from "../images/features/income3.png"
import contact1 from "../images/features/contact1.png"
import contact2 from "../images/features/contact2.png"
import payment1 from "../images/features/payment1.png"
import payment2 from "../images/features/payment2.png"
import payment3 from "../images/features/payment3.png"
import banking1 from "../images/features/banking1.png"
import banking2 from "../images/features/banking2.png"
import multicurrency from "../images/features/multicurrency.png"
import inventory1 from "../images/features/inventoryproduct1.png";
import inventory2 from "../images/features/inventorycategorise2.png";
import inventory3 from "../images/features/inventoryserialized3.png";
import inventory4 from "../images/features/inventoryprofitloss4.png";
import bill from "../images/features/automatedewaybill.webp";
import einvoice from "../images/features/einvoice.png";
import completeaccounting1 from "../images/features/completeaccounting1.png";
import completeaccounting2 from "../images/features/completeaccounting2.png";
import coll1 from "../images/features/collaborate1.png";
import coll2 from "../images/features/collaborate2.png";
import Dashboard from "../images/features/dashboard.png";
import run1 from "../images/features/reports1.png";
import run2 from "../images/features/gstr1.png";
import run3 from "../images/features/gstr3b.png";
import lock from "../images/features/locktransaction.png";
import whatsapp from "../images/features/whatsapp.png";
import other from "../images/features/search.png";
import { SlArrowUpCircle } from "react-icons/sl";

const Features = ({ setActiveSection }) => {

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const observer = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Active Section:", entry.target.id);

            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.current.unobserve(section));
    };
  }, [setActiveSection]);



  return (
    <div className="content">

      <section id="invoicing">
        <div className='container'>
          <h2 className='feature-h2'>Invoicing</h2>
          <img src={invoice} alt="Invoicing" />
          <p className='invoicing-p'>
            Hisab makes it easy to create and send professional invoices via SMS/email to your customers.
          </p>
        </div>
      </section>

      <section id="expense">
        <div className='container'>
          <h2 className='feature-h2'>Easily keep track of your expenses and incomes</h2>
          <div className='row' style={{ marginTop: "20px" }}>
            <div className="col-md-4">
              <img src={income1} alt="Expense" />
              <p className='expense-p'>Complete control over your incomes and expenses</p>
            </div>
            <div className="col-md-4">
              <img src={income2} alt="Expense" />
              <p className='expense-p'>Categorise them as you want</p>

            </div>
            <div className="col-md-4">
              <img src={income3} alt="Expense" />
              <p className='expense-p'>Get overview of monthly income and expense</p>

            </div>
          </div>
        </div>
      </section>


      <section id="contacts">
        <div className='container'>
          <h2 className='feature-h2'>Manage contacts easily</h2>

          <div className='row'>
            <div className='col-md-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img src={contact1} alt="Contact" style={{ width: "60%", height: "80%" }} />
              <p className='contact-p'>Always keep your contact<br /> information updated.
                Also stay informed <br />about transactions of contacts.</p>
            </div>
            <div className='col-md-6'>
              <img src={contact2} alt="Contact" style={{ width: "100%", height: "80%" }} />
              <p className='contact-p'>Manage your customers and vendors as contact</p>
            </div>
          </div>
        </div>
      </section>

      <section id="payments">
        <div className='container'>
          <h2 className='feature-h2'>Record payments paid to contacts or received from contacts</h2>
          <div className='row'>
            <div className='col-md-6'>
              <img src={payment1} alt="Payment" style={{ width: "80%", height: "100%", marginTop: "25px" }} />
              <p className='contact-p'>Make single payment of multiple transactions either its payable or receivable</p>
            </div>
            <div className='col-md-6'>
              <img src={payment2} alt="Payment" style={{ width: "80%", height: "100%", marginTop: "20px" }} />
              <p className='contact-p'>Easily manage discount/surcharge and excess amount while making payments</p>
            </div>
          </div>
          <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='col' style={{ textAlign: 'center' }}>
              <img src={payment3} alt="Payment" style={{ width: "50%", height: "100%", }} />
              <p className='contact-p' style={{ marginTop: '10px' }}>
                Easily update transactions even if it is paid. No restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="inventory" >
        <div className='container'>
          <h2 className='feature-h2'>Inventory Management</h2>
          <div className="inventory-wrapper">
            <div className="inventory-content">
              <img src={inventory1} alt="Top Image" className="inventory-im" />
              <img src={inventory2} alt="Left Image" className="inventory-im" />
            </div>

            <h2 className="inventory-text">You can track individual units of your high-cost products inventory using serial numbers.<br />
              It also helps you to easily keep track of purchases and sales for warranty claims.</h2>

            <div className="inventory-content2">
              <img src={inventory4} alt="Bottom Image" className="inventory-im" />
              {/* <img src={inventory3} alt="Right Image" className="inventory-im" /> */}
            </div>
          </div>
        </div>
      </section>


      <section id="banking">
        <div className='container'>
          <h2 className='feature-h2'>Record Banking Transactions</h2>
          <div className='row'>
            <div className='col-md-6'>
              <img src={banking1} alt="Banking" />
              <p className='banking-p'>Manage your cash, bank accounts, e-wallets, or credit cards at one place</p>
            </div>
            <div className='col-md-6'>
              <img src={banking2} alt="Banking" />
              <p className='banking-p'>Easily record deposits, withdrawals and transfer</p>
            </div>
          </div>
        </div>
      </section>


      <section id="currency">
        <div className='container'>
          <h2 className='feature-h2'>Multi Currency</h2>
          <div className='row justify-content-center align-items-center text-center' >
            <div className='col-md-6' style={{ textAlign: 'center' }}>
              <img src={multicurrency} alt="MultiCurrency" style={{ width: "70%", height: "70%", marginTop: "20px" }} />
            </div>
            <p className='currency-p mt-5'>Send invoices to your customers in their own currency.
              Also, record payments in your customer's currency and let Hisab keep track of any gains or losses resulting from exchange rate changes. You can create any transactions in foreign currencies,
              but keep your own accounting in your home currency.</p>
          </div>
        </div>

      </section>

      <section id="automatic-ewaybill">
        <div className='container'>
          <div className="row justify-content-center align-items-center text-center">
            <div className='col-md-12'>
              <h2 className='feature-h2'>Automatic e-way bill</h2>
              <img src={bill} alt="Invoicing" style={{ width: "70%", height: "70%" }} />
              <p className='automatic-ewaybill-p'>Automatic eway bill generation with hisab.co without any extra efforts. Once you enable automatic eway bill settings, Hisab creates eway bill for you automatically when you create sales invoice.
                With Hisab.co, it is automatic! When creating sales invoice, just check option to also create Eway bill along. Yep, it is that simple
                Avoid repeated data entry, errors & manual work involved in generation E-way bill from government portal</p>
            </div>
          </div>
        </div>
      </section>

      <section id="automatic-einvoice">
        <div className='container'>
          <h2 className='feature-h2'>Automatic E-Invoice</h2>
          <img src={einvoice} alt="Invoicing" />
          <p className='automatic-einvoice-p'>When you create a Sale invoice or its Credit note or Debit note, E-Invoice is created automatically. Get E-Invoice details along with QR code in Invoice PDF. Also, cancelling E-Invoice within 24 hours is seamless.</p>
        </div>
      </section>


      <section id="accounting">
        <div className='container'>
          <h2 className='feature-h2'>Complete accounting</h2>
          <div className='row mt-5'>
            <div className='col-md-6'>
              <img src={completeaccounting1} alt="accounting" />
              <p className='accounting-p'>Simple interface that hides complexity behind the scenes so that you
                can easily perform unusual accounting tasks without need of accountant</p>
            </div>
            <div className='col-md-6'>
              <img src={completeaccounting2} alt="accounting" />
              <p className='accounting-p'> Manage your custom accounts</p>
            </div>
          </div>
        </div>
      </section>


      <section id="collaborate">
        <div className='container'>
          <h2 className='feature-h2'>Collaborate and work together</h2>
          <div className='row collaborate-img' >
            <div className='col-md-6' >
              <img src={coll1} alt="collaborate" />
              <h3 className='multicurrency-h3'>Role based access</h3>
              <p className='collaborate-p'>Share with any numbers of users and let them help you manage your business finances.
                Invite your accountant and share your financial information easily.</p>
            </div>
            <div className='col-md-6'>
              <img src={coll2} alt="collaborate" />
              <h3 className='multicurrency-h3'>Manage multiple business</h3>
              <p className='collaborate-p'>Manage your multiple businesses from single account</p>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard">
        <h2 className='dashboard-h2'>Dashboard</h2>
        <img src={Dashboard} alt="dashboard" />
        <p className='multicurrency-p'>See how your business is going at a glance with charts on dashboard</p>
      </section>


      <section id="reports">
        <h2 className="feature-h2">Reports</h2>
        <div className="reports-container">
          <div className="reports-main">
            <img src={run1} alt="Reports Overview" className="reports-main-img" />
            <p className="reports-text">
              All your essential business reports are available automatically with options to customize it.
              You can export reports as a PDF or export data to a spreadsheet.
            </p>
          </div>

          <div className="reports-sub">
            <p className="reports-text">
              Instantly generate/download required GST reports that you need to submit while filing monthly GST returns.
            </p>
            <div className="reports-sub-container">
              <div className="reports-sub-item">
                <img src={run2} alt="GST Sales Report" className="reports-sub-img" />
                <p className="reports-text">
                  Shows you details of all sales (Outward supplies) of goods and/or services.
                </p>
              </div>
              <div className="reports-sub-item">
                <img src={run3} alt="GST Summary Report" className="reports-sub-img" />
                <p className="reports-text">
                  Shows you summarized details of the purchase, sales, Input tax credit (ITC), and tax liability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="lock">
        <h2 className='feature-h2'>Lock Transaction</h2>
        <img src={lock} alt="Invoicing" />
        <p className='multicurrency-p'>When working in a team, there is always a fear of records being changed or deleted, by mistake or by intention. Hisab allows you to automatically lock transactions at the end of the day, so only Admin users can edit or delete them from the next day</p>
      </section>

      <section id="whatsapp">
        <h2 className='feature-h2'>WhatsApp</h2>
        <img src={whatsapp} alt="Invoicing" />
        <p className='multicurrency-p'>When you create a new transaction like Sale Invoice, Receipt and Advanced Receipt notification is automatically sent to your customer on WhatsApp and Email. Such transactions can be shared later on too</p>
      </section>

      <section id="other">
        <h2 className="feature-h2">Faster, smarter way to search and navigate.</h2>
        <img src={other} alt="Other Features" className="other-img" />
        <p className="multicurrency-p">Search helps you spend less time getting there, so you can focus on getting things done.</p>
      </section>




      {showTopBtn && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "30px",
            padding: "10px 15px",
            backgroundColor: "#2471a3",
            color: "white",
            border: "none",
            borderRadius: "15px",
            cursor: "pointer",
            fontSize: "18px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)"
          }}
        >
          <SlArrowUpCircle />
        </button>
      )}
    </div>
  );
};

export default Features;
