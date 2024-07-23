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
                    <span>About WAPECC23 in Lome</span>
                    <div className="lome">
                        <div className="head">
                            <div className="info">
                                <p>
                                    Under the awaited Patronage of His Excellency Mr. Faure Essozimna Gnassingbé, President of the Republic of Togo, 
                                    and chaired by Madame Mawunyo Mila Ami AZIABLE, Minister Delegate to the President of the Republic, in charge 
                                    of Energy and Mines of Togo, with the facilitation of the ECOWAS Energy and Mines commission and the 
                                    Support of the West African Development Bank, Venture Konect Ltd are pleased to present the 3rd edition 
                                    of the West Africa Power and Energy Cooperation Conference (WAPECC23) which will take place tentatively from the 23rd – 25th January 2025 in Lome-Togo.
                                    <br />
                                    WAPECC is a regional reference platform that will take place annually with the 
                                    fundamental objective to promote regional resources and governments strategic plans for sustainable energy development.
                                    <br /> <br />
                                    WAPECC focuses on energy/Mines, infrastructure and project financing; addressing the key challenges facing the energy market and paving the way for investment in the sector to help businesses and markets create jobs and boost economies, whilst developing regional cooperation and interconnectivity between the member countries of the Economic Community of West African States (ECOWAS)
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
                                    The energy and infrastructure sector in West Africa is undergoing a pivotal transformation, 
                                    with a growing emphasis on diversifying the energy mix and expanding access to reliable and 
                                    affordable energy sources. Historically reliant on fossil fuels, the region is now witnessing 
                                    increased investment in renewable energy sources such as solar, wind, and hydroelectric power. 
                                    This shift towards cleaner and more sustainable energy sources not only enhances energy security 
                                    but also mitigates the environmental impacts of traditional energy sources. Moreover, efforts to 
                                    improve infrastructure, including electricity grids and transport networks,
                                </p>
                            </div>
                            <div>
                                <p>
                                    are underway to support economic growth, facilitate regional trade, and enhance connectivity.
                                    However, significant challenges persist, including disparities in energy access between urban and 
                                    rural areas, inadequate infrastructure, and the impacts of climate change. Millions of people in 
                                    West Africa still lack access to electricity, hindering socio-economic development and perpetuating 
                                    cycles of poverty. Addressing these challenges requires concerted efforts from governments, 
                                    development partners, and the private sector to invest in energy infrastructure, promote renewable 
                                    energy technologies, and enhance regional cooperation.
                                </p>
                            </div>
                            <div>
                                <p>
                                    By leveraging the region&apos;s abundant renewable 
                                    energy resources and fostering partnerships, West Africa can unlock its energy potential, improve living 
                                    standards, and achieve sustainable development goals.
                                    The West African Power and Energy Cooperation Conference and Exhibition (WAPECC) 
                                    serves as a crucial platform to address the pressing challenges and leverage 
                                    the opportunities in the region&apos;s energy and infrastructure sector. 
                                    By convening stakeholders from government, industry, academia, and civil society, 
                                    WAPECC facilitates dialogue, knowledge sharing, and collaboration towards sustainable 
                                    energy development.
                                </p>
                            </div>
                            <div>
                                <p>
                                    The event provides an avenue to showcase innovative solutions, discuss 
                                    policy reforms, and catalyse investments in renewable energy projects, infrastructure development, 
                                    and off-grid solutions. 
                                    Through WAPECC, stakeholders can identify synergies, forge partnerships, and 
                                    chart a collective path towards achieving universal energy access, promoting economic growth, 
                                    and advancing regional integration in West Africa.
                                    WAPECC Lome23 is the 3rd of a series of events held in the region, 
                                    to bring together the key players and drive forward the region&apos;s 
                                    energy and infrastructure transformation, ensuring that reliable and 
                                    affordable energy becomes a reality for all. 
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

               <SponsorOfficial sponsors={sponsors} />
            </div>
        </section>
    )
}
