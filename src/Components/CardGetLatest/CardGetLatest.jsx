import "./CardGetLatest.css";
import dataCard from "../../Data/cardData2";

const CardGetLatest = () => {
  return (
    <div className="rn-card-get-latest">
      <h1>Get the latest in Privacy</h1>
      <div className="rn-cards">
        {dataCard.map((item) => (
          <div className="rn-card" key={item.id}>
            <div className="img-card">
              <img src={item.img} alt="" />
            </div>
            <div className="btn-card">
              <button className="">{item.titBtn}</button>
            </div>
            <div className="rn-body-card">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGetLatest;
