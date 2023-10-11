function Card(props) {
  console.log(props);
  return <div>
    {props.card.title}
  </div>;
}

export default Card;
