import ButtonModel from "../button"

export default function Why() {

    return (
        <section className='why'>
            <div className='card-image'>
                <img 
                    src="/assets/west-africa.jpg" 
                    alt="pourquoi wapecc en Afrique de l'ouest"     
                />
            </div>
            <div className='data'>
                <span>Why WAPECC in West Africa ? </span>
                <p>
                    WAPECC23&apos;s choice to be held in West Africa underscores the region&apos;s 
                    significance as a focal point for energy development and collaboration. 
                    This gathering brings together policymakers, industry leaders, investors, and 
                    innovators from across West Africa, fostering collaboration and synergies essential 
                    for addressing common energy challenges. By facilitating dialogue and knowledge exchange, 
                    WAPECC strengthens regional partnerships, promotes collective action, and advances shared 
                    energy goals critical for sustainable development.
                </p>
                <div className='card-button-action'>
                    <ButtonModel 
                        title="More about us"
                        lien="/conference/wapecc-west-africa"
                    />
                </div>
            </div>
        </section>
    )
}
