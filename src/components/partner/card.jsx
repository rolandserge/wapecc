

export default function CardSponsor({ items }) {

    return (
        <div className='container-partner-card'>
            <img 
                src={items.image} 
                alt="logo des partenaires"
            />
        </div>
    )
}
