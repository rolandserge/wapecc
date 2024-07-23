
export default function Banner({ image, title }) {

    return (
        <div className="banner-model">
            <img 
                src={image}
                alt="image de fond de about" 
                
            />
            <div className="overlay">
                <h2>{title}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, dolorum!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, dignissimos?
                </p>
            </div>
        </div>
    )
}
