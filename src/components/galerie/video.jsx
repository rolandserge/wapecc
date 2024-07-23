import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'

export default function GalerieVideo() {

    return (
        <section className='galerie-video'>
            <div className="title">
                <h2>key moments of WAPECC 19</h2>
            </div>
            <div className="content-video">
                <div className="card-video">
                    <ReactPlayer 
                        controls
                        width="100%" height="100%"
                        url="https://www.youtube.com/watch?v=agG4Nhqk1UY&ab_channel=MediafrexNews?controls=0"
                    />
                </div>
                <div className="card-video">
                    <ReactPlayer
                        controls
                        width="100%" height="100%"
                        url="https://www.youtube.com/watch?v=zfszvBP_A6U&ab_channel=SEN-INFOSTV?controls=0"
                    />
                </div>
                <div className="card-video">
                    <ReactPlayer 
                        controls
                        width="100%" height="100%"
                        url="https://www.youtube.com/watch?v=9Gwg6jex0cg&ab_channel=WAPECC"
                    />
                </div>
            </div>
            <div className="action">
                <Link to="#" className='link'>See more</Link> 
            </div>
        </section>
    )
}
