import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";


export default function InvestmentClimate() {

    return (
        <div className="investment-climate">
            <Banner
                title="Investment Climate"
                image="/assets/conference.jpg"
                subtitle=" Located in the inter-tropical coastal zone of West Africa, 
                Togo is a privileged destination for investment in promising sectors put forward by Togo."
            />
            <div className="content-info">
                <div className="info" id="more">
                    <div className="card-image-climate">
                        <img 
                            src="/assets/pirrogue.jpg" 
                            alt="investment climate"     
                        />
                    </div>
                    <div className="text-climate">    
                        <p>
                            The Togolese government has implemented several measures to improve the business climate, making it more conducive for investment. These reforms include:
                            Investment Incentives: The government offers various incentives to attract foreign direct investment (FDI), such as tax breaks, customs exemptions, and simplified procedures for investors.
                            <br />
                            The creation of a One Stop Shop (Business Formalities Centre) for formalities (24 hours to set up a start-up company, reduced costs by 40%)
                            Under the new Investment Code, there are many exemptions of customs duties. Free tax zone (enterprises located in the free zone that export at least 70% of their production are exempt from tax). 
                        </p>
                    </div>
                </div>

                <SponsorOfficial 
                    sponsors={sponsors} 
                    title="Offical endorsing partners"
                    features
                />
            </div>
        </div>
    )
}
