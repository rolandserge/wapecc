import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";


export default function News() {

    return (
        <div className="news-page">
            <Banner
                image="/assets/new.jpg"
                title="News"
            />

            <div className="news-content">
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
