import { Link } from "react-scroll";

export default function Banner({ image, title, subtitle, more }) {

    return (
        <div className="banner-model">
            <img 
                src={image}
                alt="image de fond de about" 
                
            />
            <div className="overlay">
                <h2>{title}</h2>
                <p>
                    {subtitle + " "}
                    <Link 
                        to="more" smooth={true} spy={true}
                        style={{ color: "orange", cursor: "pointer", textDecoration: "underline"}}
                    >
                        {more && "More"}
                    </Link>
                </p>
            </div>
        </div>
    )
}
