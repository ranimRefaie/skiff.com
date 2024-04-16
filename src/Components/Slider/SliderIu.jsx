import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import dataCard from "../../Data/cardData2";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ccc",
        color: "#ccc",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ccc",
        color: "#ccc",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const SliderIu = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

export default SliderIu;
