import { useState } from "react";
import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import BespokeNetwork from "../../components/bespoke";


export default function AsExhibitor() {

    const [active, setActive] = useState(false)
    
    return (
        <section className="as-exhibitor-page">
            <Banner
                image="/assets/as-exhibitor.jpg"
                title="Exhibitor at WAPECC Lome 23"
                subtitle="Discover the limitless possibilities of showcasing your 
                innovations at the West African Power and Energy Conference Lome. 
                Explore the Exhibition :"
            />
            <div className="strategic-partner">
                <div className="content">
                    <div className="floor-image">
                        <img src="/assets/floor.webp" alt="Floor illustrattion" />
                    </div>
                    <div className="element">
                        <span className="secure">Secure Your Spot</span>
                        <p className="descr">
                            Exclusive Package for Booking Exhibit Space at West Africa Power and Energy Cooperation Conference Lome23
                        </p>
                        <div className="card">
                            <div className="head">
                                <span>THE Exhibitor</span>
                                <p>PACKAGE</p>
                            </div>
                            <div className="card-price">
                                <span>Shelled Space</span>
                                <p className="price">$600 per square metre*</p>
                                <p className="illustration" onClick={() => setActive(!active)}>{">> See Illustration of Shelled Space"}</p>
                                { active && (
                                    <div className="card-illustration">
                                        <img src="/assets/box.png" alt="illustration image" />
                                    </div>
                                )}
                            </div>
                            <div className="card-price">
                                <span>Unshelled</span>
                                <p className="price">$450 per square metre*</p>
                                <p className="reduction">*Discounts available on request for local business for information contact us</p>
                            </div>
                            <div className="avantage">
                                <div className="card-icon">
                                    <IoIosCheckmarkCircle className="icon" />
                                </div>
                                <p>
                                    <span>Check circle Exhibition Space : </span>
                                    Location for your 9 metre booth to maximize visibility
                                </p>
                            </div>
                            <div className="button-action">
                                <Link to="#" className="register">Register interest as exhibitor</Link>
                            </div>
                        </div>
                    </div>

                    <BespokeNetwork />

                    <SponsorOfficial
                        sponsors={sponsors}
                        features
                        title="Our partners"
                    />
                </div>
            </div>
        </section>
    )
}
