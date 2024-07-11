import { HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { TfiLocationPin } from "react-icons/tfi";
import { CiStar } from "react-icons/ci";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <section className="footer">
            <div className="nav-footer">
                <div className="card">
                    <div className="image">
                        <img
                            src="/assets/konect.png"
                            alt="Le logo de WAPECC"
                        />
                    </div>
                    <div className="reseaux">
                        <Link to="#" target="_blanket" className="icon">
                            <FaFacebook className="fb" />
                        </Link>
                        <Link to="#" target="_blanket" className="icon">
                            <FaLinkedin className="in" />
                        </Link>
                        <Link to="#" target="_blanket" className="icon">
                            <FaSquareXTwitter className="tw" />
                        </Link>
                        <Link to="#" target="_blanket" className="icon">
                            <IoLogoYoutube className="yt" />
                        </Link>   
                    </div>
                </div>
                <div className="card">
                    <h3>Online Forms</h3>
                    <ul className="items">
                        <Link to="#" className="lien">
                            <CiStar className="icon" />
                            Download Brochure
                        </Link>
                        <Link to="#" className="lien">
                            <CiStar className="icon" />
                            Download Post Show Report
                        </Link>
                        <Link to="#" className="lien">
                            <CiStar className="icon" />
                            Delegate Registration
                        </Link>
                    </ul>
                </div>
                <div className="card">
                    <h3>Others</h3>
                    <ul className="items">
                        <Link to="#" className="lien">
                            <CiStar className="icon" />
                            Investment Climate
                        </Link>
                        <Link to="#" className="lien">
                            <CiStar className="icon" />
                            Conference Programme
                        </Link>
                        <Link to="#" className="lien">
                            <CiStar className="icon" />
                            Economic Diversification
                        </Link>
                        <Link to="#" className="lien">
                            <CiStar className="icon" />
                            Photos Gallery
                        </Link>
                    </ul>
                </div>
                <div className="card">
                    <h3>Head Office</h3>
                    <ul className="items">
                        <li>
                            <HiOutlinePhone className="contact" />
                            <span>+44 (0) 207 129 7356</span>
                        </li>
                        <li>
                            <HiOutlineEnvelope className="contact" />
                            <span>info@konect-group.com</span>
                        </li>
                        <li className="lieu">
                            <TfiLocationPin className="contact" />
                            <span> 
                                First Floor 85, Great Portland Street,
                                Marylebone, London W1W 7LT, United Kindow
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="fin">
                <p>Copyright © 2024 by Groupe Komptech-cimat All rights reserved</p>
            </div>
        </section>
    )
}
