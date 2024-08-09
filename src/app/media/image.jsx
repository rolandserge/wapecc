import Banner from "../../components/banner";
import CardGalerie from "../../components/galerie/card";
import SponsorOfficial from "../../components/sponsorOfficial";
import { galeries, sponsors } from "../../data";


export default function GaleryImage() {

    return (
        <div className="galerie-image-page">
            <Banner
                image="/assets/media.png"
                title="Galery Image WAPECC"
            />
            <div className="content-galerie">
                <div className="galerie-card">
                    { galeries.map(item => (
                        <CardGalerie
                            key={item}
                            items={item}
                        />
                    ))}
                </div>

                <SponsorOfficial
                    sponsors={sponsors}
                    features
                />
            </div>
        </div>
    )
}
