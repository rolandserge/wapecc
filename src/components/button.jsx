import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";

export default function ButtonModel({ title, lien}) {

    return (
        <Link to={lien} className="button-action-model">
            {title} 
            <HiArrowSmRight className="icon" size={25} />
        </Link>
    )
}
