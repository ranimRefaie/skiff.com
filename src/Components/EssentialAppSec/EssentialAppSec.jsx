import email from "../../assets/email.svg";
import pages from "../../assets/pages.svg";
import drive from "../../assets/drive.svg";
import calender from "../../assets/calender.svg";
import "./EssentialAppSec.css";
const EssentialAppSec = () => {
  const buttons = [
    {
      id: 1,
      nameBtn: "Email",
      img: email,
      class: "blue",
    },
    {
      id: 2,
      nameBtn: "Events",
      img: calender,
      class: "pink",
    },
    {
      id: 3,
      nameBtn: "Files",
      img: drive,
      class: "green",
    },
    {
      id: 4,
      nameBtn: "Documents",
      img: pages,
      class: "orange",
    },
  ];

  return (
    <div className="essential-section">
      <h1>Essential apps that protect your</h1>
      {buttons.map((item) => (
        <div className="rn-Buttons" key={item.id}>
          <button className={item.class}>
            <img src={item.img} alt="" />
            {item.nameBtn}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EssentialAppSec;
