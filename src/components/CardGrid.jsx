import Card from "./Card";
import data from "../data";

function CardGrid() {

  const cards = data.map((card) => {
    return (
      <Card key={card.id} card={card} />
    )
  })
  
  return (
    <div className="card-grid">
      {cards}
    </div>
  );
}

export default CardGrid;
