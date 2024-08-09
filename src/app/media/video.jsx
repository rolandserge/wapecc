import Banner from "../../components/banner";
import CardVideo from "../../components/galerie/cardVideo";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors, videos } from "../../data";


export default function GaleryVideo() {
        
    return (
        <section className="galery-video-page">
            <Banner
                image="/assets/media.png"
                title="Galery Video WAPECC"
            />

            <div className="content-galerie-video">
                <div className="card-galerie-video">
                    { videos.map(item => (
                        <CardVideo
                            key={item.id}
                            url={item.url}
                        />
                    ))}
                </div>

                <SponsorOfficial
                    sponsors={sponsors}
                    features
                />
            </div>
        </section>
    )
}
