import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";

export default function Contact() {

    return (
        <div className="contact-page">
            <Banner
                image="/assets/contact.jpg"
                title="Contact us"
                subtitle="Contact us for more information"
            />
            <div className="contact-content">
                <div className="elements">
                    <div className="info">
                        <h2>Contact information</h2>
                        <p>To Speak at WAPECC23, SPONSOR, EXHIBIT</p>
                        <div className="data">
                            <div>
                                <span>Telephone</span>
                                <p>0044 2071297356</p>
                            </div>
                            <div>
                                <span>Mobile</span>
                                <p>0044 7940581208</p>
                            </div>
                            <div>
                                <span>Email</span>
                                <p>florence@venturekonect.com</p>
                                <p>business@venturekonect.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h2>Please fill in the form for more requests</h2>
                        <form action="">
                            <div className="flex">
                                <input type="text" placeholder="LastName" required />
                                <input type="text" placeholder="firstName" required />
                            </div>
                            <div className="flex">
                                <input type="text" placeholder="Compagny Name" />
                                <input type="text" placeholder="Job title" />
                            </div>
                            <div>
                                <input type="number" placeholder="Telephone" required />
                            </div>
                            <div>
                                <input type="text" placeholder="Compagny Email" required />
                            </div>
                            <div>
                                <select name="" id="" required>
                                    <option value="">Please choose an option subject</option>
                                    <option value="">Other</option>
                                    <option value="">Application for registration</option>
                                    <option value="">Become a partner</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" required>
                                    <option value="">Please choise an option for a sector</option>
                                    <option value="">Other</option>
                                    <option value="">Media</option>
                                    <option value="">Gouvenment institutions</option>
                                </select>
                            </div>
                            <div>
                                <textarea name="" id="" placeholder="Comment or message"></textarea>
                            </div>
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <SponsorOfficial 
                    sponsors={sponsors} 
                    title="Our partners"
                    features
                />
            </div>
        </div>
    )
}
