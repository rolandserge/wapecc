
import Banner from "../../components/banner"
import BespokeNetwork from "../../components/bespoke"
import ButtonModel from "../../components/button"
import SponsorOfficial from "../../components/sponsorOfficial"
import { sponsors } from "../../data"

export default function AsPartner() {

    return (
        <section className="as-partner-page">
            <Banner
                title="As a Partner"
                image="/assets/as-partner.jpg"
                subtitle="As a Partner"
            />
            <div className="strategic-partner">
                <div className="head-title">
                    <p>A Strategic Partner</p>
                </div>
                <div className="content">
                    <p>
                        Becoming a strategic partner of the West Africa Energy Power and Energy Cooperation meeting 
                        is not merely an opportunity; it is a decisive stance toward shaping the destiny of West African 
                        nations and leaving an indelible mark on the region’s energy landscape.
                        <br /><br />
                        By aligning your organization with this regional meeting, you are not just engaging in a conference
                        ; you are joining a leadership dialogue that has the potential to redefine the energy narrative of 
                        an entire region for the good of the 400m people who call ECOWAS home. Partnership on this pioneering 
                        event will provide you with a central role in developing energy independence of this strategic zone 
                        and demonstrate your commitment to this promising region. We will work in collaboration to actively 
                        build new policy, develop projects and identify pathways and roadmaps for energy security and universal 
                        access in the ECOWAS region.
                        <br /><br />
                        As a strategic partner, your organisation position itself as thought leader, steering the discourse toward 
                        sustainable practices, innovation, and inclusive development. Together, we have the power to harness the 
                        rich natural resources of the region, propelling West Africa towards a future where prosperity is not just 
                        a vision but a tangible reality. This partnership is an invitation to be at the forefront of change, where 
                        your influence and insights will resonate far beyond the WAPECC meeting, leaving an enduring legacy that 
                        contributes to the socio-economic development and energy independence of the entire West Africa region. 
                        Join us, and let’s write the future of energy in West Africa together.
                    </p>
                </div>
                <div className="button-action">
                    <ButtonModel
                        title="Register interest as partner"
                        lien="#"
                    />
                </div>


                <BespokeNetwork />

                <SponsorOfficial
                    sponsors={sponsors}
                    title="Our sponsors"
                    features
                />
            </div>
        </section>
    )
}
