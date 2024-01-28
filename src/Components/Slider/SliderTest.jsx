import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderTest.css";
import "../CardGetLatest/CardGetLatest.css";
import dataCard from "../../Data/cardData2";

const SliderTest = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <Slider {...settings} className="rn-slide">
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
    </Slider>
  );
};

export default SliderTest;
