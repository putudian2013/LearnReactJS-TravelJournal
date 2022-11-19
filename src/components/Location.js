import pin from "../icons/pin.png"

export default function Location(props) {
    return (
        <div className="location">
            <div className="right">
                <img src={`../images/${props.image}`} alt="location" />
            </div>
            <div className="left">
                <div className="country">
                    <img src={pin} alt="pin icon" />
                    <p>{props.country}</p>
                    <a href="#">View on Google Maps</a>
                </div>
                <p className="title">{props.location}</p>
                <p className="visit">{props.visit}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}