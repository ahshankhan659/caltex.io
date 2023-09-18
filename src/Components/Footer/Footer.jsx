import React from 'react'
import caltexLogo from '../images/logo-caltex-white@1x.png'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="main-footer">
                    <div className="footer-l">
                        <div className="footer-section">
                            <h3>MOTORISTS</h3>
                            <ul>
                                <li>Havoline for Cars</li>
                                <li>Havoline for  Motorcycles/<br />scooters</li>
                                <li>Delo for Trucks & Buses</li>
                                <li>Anti-Counterfeit Feature</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>BUSINESS</h3>
                            <ul>
                                <li>By Industries</li>
                                <li>By Products</li>
                                <li>Specialised Programs</li>
                                <li>Delo Difference</li>
                                <li>Customer Testimonials</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>OFFERS</h3>
                            <ul>
                                <li>Promotions</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>ABOUT US</h3>
                            <ul>
                                <li>Who We Are</li>
                                <li>Where We Are</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-r">
                        <div className="footer-section">
                            <h3>CONNECT WITH US</h3>
                            <div className="icons">
                                <span><i class="fa-brands fa-facebook-f"></i></span>
                                <span><i class="fa-solid fa-caret-right"></i></span>
                            </div>
                            <ul>
                                <li>Contact Us</li>
                                <li>Find Us</li>
                                <li>Civeron Corporation</li>
                                <li>Terms of Use</li>
                                <li>Privacy Policy and Personal</li>
                                <li>Data Protection</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-b">
                    <img src={caltexLogo} alt="" />
                    <p> 2022 Chevron Corporation.All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer



// #4E5180