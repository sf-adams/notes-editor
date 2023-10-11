import pin from "../assets/pin.png";

function Card(props) {
  console.log(props);
  return (
    <article className="post">
      <img src={props.card.imageUrl} alt="" />
      <div className="post__wrapper">
        <div className="post__location">
          <img src={pin} alt="Pin" />
          <p>{props.card.location}</p>
          <a href="">View on Google Maps</a>
        </div>
        <h2>{props.card.title}</h2>
        <p>{props.card.startDate} - {props.card.endDate}</p>
        <p>{props.card.description}</p>
      </div>
    </article>
  );
}

export default Card;
