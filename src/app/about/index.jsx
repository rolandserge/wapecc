import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { galeries, sponsors } from "../../data";
import CardGalerie from "../../components/galerie/card";
import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";

export default function About() {

    return (

        <section className="about-page">
            <Banner
                image="/assets/high-profile.jpg"
                title="About WAPECC in west africa"
                subtitle="About WAPECC in west africa"
            />
            <div className="about-content">
                <div className="wapecc piece1">
                    <span>About WAPECC Lome 23</span>
                    <div className="lome">
                        <div className="head">
                            <div className="info">
                                <p>
                                    Under the awaited esteemed Patronage of His Excellency Mr. Faure Essozimna Gnassingbé, President of the 
                                    Republic of Togo, and chaired by Madame Mawunyo Mila Ami AZIABLE, Minister Delegate to the President of the 
                                    Republic in charge of Energy and Mines of Togo, with the facilitation of the ECOWAS Energy and Mines Commission 
                                    and the support of the West African Development Bank, Venture Konect Ltd is pleased to present the 3rd edition 
                                    of the West Africa Power and Energy Cooperation Conference (WAPECC23). This event is tentatively scheduled to 
                                    take place from <strong>January 23rd to 25th, 2025, in Lomé, Togo</strong>.
                                    <br />
                                    WAPECC is a biennial regional platform aimed at promoting regional resources and government strategies for 
                                    sustainable energy development. The conference focuses on energy, infrastructure, and project financing, addressing 
                                    key challenges in the energy market and paving the way for investment in the sector. This, in turn, helps businesses 
                                    and markets create jobs, boost economies, and foster regional cooperation and interconnectivity among the member countries 
                                    of the Economic Community of West African States (ECOWAS).
                                </p>
                            </div>
                            <div className="card-image">
                                <img
                                    src="/assets/about.jpeg"
                                    alt="Image about page"
                                />
                            </div>
                        </div>
                        <div className="other-info">
                            <div>
                                <p>
                                    West Africa, endowed with abundant natural resources and energy potential, is undergoing a pivotal 
                                    transformation. New leadership is crafting a narrative centred on economic transformation and energy security, 
                                    aiming for energy sovereignty through the development of regional oil, gas, and other natural resources. 
                                    The mining sector plays a crucial role in enhancing energy sector development by integrating mining activities 
                                    with energy initiatives, fostering a robust and interconnected economic framework.
                                    <br />
                                    Collectively, we aim to foster dialogue that secures a narrative of opportunity, collaboration, localization, and 
                                    shared commitment. By harnessing West Africa &apos;s natural wealth, we strive for sustainable development, ensuring 
                                    the benefits reach all its people. Through strategic partnerships and localized efforts, we can transform the region’s 
                                    resource abundance into a foundation for long-term prosperity and stability.
                                </p>
                            </div>
                            <div>
                                <p>
                                    As the world tackles the international energy transition, West Africa strides towards energy independence, standing 
                                    with its international partners as beacons of progress. Historically reliant on fossil fuels, the region is now witnessing 
                                    increased investment in various energy sources. This shift towards cleaner, sustainable energy enhances energy security and 
                                    mitigates the environmental impacts of traditional energy sources. Efforts to improve infrastructure, including electricity 
                                    grids and transport networks, support economic growth, facilitate regional trade, and enhance connectivity.
                                    <br />
                                    Progressive policies are fostering highly competitive markets, driving an integrated oil, gas, and renewable energy mix. 
                                    At the forefront of this journey is the regional commitment to develop international partnerships that will drive economic 
                                    development, shared growth, and wealth creation for the region and its people.
                                </p>
                            </div>
                            <div>
                                <p>
                                    However, significant challenges persist, including disparities in energy access between urban and rural areas, inadequate infrastructure, 
                                    and climate change impacts. Millions of people in West Africa still lack access to electricity, hindering socio-economic development and 
                                    perpetuating cycles of poverty. Accelerating Africa&poas;s socio-economic development requires international partnerships, global capital 
                                    infusion, and mastering a balanced and integrated approach to oil, gas, and renewable energy, supported by the mining sector, demonstrating 
                                    Africa’s commitment to responsible resource management. <br />
                                    The West African Power and Energy Cooperation Conference (WAPECC) serves as a crucial platform to address pressing challenges and leverage 
                                    opportunities in the region&apos;s energy and infrastructure sectors. 
                                </p>
                            </div>
                            <div>
                                <p>
                                    By convening stakeholders from government, industry, academia, and civil society, WAPECC facilitates dialogue, knowledge sharing, and 
                                    collaboration towards sustainable energy development. The event showcases innovative solutions, discusses policy reforms, and catalyses 
                                    investments in energy projects and infrastructure development, serving as a vital deal-making regional platform. Through WAPECC, ECOWAS 
                                    states can highlight regional opportunities, stakeholders can identify synergies, forge partnerships, and chart a collective path towards 
                                    energy access, economic growth, and regional integration in West Africa. <br />
                                    WAPECC Lome23, the 3rd in this series of events, aims to bring together key players and drive forward the region&apos;s energy and 
                                    infrastructure transformation, ensuring reliable and affordable energy for all. Join us to get the latest updates on the sector in 
                                    this promising region and develop your project pipelines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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
                                src="/assets/africa.webp" 
                                alt="image west africa"    
                            />
                        </div>
                    </div>
                </div>
                <div className="wapecc">
                    <span>Why WAPECC23 in Togo ?</span>
                    <div className="togo">
                        <p>
                            WAPECC23 in Togo offers a strategic opportunity to showcase the country&apos;s energy potential, promote investment and innovation, and foster regional cooperation to advance sustainable energy development in West Africa.
                            <br /> <br />
                            WAPECC23 in Togo holds great promise and relevance for several compelling reasons :
                            <br />
                        </p>
                        <div className="items">
                            <div className="item">
                                <TbRosetteDiscountCheckFilled color="orange" className="icon" />
                                The Togolese government has demonstrated a strong commitment to advancing the energy sector,
                                with initiatives aimed at promoting renewable energies, improving energy access, and strengthening 
                                infrastructure. Hosting WAPECC23 underscores Togo&apos;s dedication to sustainable 
                                energy development and showcases its progress to regional and international stakeholders.
                            </div>
                            <div className="item">
                                <TbRosetteDiscountCheckFilled color="orange" className="icon" />
                                Togo offers attractive investment opportunities in various aspects of the energy sector, 
                                including renewable energy projects, infrastructure development, and technological innovation. 
                                WAPECC23 provides a platform for investors to explore these opportunities, establish partnerships, 
                                and contribute to the country&apos;s energy transition.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-galerie">
                    <div className="about-title">
                        <h2>Moment of last Edition</h2>
                        <Link to="#" className="lien">See more</Link>
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

                <SponsorOfficial 
                    sponsors={sponsors}
                    title="Offical endorsing partners"
                    features
                />
            </div>
        </section>
    )
}
