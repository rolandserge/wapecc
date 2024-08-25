
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
                                rates available, contact: info@wapecc.com
                            </p>
                        </div>
                        <div className="tableau">
                            <p>Price strategy : </p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>No of Dels</td>
                                        <td>
                                            Super early bird Delegate Rate
                                        </td>
                                        <td>Super Early Bird VIP Delegate Rate</td>
                                    </tr>
                                    <tr>
                                        <td>Per person</td>
                                        <td>£500.00 ex VAT if applicable</td>
                                        <td>£1000.00 ex VAT if applicable</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="participation">
                        <p>
                            <strong>VIP Del :</strong> Access to full Strategic Conference programme Exclusive networking 
                            lunches and coffee breaks Access to the full list of exhibitors Access 
                            to full Knowledge Hub programme Networking and entertainment events Access 
                            to matchmaking and connection platform, Executive.
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
