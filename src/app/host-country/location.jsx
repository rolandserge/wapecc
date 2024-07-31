import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";

export default function LocationRegional() {

    return (
        <div className='location-regional'>
            <Banner
                image="/assets/location.png"
                title="Strategic Regional Location"
                subtitle="Togo's geographical position at the heart of West Africa makes it an ideal host for WAPECC 23."
            />
            <div className="location-content">
                <div className="content">
                    <div>
                        <p>
                            Togo&apos;s geographical position at the heart of West Africa makes it an ideal host for WAPECC 23. 
                            Togo is the only country on the West African coast with a natural deep-water port with a draft of 16.6m.
                            <br /><br />
                            Togo has advanced infrastructure and international standards, it serves the landlocked countries of the sub-region (Mali, Niger, Burkina-Faso).
                            <br />
                            Thanks to its international class airport and the presence of the ASKY airline hub, Togo provides direct access to the main West and Central 
                            African capitals in a few hours, positioned as a gateway to the region, Togo provides convenient access for participants from neighbouring 
                            countries and facilitates cross-border collaboration in the energy sector.
                            <br />
                            Togo in number is : <strong>56 600 km2</strong> (03 land borders, 56 KM of coastline along the gulf of Guinea) and a population 
                            of : <strong>7,3 million </strong>inhabitants
                        </p>
                    </div>
                    <div className="illustration">
                        <img 
                            src="/assets/togo.jpg"
                            alt="illustration"
                        />
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
