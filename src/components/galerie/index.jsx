import { galeries } from "../../data"
import CardGalerie from "./card";
import ButtonModel from "../button";
export default function Galerie() {

    return (
        <section className="galerie-photos">
            <div className="head-galerie">
                <p>Image gallery</p>
                
                <ButtonModel
                    title="See more"
                    lien="/media/image"
                />
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

