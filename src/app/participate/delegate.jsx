
import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";
import BespokeNetwork from "../../components/bespoke";
import ButtonModel from "../../components/button";

export default function AsDelegate() {

    return (
        <div className="as-delegate-page">
            <Banner 
                title="As delegate"
                image="/assets/presentation-projet.jpg"
                subtitle="Access to full Strategic Conference programme Exclusive"
            />
            <div className="as-delegate-content">
                <div className="elements">
                    <div className="delegate">
                        <div className="info">
                            <p>
                                <strong>Delegate :</strong> Access to full Strategic Conference programme Exclusive 
                                networking lunches and coffee breaks Access to the full list of exhibitors Access 
                                to full Knowledge Hub programme Networking and entertainment events Access to 
                                matchmaking and connection platform.
                            </p>
                            <br />
                            <p className="title">
                                <span>Delegate participation:</span> Super Early bird Booking 
                                rates available, contact: <mark>info@wapecc.com</mark>
                            </p>
                        </div>
                        <div className="tableau">
                            <p>Price strategy : </p>
                            <div style={{ overflowX: "auto"}}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td><span style={{ color: "red"}}>Super Early bird until 25th Oct.24</span></td>
                                            <td><span style={{ color: "red"}}>2nd Early bird until 13th Dec 24</span></td>
                                            <td><span style={{ color: "red"}}>3nd Early bird until 31</span></td>
                                            <td><span style={{ color: "red"}}>Jan 25 standard rate</span></td>
                                        </tr>
                                        <tr>
                                            <td>Standard Delegate</td>
                                            <td>£500</td>
                                            <td>£999.99</td>
                                            <td>£1249.99</td>
                                            <td>£1999.99</td>
                                        </tr>
                                        <tr>
                                            <td>VIP Delegate</td>
                                            <td>£1249.99</td>
                                            <td>£1999.99</td>
                                            <td>£2449.99</td>
                                            <td>£3249.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                    </div>
                    <div className="participation">
                        <p>
                            <strong>VIP Del :</strong> Access to full Strategic Conference programme Exclusive 
                            networking lunches and coffee breaks Access to the full list of exhibitors Access 
                            to full Knowledge Hub programme Networking and entertainment events Access to 
                            matchmaking and connection platform, Executive, possibility to be part of the  
                            WAPECC Lome 23  Private Diner, subject to qualification.
                        </p>
                    </div>
                    <div className="action-button">
                        <ButtonModel
                            title="Register as a delegate"
                            lien="#"
                        />
                    </div>
                </div>

                <BespokeNetwork />

                <SponsorOfficial 
                    sponsors={sponsors} 
                    features
                />
            </div>
        </div>
    )
}
