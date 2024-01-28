import "./CardEssentialApp.css";
import dataCard from "../../Data/cardData3";

const CardEssentialApp = () => {
  return (
    <div className="card-essential">
      {dataCard.map((item) => (
        <div className="rn-card" key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CardEssentialApp;
