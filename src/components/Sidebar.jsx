import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import {
  FaBars, FaTimes, FaFileInvoice, FaMoneyBillWave, FaAddressBook, FaCreditCard,
  FaWarehouse, FaPiggyBank, FaGlobe, FaFileInvoiceDollar, FaChartBar,
  FaLock, FaRegChartBar, FaLockOpen, FaWhatsapp, FaEllipsisH
} from "react-icons/fa";

const Sidebar = ({ activeSection }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="mobile-sidemenu">
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div ref={sidebarRef} className={`sidebar ${isFixed ? "fixed-sidebar" : ""} ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="invoicing" spy smooth duration={500} className={activeSection === "invoicing" ? "active" : ""}>
                <FaFileInvoice /> Invoicing
              </Link>
            </li>
            <li>
              <Link to="expense" spy smooth duration={500} className={activeSection === "expense" ? "active" : ""}>
                <FaMoneyBillWave /> Expense / Income
              </Link>
            </li>
            <li>
              <Link to="contacts" spy smooth duration={500} className={activeSection === "contacts" ? "active" : ""}>
                <FaAddressBook /> Contacts
              </Link>
            </li>
            <li>
              <Link to="payments" spy smooth duration={500} className={activeSection === "payments" ? "active" : ""}>
                <FaCreditCard /> Payments
              </Link>
            </li>
            <li>
              <Link to="inventory" spy smooth duration={500} className={activeSection === "inventory" ? "active" : ""}>
                <FaWarehouse /> Inventory
              </Link>
            </li>
            <li>
              <Link to="banking" spy smooth duration={500} className={activeSection === "banking" ? "active" : ""}>
                <FaPiggyBank /> Banking
              </Link>
            </li>
            <li>
              <Link to="currency" spy smooth duration={500} className={activeSection === "currency" ? "active" : ""}>
                <FaGlobe /> Multi Currency
              </Link>
            </li>
            <li>
              <Link to="automatic-ewaybill" spy smooth duration={500} className={activeSection === "automatic-ewaybill" ? "active" : ""}>
                <FaFileInvoiceDollar /> Automatic e-Way Bill
              </Link>
            </li>
            <li>
              <Link to="automatic-einvoice" spy smooth duration={500} className={activeSection === "automatic-einvoice" ? "active" : ""}>
                <FaFileInvoice /> Automatic E-Invoice
              </Link>
            </li>
            <li>
              <Link to="accounting" spy smooth duration={500} className={activeSection === "accounting" ? "active" : ""}>
                <FaChartBar /> Complete Accounting
              </Link>
            </li>
            <li>
              <Link to="collaborate" spy smooth duration={500} className={activeSection === "collaborate" ? "active" : ""}>
                <FaLock /> Collaborate
              </Link>
            </li>
            <li>
              <Link to="dashboard" spy smooth duration={500} className={activeSection === "dashboard" ? "active" : ""}>
                <FaRegChartBar /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="reports" spy smooth duration={500} className={activeSection === "reports" ? "active" : ""}>
                <FaChartBar /> Reports
              </Link>
            </li>
            <li>
              <Link to="lock" spy smooth duration={500} className={activeSection === "lock" ? "active" : ""}>
                <FaLockOpen /> Lock Transaction
              </Link>
            </li>
            <li>
              <Link to="whatsapp" spy smooth duration={500} className={activeSection === "whatsapp" ? "active" : ""}>
                <FaWhatsapp /> WhatsApp
              </Link>
            </li>
            <li>
              <Link to="other" spy smooth duration={500} className={activeSection === "other" ? "active" : ""}>
                <FaEllipsisH /> Other
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
