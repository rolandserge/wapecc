import ButtonModel from "./button";

export default function BespokeNetwork() {

  return (
    <div className="bespoke-network">
    <div className="title">
        <p>Bespoke Networking options</p>
    </div>

    <div className="bespoke-data-container">
        <div className="bespoke-card">
            <div className="head">
                <div className="card-icon">
                    <img src="/assets/icon/visiteur.png" alt="Site visit" />
                </div>
                <span>WAPECC23 Site Visit</span>
            </div>
        </div>
        <div className="bespoke-card">
            <div className="head">
                <div className="card-icon">
                    <img src="/assets/icon/cocktail.png" alt="Welcome drind" />
                </div>
                <span>Welcome Drink</span>
            </div>
        </div>
        <div className="bespoke-card">
            <div className="head">
                <div className="card-icon">
                    <img src="/assets/icon/dejeuner.png" alt="Onsite lunch" />
                </div>
                <span>Onsite Lunch</span>
            </div>
        </div>
        <div className="bespoke-card">
            <div className="head">
                <div className="card-icon">
                    <img src="/assets/icon/cafe.png" alt="breakfast brief" />
                </div>
                <span>Breakfast brief:</span>
            </div>
        </div>
        <div className="bespoke-card">
            <div className="head">
                <div className="card-icon">
                    <img src="/assets/icon/dinner.png" alt="Private VIP dinner" />
                </div>
                <span>WAPECC23 Private VIP Dinner at WAPECC23 with West Africa Energy Leaders</span>
            </div>
        </div>
        <div className="bespoke-card">
            <div className="head">
                <div className="card-icon">
                    <img src="/assets/icon/torche.png" alt="Closing ceremony and torch" />
                </div>
                <span>WAPECC23 Closing Ceremony and Torch Relay to the Next Host Country</span>
            </div>
        </div>
        <div className="bespoke-card item7">
            <div className="head">
                <div className="card-icon">
                    <img src="/assets/icon/parrainer.png" alt="Gala dinner" />
                </div>
                <span>The Gala Dinner Sponsorship at WAPECC23</span>
            </div>
        </div>
    </div>
    <div className="action-button">
        <ButtonModel
            title="Register interest"
            lien="#"
        />
    </div>
</div>
  ) 
}
