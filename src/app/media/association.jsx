import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";


export default function Association() {

    return (
        <div className="association-partnership">
            <Banner
                image="/assets/as-partner.jpg"
                title="ASSOCIATION MEDIA PARTNERSHIPS"
            />

            <div className="association-partnership-content">
                <div className="content">
                        
                </div>

                <SponsorOfficial
                    sponsors={sponsors}
                    features
                />
            </div>
        </div>
    )
}
