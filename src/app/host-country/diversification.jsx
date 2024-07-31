import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";
import { TbDirectionSignFilled } from "react-icons/tb";

export default function Diversification() {

    return (
        <div className="diversification">
            <Banner
                image="/assets/diversification1.jpg"
                title="ECONOMIC DIVERSIFICATION"
                subtitle="Togo&apos;s economy has traditionally been reliant on agriculture, with cotton, coffee, and cocoa being"
            />

            <div className="diversification-content">
                <div className="content">
                    <div className="element">
                        <p className="title">
                            Togo&apos;s economy has traditionally been reliant on agriculture, with cotton, coffee, and cocoa being 
                            primary exports. However, efforts are underway to diversify the economy and reduce dependence on agriculture. 
                            Key sectors contributing to diversification include:
                        </p>
                        <div className="items1">
                            <div className="item">
                                <span>
                                    <TbDirectionSignFilled className="icon"/>
                                </span>
                                <p>
                                    <strong>Industry: </strong>Togo has been making strides in industrial development, particularly in 
                                    manufacturing and processing industries. The government has implemented policies to 
                                    attract investment and promote industrialization, with a focus on sectors such as
                                    textiles, agro-processing, and construction materials.
                                </p>
                            </div>
                            <div className="item">
                                <span>
                                    <TbDirectionSignFilled className="icon"/>
                                </span>
                                <p>
                                    <strong>Services: </strong>The services sector, including telecommunications, finance, tourism, 
                                    and logistics, is increasingly becoming a significant contributor to the economy. Efforts to 
                                    improve infrastructure and create a conducive business environment have attracted investment 
                                    in these areas.
                                </p>
                            </div>
                            <div className="item">
                                <span>
                                    <TbDirectionSignFilled className="icon"/>
                                </span>
                                <p>
                                    <strong>Mining and Energy: </strong>Togo has untapped mineral resources, including phosphate, 
                                    limestone, and marble, which present opportunities for economic diversification. Additionally, 
                                    investments in renewable energy projects, such as solar and wind power, aim to reduce reliance on 
                                    imported fossil fuels and enhance energy security.
                                </p>
                            </div>
                            <div className="item">
                                <span>
                                    <TbDirectionSignFilled className="icon"/>
                                </span>
                                <p>
                                    <strong>Mining : </strong>Natural resources: phosphate, iron, manganese, marble, platinum, bauxite, etc.
                                    <br />
                                    • Phosphates : Soft phosphate – potential annual production: 3 million tons, 
                                    research is underway for phosphates in the North of Togo (Iron : mine is located 
                                    400 km north of Lomé, Manganese: proven reserve is located 600 km North of  Lomé, 
                                    research is in progress for uranium, rare earth, tungsten
                                </p>
                            </div>
                            <div className="item">
                                <span>
                                    <TbDirectionSignFilled className="icon"/>
                                </span>
                                <p>
                                    <strong>Agriculture : </strong>remains one of the engines of economic growth. Togo has the highest 
                                    ratio of arable land within ECOWAS 3.4 million hectares of which less than 45% are 
                                    currently exploited.
                                    <br />
                                    Therefore, would like to attract investments that will help, establish an “agropolis” 
                                    including an agro-food industry; revitalize the cash crop sector (coffee, cocoa, 
                                    palm oil and cotton); train agricultural experts on irrigation techniques; constructing 
                                    water retention systems in agricultural areas and storing and processing agricultural products.
                                </p>
                            </div>
                            <div className="item">
                                <span>
                                    <TbDirectionSignFilled className="icon"/>
                                </span>
                                <p>
                                    <strong>Energy : </strong>Context : 25% of Togo needs is covered by the national electricity production, 
                                    current consumption is 150 MW, need is more than 500 MW if the corridor is built. 
                                    Opportunities in power production projects exist, at the moment the need for  a 
                                    construction of thermal power plant by TI (300 MW) and a 161 KV Energy Line Network 
                                    (300 km) is required. In term of rural electrification, solar power generation for 
                                    utilities, schools and public administrations, the sector requires investment in 
                                    both transmission and distribution
                                </p>
                            </div>
                            <div className="item">
                                <span>
                                    <TbDirectionSignFilled className="icon"/>
                                </span>
                                <p>
                                    <strong>Transport & Infrastructures: </strong>Investing in the Future: Enhancing Energy Infrastructure for Greater Access 
                                    requires support from the external market, current potential in the sector 
                                    are as following:
                                    <br />
                                    <strong>• The Ports : </strong>Need of logistic hub at the back of the port, land development 
                                    for the establishment of industrial a special economic zones and a modernization of the mineral quay
                                    <br />
                                    <strong>• Airport :</strong> Necessity of Building a new airport near Lomé
                                    <br />
                                    <strong>• The Railroad : </strong>Need of Building a railway network from Lomé Port to the northern border
                                    <br />
                                    <strong>• Roads : </strong>Build a 675 km-motorway from the port of Lomé to the northern border
                                </p>
                            </div>
                        </div>
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
