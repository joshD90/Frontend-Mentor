import CardBack from "../cardBack/CardBack";
import CardFront from "../cardFront/CardFront";
import "./cardsContainer.css";

const CardsContainer = () => {
  return (
    <section className="card-container">
      <div className="card-container__back">
        <CardBack />
      </div>
      <div className="card-container__front">
        <CardFront />
      </div>
    </section>
  );
};

export default CardsContainer;
