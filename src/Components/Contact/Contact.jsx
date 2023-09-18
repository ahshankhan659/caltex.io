import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <>
            <div className="contact">
                <div className="contact-head">
                    <h1>Contact Us in Pakistan</h1>
                </div>
                <div className="main-contact">
                    <div className="contact-l">
                        <form action="">
                            <h3>Fill in information below so Caltex Lubricants Pakistan can help with your request:</h3>
                            <p>Please complete all fields marked with <sup>*</sup>.</p>
                            <div className="form">
                                <label for="fname">First name <sup>*</sup>:</label><br />
                                <input type="text" id="fname" name="fname"  /><br />
                            </div>
                            <div className="form">
                                <label for="lname">Last name <sup>*</sup>:</label><br />
                                <input type="text" id="lname" name="lname" /><br />
                            </div>
                            <div className="form">
                                <label for="email" className='gp'>Email <br/> Address <sup>*</sup>:</label><br />
                                <input type="text" id="email" name="fname"  placeholder='example@gmail.com' /><br />
                            </div>
                            <div className="form">
                                <label for="contact">Contact No:</label><br />
                                <input type="text" id="contact" name="fname" /><br />
                            </div>
                            <input type="submit" className='bttn' value="Submit" />
                        </form>
                    </div>
                    <div className="contact-r">
                        <div className="detail">
                            <h2>Other Contacts</h2>
                            <h4>Chevron Pakistan Limited</h4>
                            <p>Dolmen City, Hc-3,<br />
                                Block 4, Scheme 5, 13 <sup>th</sup> <br /> Floor, Karachi</p>
                                <a href="">0800 12  122</a>
                        </div>
                        <div className="detail">
                            <h2>Call Center</h2>
                                <a href="">0800 12  122</a>
                        </div>
                        <div className="detail">
                            <h2>Career Opportunities</h2>
                            <a href="">Careers at Chevron</a>
                        </div>
                        <div className="detail">
                            <h2>Our other websites</h2>
                                <a href="">www.chevron.com</a>
                                <br/>
                                <a href="">www.chevronlubricants.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact