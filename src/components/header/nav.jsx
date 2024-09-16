import { IoHome } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Nav() {

    const location = useLocation()
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)

    return (
        <nav>
            <ul className="menu-nav">
                <li>
                    <Link to="/">
                        <IoHome 
                            color={location.pathname === "/" ? "#fcb900" : "white"} 
                            className={location.pathname === "/" ? "active icon" : "icon"} 
                        />
                    </Link>
                </li>
                <li>
                    <span className={location.pathname.includes("/conference") ? "active": "test"}>Conference</span>
                    <ul className="submenu">
                        <li><Link to="/conference/wapecc-west-africa" className="lien">WHY WAPECC IN WEST AFRICA</Link></li>
                        <li><Link to="/conference/speakers" className="lien">FULL LIST OF SPEAKERS</Link></li>
                        <li><Link to="/conference/schedule" className="lien">SCHEDULE</Link></li>
                        <li><Link to="/conference/partners" className="lien">PARTNERS</Link></li>
                    </ul>
                </li>
                <li>
                    <span className={location.pathname.includes("/participate") ? "active": "test"}>Participate</span>
                    <ul className="submenu">
                        <li><Link to="/participate/sponsor" className="lien">SPONSORS</Link></li>
                        <li><Link to="/participate/as-exhibitor" className="lien">As Exhibitor</Link></li>
                        <li><Link to="/participate/as-delegate" className="lien">AS A DELEGATE</Link></li>
                        <li><Link to="/participate/as-partner" className="lien">As partners</Link></li>
                    </ul>
                </li>
                <li>
                    <span className={location.pathname.includes("/host-country") ? "active": "test"}>The host country</span>
                    <ul className="submenu">
                        <li><Link to="/host-country/investment-climate" className="lien">INVESTMENT CLIMATE</Link></li>
                        <li><Link to="/host-country/political-environment" className="lien">Political & Economic Environment</Link></li>
                        <li><Link to="/host-country/economic-diversification" className="lien">ECONOMIC DIVERSIFICATION</Link></li>
                        <li><Link to="/host-country/business-environment" className="lien">Business Environment</Link></li>
                        <li><Link to="/host-country/regional-location" className="lien">Strategic Regional Location</Link></li>
                    </ul>
                </li>
                <li>
                    <span className={location.pathname.includes("/register") ? "active": "test"}>Register</span>
                    <ul className="submenu">
                        <li><Link to="/register" className="lien">SPONSORSHIP REGISTRATION</Link></li>
                        <li><Link to="/register" className="lien">Delegates registration</Link></li>
                    </ul>
                </li>
                <li>
                    <span className={location.pathname.includes("/downloads") ? "active": "test"}>Downloads</span>
                    <ul className="submenu">
                        <li><Link to="#" className="lien">Brochure Wapecc Lome23</Link></li>
                        <li><Link to="/downloads/report-21" className="lien">wapecc21 post show report</Link></li>
                        <li><Link to="/downloads/report-19" className="lien">WAPECC19 POST SHOW REPORT</Link></li>
                    </ul>
                </li>
                <li>
                    <span className={location.pathname.includes("/media") ? "active": "test"}>Media</span>
                    <ul className="submenu">
                        <li><Link to="/media/association-media-parternship" className="lien">ASSOCIATION MEDIA PARTNERSHIPS</Link></li>
                        <li><Link to="/media/news" className="lien">NEWS</Link></li>
                        <li><Link to="/media/press-kit" className="lien">PRESS KIT</Link></li>
                        <li><Link to="/media/image" className="lien">PHOTO GALLERY</Link></li>
                        <li><Link to="/media/video" className="lien">VIDEO GALLERY</Link></li>
                    </ul>
                </li>
                <li><Link to="/contact" className={location.pathname === "/contact" ? "contact active": "contact"}>Contacts</Link></li>

            </ul>
            <div className="nav-mobile">
                <Link to="/">
                    <IoHome 
                        color={location.pathname === "/" ? "#fcb900" : "white"} 
                        className={location.pathname === "/" ? "active icon" : "icon"} 
                    />
                </Link>
                <RxHamburgerMenu 
                    size={24} 
                    color="white" 
                    className="burger" 
                    onClick={() => setActive(!active)}
                />

                    <div className={active ? "modal open" : "modal"}>
                        <ul>
                            <li>
                                <span 
                                    className={location.pathname.includes("/conference") ? "active": "test"}
                                    onClick={() => { setOpen(!open); setIndex(1)}}
                                >
                                    Conference
                                </span>
                                <div className={open && index == 1 ? "accordeons open" : "accordeons"}>
                                    <ul>
                                        <li><Link to="/conference/wapecc-west-africa" className="lien">Why WAPECC in West Africa</Link></li>
                                        <li><Link to="/conference/speakers" className="lien">Full list of speakers</Link></li>
                                        <li><Link to="/conference/schedule" className="lien">Schedule</Link></li>
                                        <li><Link to="/conference/partners" className="lien">Partners</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span 
                                    className={location.pathname.includes("/participate") ? "active": "test"}
                                    onClick={() => { setOpen(!open); setIndex(2)}}
                                >
                                    Participate
                                </span>
                                <div className={open && index == 2 ? "accordeons open" : "accordeons"}>
                                    <ul>
                                        <li><Link to="/participate/sponsor" className="lien">Sponsors</Link></li>
                                        <li><Link to="/participate/as-exhibitor" className="lien">As exhibitor</Link></li>
                                        <li><Link to="/participate/as-delegate" className="lien">AS a delegate</Link></li>
                                        <li><Link to="/participate/as-partner" className="lien">As a partners</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span 
                                    className={location.pathname.includes("/host-country") ? "active": "test"}
                                    onClick={() => { setOpen(!open); setIndex(3)}}
                                >
                                    The host country
                                </span>
                                <div className={open && index == 3 ? "accordeons open" : "accordeons"}>
                                    <ul>
                                        <li><Link to="/host-country/investment-climate" className="lien">Investment climate</Link></li>
                                        <li><Link to="/host-country/political-environment" className="lien">Political & Economic environment</Link></li>
                                        <li><Link to="/host-country/economic-diversification" className="lien">Economic diversification</Link></li>
                                        <li><Link to="/host-country/business-environment" className="lien">Business environment</Link></li>
                                        <li><Link to="/host-country/regional-location" className="lien">Strategic regional location</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span 
                                    className={location.pathname.includes("/register") ? "active": "test"}
                                    onClick={() => { setOpen(!open); setIndex(4)}}
                                >
                                    Register
                                </span>
                                <div className={open && index === 4 ? "accordeons open" : "accordeons"}>                             
                                    <ul>
                                        <li><Link to="/register" className="lien">Sponsorship registration</Link></li>
                                        <li><Link to="/register" className="lien">Delegates registration</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span 
                                    className={location.pathname.includes("/downloads") ? "active": "test"}
                                    onClick={() => { setOpen(!open); setIndex(5)}}
                                >
                                    Downloads
                                </span>
                                <div className={open && index == 5 ? "accordeons open" : "accordeons"}>
                                    <ul>
                                        <li><Link to="#" className="lien">WAPECC23 post show report</Link></li>
                                        <li><Link to="/downloads/report-21" className="lien">WAPECC21 post show report</Link></li>
                                        <li><Link to="/downloads/report-19" className="lien">WAPECC19 post show report</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span 
                                    className={location.pathname.includes("/media") ? "active": "test"}
                                    onClick={() => { setOpen(!open); setIndex(6)}}
                                >
                                    Media
                                </span>
                                <div className={open && index == 6? "accordeons open" : "accordeons"}>
                                    <ul>
                                        <li><Link to="/media/association-media-parternship" className="lien">Association media partnerships</Link></li>
                                        <li><Link to="/media/news" className="lien">News</Link></li>
                                        <li><Link to="/media/press-kit" className="lien">Press kit</Link></li>
                                        <li><Link to="/media/image" className="lien">Photo gallery</Link></li>
                                        <li><Link to="/media/video" className="lien">Video gallery</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/contact" className={location.pathname === "/contact" ? "contact active": "contact"}>Contacts</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    )
}
