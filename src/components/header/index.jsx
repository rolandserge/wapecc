
export default function Header() {

    return (
        <section className="header-container">
            <div className='logo'>
                <div className="card-image">
                    <img
                        src='/assets/logo-wapecc.png'
                        alt="Logo de l'entreprise"
                    />
                </div>
                <p>19th- 21st March 2025 - Lome</p>
            </div>
            <div className="logo">
                <img 
                    src="/assets/logo-togo.png" 
                    alt="Logo official du Togo"
                />
            </div>
            <div className="logo">
                <p>Facilitor</p>
                <div className="card-image">
                    <img 
                        src="/assets/logo/apua.jpeg" 
                        alt="Logo du cedeao"
                    />
                </div>
                <p>The Association of Power Utilities of Africa (APUA)</p>
            </div>
        </section>
    )
}
