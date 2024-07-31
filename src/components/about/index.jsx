import { Link } from 'react-router-dom'
import { HiArrowSmRight } from "react-icons/hi";

export default function About() {

    return (
        <section className='section-about'>
            <div className='about'>
                <div className='header'>
                    <div className='title'>
                        <span>About WAPECC Lome23</span>
                    </div>
                    <p>
                    Under the awaited esteemed Patronage of His Excellency 
                    Mr. Faure Essozimna Gnassingbé, President of the Republic of Togo, and 
                    chaired by Madame Mawunyo Mila Ami AZIABLE, Minister Delegate to the President of the Republic in charge of Energy and Mines 
                    of Togo, with the facilitation of the ECOWAS Energy and Mines Commission and the support 
                    of the West African Development Bank, Venture Konect Ltd is pleased to present the 3rd edition 
                    of the West Africa Power and Energy Cooperation Conference (WAPECC23). This event is tentatively 
                    scheduled to take place from January <strong>23rd to 25th, 2025, in Lomé, Togo</strong>.
                    </p>
                    <div className='action-about'>
                        <Link to="#" className='about-us'>
                            More about us <HiArrowSmRight className='icon' size={25} />
                        </Link>
                    </div>
                </div>
                <div className='image-card'>
                    <img 
                        src="/assets/about.jpeg" 
                        alt="About image"
                    />
                </div>
            </div>
        </section>
    )
}
