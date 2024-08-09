import ReactPlayer from "react-player";

export default function CardVideo(props) {

    return (
        <div className="card-video">
            <ReactPlayer
                controls
                width="100%" height="100%"
                url={props.url}
            />
        </div>
    )
}
