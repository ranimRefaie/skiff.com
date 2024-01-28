import dataCard from "../../Data/cardData1";
import "./CardSkiffNews.css";
const CardSkiffNews = () => {
  return (
    <div className="cards-news">
      <h1>Skiff in the news</h1>
      <div className="rn-cards">
        {dataCard.map((item) => (
          <div className="rn-card" key={item.id}>
            <div className="img-card">
              <img src={item.img} alt="" />
            </div>

            <div className="rn-body-card">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>

            <div className="btn-card">
              <button className="">{item.titBtn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSkiffNews;
