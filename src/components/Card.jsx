import pin from "../assets/pin.png";

function Card(props) {
  return (
    <article className="post">
      <div className="post__image-wrapper">
        <img className="post__image" src={props.card.imageUrl} alt="" />
      </div>
      <div className="post__details">
        <div className="post__location">
          <img className="post__pin" src={pin} alt="Pin" />
          <p className="post__country">{props.card.location}</p>
          <a className="post__location-link" href={props.card.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="post__title">{props.card.title}</h2>
        <p className="post__date">
          {props.card.startDate} - {props.card.endDate}
        </p>
        <p className="post__description">{props.card.description}</p>
      </div>
    </article>
  );
}

export default Card;
