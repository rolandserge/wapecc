
export default function CardGalerie({ items }) {

    return (
        <div className="card-galerie">
            <div className="image-galerie">
                <img
                    src={items?.image}
                    alt="Image de la gallery"
                />
                <div className="badge-galerie">
                    <p>{items?.pays}</p>
                </div>
            </div>
        </div>
    )
}
