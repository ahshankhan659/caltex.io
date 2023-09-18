import React from 'react';
import { Accordion } from 'react-bootstrap';
import accordionLogo from '../images/coretech-logo.png'
import graphaccordionLogo from '../images/graph-core.png'
import zoomTect from '../images/zoomtech-logo.png'
import benefit from '../images/graph-core.png'
import { cardDetail } from './CardDetail';
import CardSection from './CardSection';


function Core() {
    return (
        <>
            <div className="main">
                <div className="content">
                    <div className="main-contents">
                        <h1>Advanced Motorcycle Oils Technology</h1>
                        <p>Our oils are specifically formulated with premium base oils and cutting-edge additives to protect the engine under both normal and challenging riding conditions.</p>
                    </div>
                </div>
            </div>
            {/* ---------------ACCORDION------------- */}

            <div className="accordion">
                <div className="main-accordion">
                    <div className="upper-accordion">
                        <div className="left-accordion">
                            <div className="img">
                                <img src={accordionLogo} alt="" />
                            </div>
                        </div>
                        <div className="right-accordion">
                            <h1>Technologically advanced formulations for enhanced performance and reliability</h1>
                            <p>By using carefully selected base oils with an outstanding additive package, we’re able to deliver the right balance between clutch friction, heat protection, detergency, and lubrication.</p>
                        </div>
                    </div>
                    <div className="lower-accordion">
                        <Accordion  className='drop-accordion' >
                            <Accordion.Item eventKey="0" className='drop-accordion-item'>
                                <Accordion.Header className='header'><h5><span>C </span>Cleans and Protects</h5></Accordion.Header>
                                <Accordion.Body className='detail'>
                                    <img src={graphaccordionLogo} alt="" />
                                    <div className="graph-detail">
                                        <h6>50% more efficient in keeping engines clean to deliver superior performance</h6>
                                        <p>Havoline SuperMatic 4T Semi-Synthetic & SuperMatic 4T is 50% above industry standard limit (API SN) in engine cleanliness and deposit control</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='drop-accordion-item'>
                                <Accordion.Header className='header'><h5><span>O </span>Oxidation Stability</h5></Accordion.Header>
                                <Accordion.Body className='detail'>
                                    <img src={graphaccordionLogo} alt="" />
                                    <div className="graph-detail">
                                        <h6>50% more efficient in keeping engines clean to deliver superior performance</h6>
                                        <p>Havoline SuperMatic 4T Semi-Synthetic & SuperMatic 4T is 50% above industry standard limit (API SN) in engine cleanliness and deposit control</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='drop-accordion-item'>
                                <Accordion.Header className='header'><h5><span>R </span>Reduced Engine Heat Damage</h5></Accordion.Header>
                                <Accordion.Body className='detail'>
                                    <img src={graphaccordionLogo} alt="" />
                                    <div className="graph-detail">
                                        <h6>50% more efficient in keeping engines clean to deliver superior performance</h6>
                                        <p>Havoline SuperMatic 4T Semi-Synthetic & SuperMatic 4T is 50% above industry standard limit (API SN) in engine cleanliness and deposit control</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='drop-accordion-item'>
                                <Accordion.Header className='header'><h5><span>E </span>Enhanced Acceleration with ZoomTech</h5></Accordion.Header>
                                <Accordion.Body className='detail'>
                                    <img src={graphaccordionLogo} alt="" />
                                    <div className="graph-detail">
                                        <h6>50% more efficient in keeping engines clean to deliver superior performance</h6>
                                        <p>Havoline SuperMatic 4T Semi-Synthetic & SuperMatic 4T is 50% above industry standard limit (API SN) in engine cleanliness and deposit control</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>


            </div>

            {/* ------------TESTIMONIALS------- */}
            <div className="testimonails">
                <div className="testimonial-img">
                    <img src={zoomTect} alt="" />
                    <img src={benefit} alt="" />
                </div>
                <div className="testimonial-detail">
                    <h3>Achieve more from the get-go with ZoomTech friction booster</h3>
                    <p>Our new motorcycle engine oils are formulated with ZoomTech, a friction booster additive to help deliver a 13% improvement in static friction performance^.</p>
                    <p>For the everyday rider, this reduces clutch slippage, especially under high load conditions, and ensures maximum power transfer for enhanced acceleration.</p>
                </div>
            </div>

            {/* ------------CARDS------- */}
            <div className="card-content">
                <h2>Recommended For You</h2>
                <div className="cards">
                    {cardDetail.map((element) => {
                        return (
                            <CardSection image={element.img} head={element.heading} para={element.text} btn={element.bttn} />
                        )
                    })}
                </div>
            </div>


        </>
    )
}

export default Core;
