import { HiArrowSmRight } from "react-icons/hi";
import { useState } from 'react';

export default function About() {

    const [more, setMore] = useState(false)

    return (
        <section className='section-about'>
            <div className='about'>
                <div className='header'>
                    <div className='title'>
                        <span>About WAPECC Lome23</span>
                    </div>
                    <p>
                        Under the awaited esteemed Patronage of His Excellency Mr. Faure Essozimna Gnassingbé, President of the Republic of Togo, 
                        and chaired by Monsieur Robert Koffi Messan EKLO, Minister Delegate to the President of the Republic in charge Mines and 
                        Energy resources of Togo, with the facilitation of the Association of Power Utilities of Africa (APUA), and the support 
                        of the West African Development Bank, Venture Konect Ltd & partners are pleased to present the 3rd edition of the West 
                        Africa Power and Energy Cooperation Conference (WAPECC23), Which will take place tentatively from the <strong>19th-21st 2025 in Lomé.</strong> 
                        <br />
                        { more && (
                            <>
                                WAPECC is a biennial regional platform aimed at promoting regional resources and government strategies for 
                                sustainable energy development. The conference focuses on energy, infrastructure, and project financing, addressing 
                                key challenges in the energy market and paving the way for investment in the sector. This, in turn, helps businesses 
                                and markets create jobs, boost economies, and foster regional cooperation and interconnectivity among the member countries 
                                of the Economic Community of West African States (ECOWAS).
                            </>
                        )}
                    </p>
                </div>
                <div className='image-card'>
                    <img 
                        src="/assets/about.jpeg" 
                        alt="About image"
                    />
                </div>
            </div>
            { more && (

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
            )}
            <div className='action-about'>
                <button className='about-us' onClick={() => setMore(!more)}>
                    {more ? "See less" : "See more"} <HiArrowSmRight className='icon' size={25} />
                </button>
            </div>
        </section>
    )
}
