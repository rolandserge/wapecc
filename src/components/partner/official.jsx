import { Link } from "react-router-dom";

export default function Official() {

    return (
        <section className="official">
            <div className="overlay">

                <div className="head-official">
                    <h2>OFFICIAL ENDORSING PARTNERS</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Recusandae rerum aperiam 
                        sed nemo, voluptatum quibusdam sapiente officiis 
                        obcaecati quis ab atque repellendus, maxime eos ea? 
                        Ipsum eos earum nemo. Sequi?
                    </p>
                    <Link 
                        to='#' 
                        className="button-partner"
                    >
                        All our partners
                    </Link>
                </div>
                <div className="content-official">
                    <div className="card-image">
                        <img
                            src="/assets/zimpertec.jpg"
                            alt="Logo des partenaires"
                        />
                    </div>
                    <div className="card-image">
                        <img
                            src="/assets/cienergies.png"
                            alt="Logo des partenaires"
                        />
                    </div>
                    <div className="card-image">
                        <img
                            src="/assets/gridco.png"
                            alt="Logo des partenaires"
                        />
                    </div>
                    <div className="card-image">
                        <img
                            src="/assets/anare.jpg"
                            alt="Logo des partenaires"
                        />
                    </div>
                    <div className="card-image">
                        <img
                            src="/assets/sonabel.png"
                            alt="Logo des partenaires"
                        />
                    </div>
                    <div className="card-image">
                        <img
                            src="/assets/konect.png"
                            alt="Logo des partenaires"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
