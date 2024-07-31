import { Link } from "react-router-dom";
import { galeries } from "../../data"
import CardGalerie from "./card";
export default function Galerie() {

    return (
        <section className="galerie-photos">
            <div className="head-galerie">
                <p>Image gallery</p>
                <Link to="#" className="voir">
                    See more
                </Link>
            </div>
            <div className="container-galerie">
                { galeries.map(item => (
                    <CardGalerie
                        key={item.id}
                        items={item}
                    />
                ))}
            </div>
        </section>
    )
}

