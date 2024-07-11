import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";


export default function Reseaux() {

    return (
        <section className='reseaux-sociaux'>
            <Link to="#" target="_blanket" className="icon fb">
                <FaFacebookF />
            </Link>
            <Link to="#" target="_blanket" className="icon twt">
                <FaXTwitter />
            </Link>
            <Link to="#" target="_blanket" className="icon in">
                <FaLinkedinIn />
            </Link>
            <Link to="#" target="_blanket" className="icon ytb">
                <TfiYoutube />
            </Link>
        </section>
    )
}
