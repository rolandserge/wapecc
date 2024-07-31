import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";


export default function PoliticalEnvironnement() {

    return (
        <div className="political-environnement">
            <Banner
                image="/assets/political.jpg"
                title="Political & Economic Environment"
                subtitle="A true economic, financial and logistical hub, Lomé, the capital has major assets in the sub-region with its new airport meeting international"
            />

            <div className="political-content">
                <p>
                    A true economic, financial and logistical hub, Lomé, the capital has major assets in the sub-region with its new airport meeting international standards, its autonomous port with a large container terminal in West Africa which constitutes a an ideal maritime gateway for the hinterland countries.
                    Togo has experienced steady economic growth in recent years, driven by reforms aimed at improving the business environment, infrastructure development, and diversification of its economy. The GDP growth rate has been relatively stable, with the government focusing on structural reforms to sustain this momentum. The growth has been supported by agricultural production, services, and increased public investment in infrastructure. Economic growth is at 5% with a PIB of 4230,6 billion FCFA (in 2020).
                    Foreign direct investments (FDI) in Togo is about 352.5 billion FCFA~ 639 MILLION USD (IN 2020) and the figures of Public direct investments lies around 444 billion FCFA,I.E. 48.01% of the budget revenue (in  2020)
                    <br /><br />
                    <strong>Stability, peace and security</strong>
                    <br />
                    Togo enjoys a favourable climate in terms of peace and security, linked to lasting political stability and human capital, which constitute advantages that support development, supported by ambitious reforms and major projects of infrastructure.
                </p>

                <SponsorOfficial 
                    sponsors={sponsors} 
                    title="Offical endorsing partners"
                    features
                />
            </div>
        </div>
    )
}
