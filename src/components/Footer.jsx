import React,{useState,useEffect} from 'react'
import "../styles/Footer/Footer.css"
import { FaTwitter, FaFacebook, FaUser } from "react-icons/fa";
import { SlArrowUpCircle } from "react-icons/sl";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const listenToScroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);

        return () => {
            window.removeEventListener('scroll', listenToScroll);
        };
    }, []);
    return (
        <div className='footer-section '>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-lg-3'>
                        <h4 className='footer-heading'>I’m looking for..</h4>
                        <ul className='footer-ul'>
                            <li>Simple Invoicing Software</li>
                            <li>FREE Inventory Management Software</li>
                            <li>GST Billing Software</li>
                            <li>Information On Reselling ProfitBooks</li>
                            <li>ProfitBooks Demo</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-lg-3'>
                        <h4 className='footer-heading'>Learn More..</h4>
                        <ul className='footer-ul'>
                            <li>How To Choose An Accounting  <br />Software For Your Business</li>
                            <li>Compare ProfitBooks With Tally  <br /> Accounting Software</li>
                            <li>Compare Intuit Quickbooks with <br /> ProfitBooks</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-lg-3'>
                        <h4 className='footer-heading'>Resources</h4>
                        <ul className='footer-ul'>
                            <li>Blog On Entrepreneurship</li>
                            <li>GST India Resources</li>
                            <li>Webinars</li>
                            <li>हिंदी Training Videos</li>
                            <li>Become an Affiliate</li>
                            <li>Help & Support</li>
                        </ul>

                    </div>
                    <div className='col-md-3 col-lg-3'>
                        <h4 className='footer-heading'>Important Links</h4>
                        <ul className='footer-ul'>
                            <li>Trust & Data Security</li>
                            <li>Terms and conditions</li>
                            <li>Privacy Policy</li>
                            <li>हिंदी Training Videos</li>
                            <li>Guest Blogging Guidelines</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Socialicon-section">
                <div className='container'>
                    <div className='Socialicon-content'>
                        <div className='row d-flex align-items-center' style={{ padding: "25px" }}>
                            <div className='col-md-6 col-lg-6'>
                                <span className='socialicon-span'>© ProfitBooks Private Limited. All rights reserved.</span>
                            </div>
                            <div className="col-md-6 col-lg-6 d-flex justify-content-end align-items-center gap-3">
                                <FaTwitter size={20} className='Socialicon-icon' />
                                <span className='Socialicon-content'>Follow us on Twitter</span>

                                <FaFacebook size={20} className='Socialicon-icon' />
                                <span className='Socialicon-content'>Like Us On Facebook</span>

                                <FaUser size={20} className='Socialicon-icon' />
                                <span className='Socialicon-content'>Apply For A Job</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {isVisible && (
                <div className='topbar-outer'>
                    <div onClick={goToTop}>
                        <div className='topbar-inner'>
                            <SlArrowUpCircle />
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Footer