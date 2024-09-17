import { Link } from "react-router-dom";
import Banner from "../../components/banner";
import { IoIosCheckmarkCircle } from "react-icons/io";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";
import BespokeNetwork from "../../components/bespoke";


export default function Sponsor() {

    return (
        <div className="sponsor-page">
            <Banner
                image="/assets/partner.webp"
                title="Sponsorship"
                subtitle="Elevate your brand to new heights as a sponsor of 
                the West Africa Energy Power and energy Cooperation Conference Lome23."
            />
            <div className="content-sponsor-page">
                <div className="intro" id="more">
                    <div className="illustration">
                        <img 
                            src="/assets/sponsorship.jpg" 
                            alt="sponsor illustration"     
                        />
                    </div>
                    <div className="texte">
                        <span>Be a Sponsor at WAPECC - Lome-23</span>
                        <p>
                            At WAPECC Lome23, the one stop shop you will be able to create and develop 
                            your business network within q regional community.
                            <br /><br />
                            The only regional dedicated meeting to showcase bankable energy efficient projects, 
                            gas assets and regional energy infrastructure projects. The West Africa Energy 
                            Power and Energy Cooperation meeting is the only international platform of the 
                            region that convenes industry Government Ministers, National Companies, Regulators, 
                            Energy Utilities, International business and service providers as well as global 
                            financial services to meet and take projects to investment decisions.
                        </p>
                    </div>
                </div>
                <div className="package-container">
                    <div className="title">
                        <span>Exclusive Sponsorship Packages</span>
                        <p>
                            We are excited to offer two exclusive sponsorship opportunities for key events at the West 
                            Africa Power and Energy Cooperation Conference (WAPECC23), taking place from January
                            23rd to 25th, 2025, in Lomé, Togo. These events include a private  VIP dinner and an 
                            onsite breakfast, both designed to foster high-level networking and strategic discussions 
                            among the leaders shaping the energy future of West Africa.
                            Discover Tailored Opportunities to Elevate Your Brand and Drive Growth in West Africa Energy strategy.
                        </p>
                    </div>
                    <div className="cards-package reverse">
                        <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>Diamond and Event Sponsor</span>
                                    <p>package</p>
                                </div>
                                <div className="price">
                                    <p>$Speak to us</p>
                                </div>
                                <div className="info-package">
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            Premium location for your 36 metre booth to maximize visibility
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            You will be given 3 places on the Conference Advisory Board                                    
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            Dinner place at Ministerial Private Dinner, On the pre-event 
                                            Ministerial Private dinner you will have 5VIP places at the Ministerial and CEO Dinner
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Keynote Speaking Slot : </span>
                                            Opportunity to deliver the opening Private sector keynote 
                                            address during a plenary session.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>VIP Networking Access : </span>
                                            You get 5 VIP delegates passes to access the whole event
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Sponsorship branding : </span>
                                            Acknowledgment as a  Diamond and co-host of all conference signage
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Delegate Passes : </span>
                                            As Diamond sponsor you will get 12 passes to the Conference as access all areas
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Private Dinner : </span>
                                            As a Diamond sponsor you will get one of two private leadership dinners with Ministers, 
                                            Leadership and Private sector you can hand pick
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Choice of Premier Sponsorship : </span> 
                                            WAPECC Gala Dinner, Lanyards, Registration, Programme, 
                                            Opening video, Session introduction of your choice
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            You will have the opportunity to submit a corporate video to be 
                                            played before opening of WAPECC23.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Top Table : </span>
                                            Have the Ministerial Table at the WAPECC23 Gala Dinner.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>2 x Thought leadership : </span> 
                                            We will provide you with 2 x thought leadership articles 
                                            to be distributed to the Conference network and media
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>1 x podcast : </span>
                                            We will provide you with a podcast that will be broadcast and 
                                            distributed to the Conference network and media
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Meeting room : </span>
                                            You will have access to a meeting room for the 
                                            duration of the Conference.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="action-button">
                                <Link to="/register" className="register">Register interest</Link>
                            </div>
                        </div>
                        <div className="">
                        </div>
                        <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>PLATINUM sponsor</span>
                                    <p>package</p>
                                </div>
                                <div className="price">
                                    <p>$Speak to us</p>
                                </div>
                                <div className="info-package">
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            Premium location for your 20 metre booth to maximize visibility
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            You will be given 2 places on the Conference Advisory Board
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            You will have 2 places at the Private Dinner exclusive to Ministers and CEOs
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Keynote Speaking Slot : </span>
                                            Opportunity to deliver a speech at the Private VIP Dinner (Prior to qualification)
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            Address during a your chosen sponsored session.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>VIP Networking Access : </span> 
                                            3 x Exclusive access to the Extraordinary VIP Room
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Delegate Passes : </span>
                                            As platinum sponsor you will get 8 passes to the Conference as access all areas
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>                                    
                                        <p>
                                            <span>Choice of Premier Sponsorship : </span>
                                            Lunch, Welcome Drink, Closing Ceremony, Lanyards, Registration, Programme, badges, Opening video, Session introduction of your choice ( Moderator opportunity)
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            You will have the opportunity to submit a corporate vignette/video to be played before opening of your chosen sponsored session.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Designated Table : </span>
                                            Have your table at the First Day lunch (this allows you to invite key participants to join you at the table)
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Choice of Premier Sponsorship : </span>
                                            Lunch, Welcome Drink, Closing Ceremony, 
                                            Lanyards, Registration, Programme, badges, Opening video, Session introduction of your choice ( Moderator)
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            You will have the opportunity to submit a corporate vignette/video 
                                            to be played before opening of your chosen sponsored session.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Designated Table : </span>
                                            Have your table at the First Day lunch (this allows you to invite 
                                            key participants to join you at the table)
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>2 x Thought leadership : </span> 
                                            We will provide you with 2 x thought leadership articles to be 
                                            distributed to the Conference network and media
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>1 x podcast : </span>
                                            We will provide you with a podcast that will be broadcast and 
                                            distributed to the Conference network and media
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Meeting room : </span>
                                            You will have access to a meeting room 
                                            for the duration of the Conference
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="action-button">
                                <Link to="#" className="register">Register interest</Link>
                            </div>
                        </div>
                        <div className="card-element item-gold">
                            <div>
                                <div className="head">
                                    <span>Gold Sponsor</span>
                                    <p>package</p>
                                </div>
                                <div className="price">
                                    <p>$Speak to us</p>
                                </div>
                                <div className="info-package">
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Exhibition Space : </span>
                                            Premium location for your 12 metre booth to maximize visibility.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Advisory Board : </span>
                                            You will be given 1 places on the Conference Advisory Board
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>2x place at the WAPECC23 Private VIP Dinner : </span>
                                            prior to the event opening day you will have 2 VIP places  
                                            to a distinguished event will giving you the opportunity for meaningful 
                                            interactions and relationship-building in an intimate setting 
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Keynote Speaking Slot : </span>
                                            Opportunity to deliver 2 speakers on a plenary session
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Sponsorship branding : </span>
                                            Acknowledgment as a Gold Sponsor in all conference signage
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Delegate Passes : </span>
                                            As Gold sponsor you will get 6 passes to the Conference as access all areas
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Private Dinner : </span> 
                                            As a sponsor you will get one of two private leadership dinners with 
                                            Ministers, Leadership and Private sector you can hand pick
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Choice of Premier Sponsorship : </span>
                                            Lanyards, Registration, Programme, Opening video, Session 
                                            introduction of your choice
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Vignette : </span>
                                            You will have the opportunity to submit a corporate 
                                            vignette/video to be played before opening of sessions post coffee
                                        </p>
                                    </div>
                                    {/* <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>VIP Networking Access :</span> 
                                            2 x Exclusive access to the Extraordinary Ministerial and CEO Dialogue
                                        </p>
                                    </div> */}
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>1 x Thought leadership : </span>
                                            We will provide you with 2 x thought leadership articles to be 
                                            distributed to the Conference network and media
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>1 x podcast : </span> 
                                            We will provide you with a podcast that will be broadcast and 
                                            distributed to the Conference network and media
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="action-button">
                                <Link to="#" className="register">Register interest</Link>
                            </div>
                        </div>
                        <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>Silver Sponsor</span>
                                    <p>package</p>
                                </div>
                                <div className="price">
                                    <p>$Speak to us</p>
                                </div>
                                <div className="info-package">
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Exhibition Space : </span>
                                            Premium location for your 6 metre booth to maximize visibility.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Advisory Board : </span>
                                            You will be given 1 place on the Conference Advisory Board
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Speaking Slot : </span>
                                            Opportunity to be a part of a plenary session in the conference
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>VIP Networking Access : </span>
                                            1 x Exclusive access to the Extraordinary Ministerial and CEO Dialogue
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Sponsorship branding : </span>
                                            Acknowledgment as a Silver Sponsor in all conference signage
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Delegate Passes : </span> 
                                            As Silver sponsor you will get 4 passes to the Conference as access all areas
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>1 x Thought leadership : </span>
                                            We will provide you with 2 x thought leadership articles to be 
                                            distributed to the Conference network and media
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>1 x podcast : </span> 
                                            We will provide you with a podcast that will be broadcast 
                                            and distributed to the Conference network and media
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="action-button">
                                <Link to="#" className="register">Register interest</Link>
                            </div>
                        </div>
                        <div className="card-element item-bronze">
                            <div>
                                <div className="head">
                                    <span>Bronze Sponsor</span>
                                    <p>package</p>
                                </div>
                                <div className="price">
                                    <p>$10,000</p>
                                </div>
                                <div className="info-package">
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Exhibition Space : </span>
                                            Premium location for your 6 metre booth to maximize visibility.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Advisory Board : </span>
                                            You will be given 1 place on the Conference Advisory Board
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Speaking Slot : </span>
                                            Opportunity to be a part of a plenary session in the conference
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Sponsorship branding : </span>
                                            Acknowledgment as a Silver Sponsor in all conference signage
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Delegate Passes : </span>
                                            As Bronze sponsor you will get 2 passes to the Conference as access all areas
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>1 x Thought leadership : </span>
                                            We will provide you with 2 x thought leadership articles to be 
                                            distributed to the Conference network and media
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="action-button">
                                <Link to="#" className="register">Register interest</Link>
                            </div>
                        </div>                    
                    </div>
                </div>

                <div className="package-container">
                    <div className="title">
                        <span>Additional Sponsorship Opportunities</span>
                    </div>
                    <div className="cards-package">
                    <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>Lanyard and Badge</span>
                                    <p>SPONSOR</p>
                                </div>
                                <div className="price">
                                    <p>$25,000</p>
                                </div>
                                <div className="info-package">
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            Premium location for your 36 metre booth to maximize visibility
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Exclusive sponsorship : </span>
                                            of conference lanyards and badges.           
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Brand visibility : </span>
                                            Maximum visibility with every attendee wearing your branding.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Advisory Board : </span>
                                            You will be given 1 place on the Conference Advisory Board
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Speaking Slot : </span>
                                            Opportunity to be a part of a plenary session in the conference
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Delegate Passes : </span>
                                            2 x Passes
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>1 x Thought leadership : </span>
                                            We will provide you with 2 x thought leadership articles to be 
                                            distributed to the Conference network and media
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="action-button">
                                <Link to="#" className="register">Register interest</Link>
                            </div>
                        </div>
                        <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>Conference App</span>
                                    <p>SPONSOR</p>
                                </div>
                                <div className="price">
                                    <p>$25,000</p>
                                </div>
                                <div className="info-package">
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            Premium location for your 36 metre booth to maximize visibility
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Branding to every delegate : </span>
                                            You will be given 3 places on the Conference Advisory Board     Exclusive sponsorship of the official conference app.                                    </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Branding : </span>
                                            Branding on the app and promotional materials
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Advisory Board : </span>
                                            You will be given 1 place on the Conference 
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Advisory Board Speaking Slot : </span>
                                            Opportunity to be a part of a plenary session in the conference
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Delegate Passes : </span>
                                            2 x Passes
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="action-button">
                                <Link to="#" className="register">Register interest</Link>
                            </div>
                        </div>
                        <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>Coffee Break</span>
                                    <p>SPONSOR</p>
                                </div>
                                <div className="price">
                                    <p>$20.000</p>
                                </div>
                                <div className="info-package">
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Sponsorship : </span>
                                            of a designated coffee break.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Logo visibility : </span>
                                            during the break and on main screen prior to the plenary resuming.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Branding : </span>
                                            Branding in the Coffee area.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Marketing Material : </span>
                                            Opportunity to distribute promotional materials.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Advisory Board : </span>
                                            You will be given 1 place on the Conference Advisory Board
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Speaking Slot : </span>
                                            Opportunity to be a part of a plenary session in the conference
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Delegate Passes : </span>
                                            2 x Passes
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>                                    
                                        <p>
                                            <span>Online Vignette : </span> 
                                            A corporate vignette/Video will be produced
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>1 x Thought leadership : </span>
                                            We will provide you with 2 x thought leadership articles to 
                                            be distributed to the Conference network and media
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="action-button">
                                <Link to="#" className="register">Register interest</Link>
                            </div>
                        </div>
                        
                        <div className="card-element">
                            <div className="flex">
                                <div className="head">
                                    <span>Networking Lounge</span>
                                    <p>SPONSOR</p>
                                </div>
                                <div className="price">
                                    <p>$15,000</p>
                                </div>
                                <div className="info-package">
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Exclusive : </span>
                                            Exclusive sponsorship of the conference networking lounge.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Branding : </span>
                                            Branding in the lounge area.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Marketing Material : </span>
                                            Opportunity to distribute promotional materials.
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Advisory Board : </span>
                                            You will be given 1 place on the Conference Advisory Board
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Speaking Slot : </span> 
                                            Opportunity to be a part of a plenary session in the conference
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Delegate Passes : </span>
                                            2 x Passes
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>Online Vignette : </span>
                                            A corporate vignette/Video will be produced
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            <span>1 x Thought leadership:</span> 
                                            We will provide you with 2 x thought leadership 
                                            articles to be distributed to the Conference network and media
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="action-button">
                                <Link to="#" className="register">Register interest</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="network">
                    <BespokeNetwork />
                </div>

                <div className="partner-defil">
                    <SponsorOfficial 
                        sponsors={sponsors} 
                        features
                    />
                </div>
            </div>
        </div>
    )
}
