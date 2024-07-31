import { Link } from "react-router-dom";
import Banner from "../../components/banner";
import { IoIosCheckmarkCircle } from "react-icons/io";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";


export default function Sponsor() {

    return (
        <div className="sponsor-page">
            <Banner
                image="/assets/partner.webp"
                title="Sponsorship"
                subtitle="Elevate your brand to new heights as a sponsor of the West Africa Energy Power and energy Cooperation Conference Lome23."
                more="more"
            />
            <div className="content-sponsor-page">
                <div className="intro" id="more">
                    <div className="illustration">
                        <img 
                            src="/assets/partner.webp" 
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
                    <div className="cards-package">
                        <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>Diamond sponsorship opportunity</span>
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
                        <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>PLATINUM</span>
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
                                            You will have 2 places at the WAPECC23 Private VIP Dinner
                                        </p>
                                    </div>
                                    <div className="element">
                                        <div className="card-icon">
                                            <IoIosCheckmarkCircle className="icon" />
                                        </div>
                                        <p>
                                            On the opening day you will have 2 VIP places at the Ministerial and CEO Dinner
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
                                            <span>Keynote Speaking Slot : </span>
                                            Opportunity to deliver a speech at the Private  VIP Dinner
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
                                            <span>Sponsorship branding : </span>
                                            Acknowledgment as a Platinum Sponsor in all conference signage
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
                        <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>Silver</span>
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
                                            Premium location for your 20 metre booth to maximize visibility
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
                        <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>Bronze</span>
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
                                            Premium location for your 12 metre booth to maximize visibility.
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
                        <div className="card-element">
                            <div>
                                <div className="head">
                                    <span>Gold</span>
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
                                            Premium location for your 20 metre booth to maximize visibility.
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
                                            <span>VIP Networking Access :</span> 
                                            2 x Exclusive access to the Extraordinary Ministerial and CEO Dialogue
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
                    </div>
                </div>

                <div className="strategic-partner">
                    <div className="head">
                        <p>A Strategic Partner</p>
                    </div>
                    <div className="content">
                        <p>
                            Becoming a strategic partner of the West Africa Energy Power and Energy Cooperation meeting 
                            is not merely an opportunity; it is a decisive stance toward shaping the destiny of West African 
                            nations and leaving an indelible mark on the region’s energy landscape.
                            <br /><br />
                            By aligning your organization with this regional meeting, you are not just engaging in a conference
                            ; you are joining a leadership dialogue that has the potential to redefine the energy narrative of 
                            an entire region for the good of the 400m people who call ECOWAS home. Partnership on this pioneering 
                            event will provide you with a central role in developing energy independence of this strategic zone 
                            and demonstrate your commitment to this promising region. We will work in collaboration to actively 
                            build new policy, develop projects and identify pathways and roadmaps for energy security and universal 
                            access in the ECOWAS region.
                            <br /><br />
                            As a strategic partner, your organisation position itself as thought leader, steering the discourse toward 
                            sustainable practices, innovation, and inclusive development. Together, we have the power to harness the 
                            rich natural resources of the region, propelling West Africa towards a future where prosperity is not just 
                            a vision but a tangible reality. This partnership is an invitation to be at the forefront of change, where 
                            your influence and insights will resonate far beyond the WAPECC meeting, leaving an enduring legacy that 
                            contributes to the socio-economic development and energy independence of the entire West Africa region. 
                            Join us, and let’s write the future of energy in West Africa together.
                        </p>
                    </div>
                    <div className="button-action">
                        <Link to="/register" className="partner">Register interest as partner</Link>
                    </div>
                </div>
                <div className="strategic-partner">
                    <div className="head">
                        <p>Exhibitor at WAPECC Lome23</p>
                    </div>
                    <div className="content">
                        <p>
                            Discover the limitless possibilities of showcasing your innovations at the West African Power and Energy Conference Lome.
                            <br />
                            Explore the Exhibition :
                        </p>
                        <div className="floor-image">
                            <img src="/assets/floor.webp" alt="Floor illustrattion" />
                        </div>
                        <p>
                            Secure Your Spot
                            <br />
                            Exclusive Package for Booking Exhibit Space at West Africa Power and Energy Cooperation Conference Lome23
                        </p>
                    </div>
                    <div className="button-action">
                        <Link to="/register" className="partner">Register interest as Exhibition</Link>
                    </div>
                </div>
                <div className="package-container">
                    <div className="title">
                        <span>Additional Sponsorship Opportunities</span>
                    </div>
                    <div className="cards-package">
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
                    </div>
                </div>

                <div className="bespoke-network">
                    <div className="title">
                        <p>Bespoke Networking options</p>
                    </div>

                    <div className="bespoke-data-container">
                        <div className="bespoke-card">
                            <span>WAPECC23 Site Visit:</span>
                            <p>
                                The Site Visit is a highlight of WAPECC23, allowing participants to explore firsthand the latest 
                                energy projects, facilities, and infrastructure developments in West Africa. Led by industry 
                                experts and local guides, this guided tour offers sponsors a comprehensive understanding of the 
                                region’s energy
                            </p>
                        </div>
                        <div className="bespoke-card">
                            <span>Welcome Drink</span>
                            <p>
                                The welcome drink reception will kick off WAPECC23, It marks the beginning of the 
                                conference and is attended by all participants, providing maximum exposure setting 
                                the tone for the conference. This relaxed and elegant event will provide a perfect 
                                setting for delegates to mingle and establish initial connections. The opportunity 
                                for the sponsor to engage with attendees in a relaxed and informal setting.
                            </p>
                        </div>
                        <div className="bespoke-card">
                            <span>Onsite Lunch:</span>
                            <p>
                                Sponsoring the onsite lunch at the West Africa Power & Energy Cooperation Conference 
                                2023 (WAPECC23) offers a unique opportunity for companies to gain visibility and 
                                engage with key stakeholders. The lunch is a central event attended by all participants, 
                                providing maximum exposure, this option gives the ability to prominently display their 
                                brand during the lunch. You can host a lunch for 20 people onsite during the conference 
                                with your handpicked audience. This setting will reflect the ambiance you want and your 
                                brand in equal measure
                            </p>
                        </div>
                        <div className="bespoke-card">
                            <span>Breakfast brief:</span>
                            <p>
                                The breakfast brief at the West Africa Power & Energy Cooperation Conference 2023 (WAPECC23) 
                                presents an exclusive opportunity for companies to engage with attendees in a focused, 
                                morning setting. The breakfast brief is a prime opportunity to engage with attendees at the 
                                start of the day when they are most attentive. The sponsor of this session will be able to 
                                prominently display their brand throughout the breakfast session. You can host a lunch for 50 – 
                                100 people onsite during the conference with your handpicked audience.
                            </p>
                        </div>
                        <div className="bespoke-card">
                            <span>WAPECC23 Private VIP Dinner at WAPECC23 with West Africa Energy Leaders</span>
                            <p>
                                We will create a bespoke VIP Private dinner that will offer unparalleled access 
                                to key decision-makers in the power and energy sector, including industry leaders, 
                                government officials, and top executives. This distinguished event will highlight 
                                the opportunity for meaningful interactions and relationship-building in an intimate 
                                setting. As sponsor of this high level gathering, you will have the ability to present 
                                your brand and solutions to a select and influential audience.
                            </p>
                        </div>
                        <div className="bespoke-card">
                            <span>WAPECC23 Closing Ceremony and Torch Relay to the Next Host Country</span>
                            <p>
                                The Event Closing Cocktail and Torch Relay Ceremony serve as a symbolic and celebratory conclusion 
                                to WAPECC23. It brings together delegates, industry leaders, and government officials for a memorable 
                                occasion that includes the passing of the conference torch to the next host country. This ceremony is 
                                an opportunity to reflect on the successes of the conference, celebrate partnerships forged, and look 
                                forward to future collaborations in the West African energy sector. This will be an exclusive opportunity 
                                to play a significant role in shaping the legacy of WAPECC23 and fostering continued collaboration in the 
                                West African energy community.
                            </p>
                        </div>
                        <div className="bespoke-card item7">
                            <span>The Gala Dinner Sponsorship at WAPECC23</span>
                            <p>
                                The Gala Dinner at the West Africa Power & Energy Cooperation Conference 2023 (WAPECC23) is a prestigious 
                                event that offers an exclusive opportunity for companies to gain significant visibility and engage with 
                                top-tier attendees.  The high-profile nature of an elegant evening event attended by industry leaders, 
                                government officials, and top executives in the power and energy sector. This event provides its sponsor 
                                with an unparalleled opportunity for high visibility and direct engagement with key stakeholders.
                                This is a rare chance to position your brand at the forefront of WAPECC23 and create lasting impressions with 
                                the most influential figures in the industry. If you would love to discuss how this sponsorship can align with 
                                your business objectives and deliver significant value.
                            </p>
                        </div>
                    </div>
                    <div className="action-button">
                        <Link to="#" className="register">Register interest</Link>
                    </div>
                </div>
                
                <div style={{ padding: "0 5em"}}>
                    <SponsorOfficial sponsors={sponsors} />
                </div>
            </div>
        </div>
    )
}
