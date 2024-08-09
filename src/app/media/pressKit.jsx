import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";

export default function PressKit() {

    return (
        <div className="press-kit-page">
            <Banner
                image="/assets/press-kit.jpg"
                title="Press Kit"
            />
            <div className="press-kit-content">

                <SponsorOfficial
                    sponsors={sponsors}
                    features
                />
            </div>
        </div>
    )
}
