
export default function Banner({ image, title, subtitle }) {

    return (
        <div className="banner-model">
            <img 
                src={image}
                alt="image de fond de about" 
                
            />
            <div className="overlay">
                <h2>{title}</h2>
                <p>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}
