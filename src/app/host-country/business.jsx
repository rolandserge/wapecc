import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";
import { TbDirectionSignFilled } from "react-icons/tb";


export default function BusinessEnvironnement() {

  return (
    <div className="business-environnement">
        <Banner
            image="/assets/business.jpg"
            title="Business Environnement"
            subtitle="Togo is ranking as number one in the West African region in the Doing Business 2020 ranking and the world’s 1st performer"
        />
        <div className="business-content">
            <div className="elements">
                <div className="info">
                    <p>
                        Togo is ranking as number one in the West African region in the Doing Business 2020 ranking and the world’s 1st 
                        performer in attracting FDI compared to its size according to the <strong style={{ color: "orange"}}>“Greenfield FDI performance”</strong> index in 2019 
                        gives Togo a highly favourable business environment.
                        <br />
                        The Togolese government has implemented several measures to improve the business climate, making it more conducive for investment. 
                        These reforms include :
                    </p>
                    <div className="items">
                        <div className="item">
                            <span>
                                <TbDirectionSignFilled className="icon"/>
                            </span>
                            <p>
                                <strong>Ease of Doing Business : </strong>Togo has made significant strides in improving its rank in the World Bank&aops;s Doing Business report. 
                                Reforms have streamlined the processes for starting a business, obtaining construction permits, getting electricity, $
                                and registering property.
                            </p>
                        </div>
                        <div className="item">
                            <span>
                                <TbDirectionSignFilled className="icon"/>
                            </span>
                            <p>
                                <strong>Investment Incentives : </strong>The government offers various incentives to attract foreign direct investment (FDI), such as tax breaks, 
                                customs exemptions, and simplified procedures for investors.
                            </p>
                        </div>
                    </div>
                    <p>
                        The ability to resolve trade disputes with authorities of international jurisdiction.
                        <br />
                        The creation of a one-stop shop for foreign trade in Togo through a public-private partnership (secure 24-hour Internet platform linking all economic operators
                        and users for all types of operations related to international trade in Togo).
                        <br /><br />
                        Lomé is an important financial centre housing regional financial institutions headquarters (ECOBANK, BIDC, ORABANK, West African 
                        Development Bank)
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
