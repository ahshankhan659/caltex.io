import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import corousal1 from '../images/carousal.jpeg'
import corousal2 from '../images/Delo-Web-Page-Slide-Banner.jpg'
import corousal3 from '../images/Anti-Counterfiet-Website-Banner-1400x454.jpg'
import corousal4 from '../images/Caltex-Delo-Silver-Extra-12x4-banner.jpg'
import corousal5 from '../images/Corporate-Pylon-Carousel.jpg'
import promocard from '../images/promo-card.jpg'
import techron from '../images/techron_fuels.jpg'
import './Main.css'


function Main(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive}
                arrows={false}
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={4000}
            >
                <div>
                    <div className="main-container">
                        <div className="main-img">
                            <img src={corousal2} alt="" />
                            <hr />
                            <p>A RELAIBLE PARTNER FOR YOU TO GO FURTHER</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="main-container">
                        <div className="main-img">
                            <img src={corousal3} alt="" />
                            <hr />
                            <p>A RELAIBLE PARTNER FOR YOU TO GO FURTHER</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="main-container">
                        <div className="main-img">
                            <img src={corousal5} alt="" />
                            <hr />
                            <p>A RELAIBLE PARTNER FOR YOU TO GO FURTHER</p>
                        </div>
                    </div>
                </div>
            </Carousel>

            {/* ----------PROMOTION----------- */}

            <div className="promotion">
                <h1>Latest Promotion</h1>
                <div className="promotion-card">
                    <div className="card-img">
                        <img className='imge' src={promocard} alt="" />
                    </div>
                    <div className="card-title">
                        <h5>Delo Right For Your Engine Rewarding Eve...</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis fugit vitae reprehenderit consectetur eveniet molestias provident officia sit maxime?</p>
                        <a href="">See More</a>
                    </div>
                </div>
            </div>

            {/* ---------FLEX-CONTAINER--------- */}

            <div className="flex-container">
                <div className="flex-l">
                    <h3>HAVOLINE CAR ENGINE OILS</h3>
                    <h1>HAVOLINE PROTECTS</h1>
                    <p>Caltex Havoline engine oils help keep your car going. For more than a century, people have relied on Caltex Havoline advanced motor oil technology to continuously protect their engines against premature wear. Protect your vehicle. Protect your investment. And keep going with Caltex Havoline motor oils.</p>
                    <button type='button'>Learn More</button>
                </div>
                <div className="flex-r">
                    <img src={techron} alt="" />
                </div>
            </div>

        </>
    )
}

export default Main