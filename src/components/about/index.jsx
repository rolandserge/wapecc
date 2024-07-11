
import React from 'react'

export default function About() {

    return (
        <section className='section-about'>
            <div className='about'>
                <div className='header'>
                    <div className='title'>
                        <span>ABOUT VIRTUAL WAPECC21</span>
                    </div>
                    <p>
                        Under the high patronage of H.E Minister of the Federal Ministry of Power of Nigeria and 
                        with the support of the Economic Community of West African States, Konect Group were
                            proud to present the second edition of the  West African Power and Energy 
                        Cooperation Conference (WAPECC 21) which took place virtually from 3rd – 4th  June 2021.
                        <br /><br />
                        Virtual WAPECC Abuja provided an intimate platform to network and socialise, and brought 
                        together the region’s top decision makers, international investors, 
                        leading technology providers, power developers, donor bodies, development 
                        partners, management consultancy firms, and other professionals from around 
                        the globe and from across West Africa
                    </p>
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
