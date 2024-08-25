import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { speakers, sponsors } from "../../data";

export default function Speaker() {

    return (
        <div className="speaker-page">
            <Banner
                image="/assets/speaker.webp"
                title="Full List of speakers"
                subtitle="The complete list of speakers at WAPECC Lomé 23"
            />

            <div className="speaker-page-content">
                <div className="speakers">
                    <div className="title">
                        <p>The world&apos;s best speakers at Wapecc 23</p>
                    </div>
                    <div className="cards-speakers">
                        { speakers.map(speaker => (
                            <div className="card" key={speaker.id}>
                                <img src={speaker.image} alt="Image of speaker" />
                                <div className="overlay-data">
                                    <div className="perso">
                                        <span>{speaker.name}</span>
                                        <p>{speaker.poste}</p>
                                    </div>
                                </div>  
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
