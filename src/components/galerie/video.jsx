import CardVideo from './cardVideo'
import { videos } from '../../data'
import ButtonModel from '../button'

export default function GalerieVideo() {

    
    return (
        <section className='galerie-video'>
            <div className="title">
                <h2>key moments of WAPECC</h2>
            </div>
            <div className="content-video">
                { videos.slice(0, 3).map(item => (
                    <CardVideo 
                        key={item.id}
                        url={item.url}
                    />
                ))}
            </div>
            <div className="action">
                <ButtonModel
                    title="See more"
                    lien="/media/video"
                />
            </div>
        </section>
    )
}
