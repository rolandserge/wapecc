import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";

export default function Partner() {

    return (
        <div className="partner-page">
            <Banner
                image="/assets/partner.webp"
                title="Partners"
                subtitle="Our partners at Wapecc Lomé 23"
            />
            
            <div className="partner-content">
                <div className="partners">
                    <div className="title">
                        <p>The partners who put their trust in us and support us</p>
                    </div>
                    <div className="cards-partner">
                        { sponsors.map(sponsor => (
                            <div className="card-image" key={sponsor.id}>
                                <img src={sponsor.image} alt="sponsor image" />
                            </div>
                        ))}
                    </div>
                </div>

                <SponsorOfficial
                    sponsors={sponsors}
                    features
                />
            </div>
        </div>
    )
}
