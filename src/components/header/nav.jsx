import { IoHome } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {

    const location = useLocation()

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
                    <Link to="/participate" className={location.pathname.includes("/participate") ? "contact active": "contact"}>Participate</Link>
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
                    <span>Downloads</span>
                    <ul className="submenu">
                        {/* <li><Link to="#" className="lien">DOWNLOAD BROCHURE</Link></li>
                        <li><Link to="#" className="lien">DOWNLOAD YOUR INVITATION</Link></li>
                        <li><Link to="#" className="lien">WAPECC19 POST SHOW REPORT</Link></li> */}
                    </ul>
                </li>
                <li>
                    <span>Media</span>
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
        </nav>
    )
}
