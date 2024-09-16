import { galeries, sponsors } from "../../data";
import CardGalerie from "../../components/galerie/card";
import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import ButtonModel from "../../components/button"

export default function About() {

    return (

        <section className="about-page">
            <Banner
                image="/assets/high-profile.jpg"
                title="Why WAPECC in west africa"
                subtitle="WAPECC23's choice to be held in West Africa underscores the region's significance as a focal point 
                for energy development and collaboration."
            />
            <div className="about-content">
                <div className="wapecc">
                    <span>Why WAPECC23 in West Africa ?</span>
                    <div className="africa">
                        <div className="info">    
                            <p>
                                WAPECC23&apos;s choice to be held in West Africa underscores the region&apos;s significance as a focal 
                                point for energy development and collaboration. This gathering brings together 
                                policymakers, industry leaders, investors, and innovators from across West Africa, fostering 
                                collaboration and synergies essential for addressing common energy challenges.
                                <br />
                                By facilitating dialogue and knowledge exchange, WAPECC strengthens regional partnerships, 
                                promotes collective action, and advances shared energy goals critical for sustainable development.
                                Moreover, Togo&apos;s strategic location and commitment to energy sector advancement make it an 
                                ideal host for WAPECC23. The event serves as a platform to showcase investment opportunities not only in 
                                Togo but also across West Africa. Through WAPECC, connections are forged between project developers and potential financiers, 
                                stimulating investment in renewable energy, infrastructure, and other critical sectors like the mining. Additionally, WAPECC serves as 
                                an innovation showcase, spotlighting the latest technologies and best practices driving sustainable energy development in the region.
                                <br />
                                Furthermore, WAPECC offers a vital forum for policymakers to engage in constructive dialogue on energy policy frameworks, 
                                regulatory reforms, and institutional capacity-building. By facilitating policy discussions, the event supports the creation of 
                                conducive environments for sustainable energy investment and growth. Through capacity-building workshops and technical sessions, 
                                WAPECC contributes to the development of human capital and enhances the resilience of the energy sector. As Togo takes the lead in 
                                hosting this transformative event, it demonstrates the country&apos;s commitment to driving sustainable energy 
                                development and positioning itself as a regional leader in the energy transition.   
                            </p>
                        </div>
                        <div className="card-image">
                            <img
                                src="/assets/west-africa.jpg" 
                                alt="image west africa"    
                            />
                        </div>
                    </div>
                </div>
                <div className="wapecc">
                    <span>Why WAPECC23 in Togo ?</span>
                    <div className="togo">
                        <p>
                            Hosting the West African Power and Energy Cooperation Conference (WAPECC) in Lomé, Togo, is crucial 
                            due to the city&apos;s strategic advantages. Lomé’s modern port and airport provide significant 
                            logistical benefits, facilitating international participants&apos; access and the transport of 
                            goods and equipment. This setup not only enhances the conference&apos;s reach but also highlights 
                            Togo’s infrastructure and economic development, showcasing its commitment to the energy sector 
                            and attracting new investments. The event is expected to boost local economic activity through 
                            increased tourism and services, while offering local businesses opportunities to connect with global stakeholders.
                        </p>
                        <br />
                       <p>
                            Moreover, Togo’s role as the host positions it as a regional leader in energy and infrastructure. 
                            WAPECC promotes regional integration by bringing together key stakeholders to address common challenges 
                            and explore joint projects. The conference aligns with Togo’s focus on sustainable development 
                            and energy transition, highlighting its advancements and innovations. It also provides a platform 
                            for policy discussions, capacity building, and valuable networking opportunities, facilitating 
                            important exchanges that can shape regional energy policies and attract new investments, thus 
                            contributing to economic growth and development. WAPECC23 in Togo offers a strategic opportunity 
                            to showcase the country’s energy potential, promote investment and innovation, and foster regional 
                            cooperation to advance sustainable energy development in West Africa. Therefore, WAPECC23 in Togo 
                            holds great promise and unmatched relevance.
                       </p>
                    </div>
                </div>

                <div className="about-galerie">
                    <div className="about-title">
                        <p>Moment of last edition</p>
                        <ButtonModel
                            title="See more"
                            lien="/media/image"
                        />
                    </div>
                    <div className="container">
                        {galeries.slice(0, 4).map(item => (
                            <CardGalerie
                                key={item.id}
                                items={item}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="whySponsor">
                    <SponsorOfficial 
                        sponsors={sponsors}
                        title="Offical endorsing partners"
                        features
                    />
                </div>
            </div>
        </section>
    )
}
