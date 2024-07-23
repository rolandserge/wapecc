import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <nav>
            <ul className="menu-nav">
                <li><Link to="/"><IoHome color="#fcb900" className="icon" /></Link></li>
                <li>
                    <span>Conference</span>
                    <ul className="submenu">
                        <li><Link to="/about" className="lien">WHY WAPECC IN WEST AFRICA</Link></li>
                        <li><Link to="#" className="lien">FULL LIST OF SPEAKERS</Link></li>
                        <li><Link to="#" className="lien">SCHEDULE</Link></li>
                        <li><Link to="#" className="lien">PARTNERS</Link></li>
                    </ul>
                </li>
                <li>
                    <span>Participate</span>
                    <ul className="submenu">
                        <li><Link to="#" className="lien">AS A DELEGATE</Link></li>
                        <li><Link to="#" className="lien">SPONSORS AND EXHIBITORS</Link></li>
                    </ul>
                </li>
                <li>
                    <span>The host country</span>
                    <ul className="submenu">
                        <li><Link to="/host-country/investment-climate" className="lien">INVESTMENT CLIMATE</Link></li>
                        <li><Link to="#" className="lien">Political & Economic Environment</Link></li>
                        <li><Link to="#" className="lien">ECONOMIC DIVERSIFICATION</Link></li>
                        <li><Link to="#" className="lien">Business Environment</Link></li>
                        <li><Link to="#" className="lien">Strategic Regional Location</Link></li>
                    </ul>
                </li>
                <li>
                    <span>Register</span>
                    <ul className="submenu">
                        <li><Link to="#" className="lien">REGISTER</Link></li>
                        <li><Link to="#" className="lien">SPONSORSHIP REGISTRATION</Link></li>
                    </ul>
                </li>
                <li>
                    <span>Downloads</span>
                    <ul className="submenu">
                        <li><Link to="#" className="lien">DOWNLOAD BROCHURE</Link></li>
                        <li><Link to="#" className="lien">DOWNLOAD THE FEDERAL MINISTER OF POWER&lsquo;S BACKING LETTER</Link></li>
                        <li><Link to="#" className="lien">DOWNLOAD YOUR INVITATION</Link></li>
                        <li><Link to="#" className="lien">WAPECC19 POST SHOW REPORT</Link></li>
                    </ul>
                </li>
                <li>
                    <span>Media</span>
                    <ul className="submenu">
                        <li><Link to="#" className="lien">ASSOCIATION MEDIA PARTNERSHIPS</Link></li>
                        <li><Link to="#" className="lien">NEWS</Link></li>
                        <li><Link to="#" className="lien">PRESS KIT</Link></li>
                        <li><Link to="#" className="lien">PHOTO GALLERY</Link></li>
                        <li><Link to="#" className="lien">VIDEO GALLERY</Link></li>
                    </ul>
                </li>
                <li><Link to="#" className="contact">Contacts</Link></li>
            </ul>
        </nav>
    )
}
