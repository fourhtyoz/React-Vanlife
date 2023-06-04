export default function Van(props) {
    return (
        <div className="van--card">
            <img src={props.image} className="van--image" />
            <span className="van--type">{props.type}</span><span className="van--price">${props.price} a day</span>
            <p className="van--name">{props.name}</p>
            {/* <p className="van--description">{props.description}</p> */}
        </div>
    )
}