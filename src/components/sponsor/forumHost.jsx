import { useState } from "react"

export default function ForumHost() {


    const data = [
        {
            id: 1,
            image: "/assets/zimpertec.jpg",
            categorie: "forum"
        },
        {
            id: 2,
            image: "/assets/cie.jpg",
            categorie: "forum"
        },
        {
            id: 3,
            image: "/assets/konect.png",
            categorie: "forum"
        },
        {
            id: 4,
            image: "/assets/energie.jpg",
            categorie: "host"
        },
        {
            id: 5,
            image: "/assets/konect.png",
            categorie: "host"
        }
    ]

    const [filter, setFilter] = useState('forum')

    return (
        <section className="form-host">
            <div className="button-action">
                <button 
                    className={filter === "forum" ?"active" : "test"}
                    onClick={() => setFilter('forum')}
                >
                    WAPECC FORUM SPONSOR
                </button>
                <button 
                    onClick={() => setFilter("host")}
                    className={filter === "host" ?"active" : "test"}
                >
                    HOST SPONSOR
                </button>
            </div>
            <div className="content">
                { data.filter(x => x.categorie === filter).map(item => (
                    <div 
                        className="image"
                        key={item.id}
                    >
                        <img
                            src={item.image}
                            alt="Image du sponsor du forum"
                        />
                    </div>
                ) )}
            </div>
        </section>
    )
}
