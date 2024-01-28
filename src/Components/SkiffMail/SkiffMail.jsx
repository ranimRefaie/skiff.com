import arrow from "../../assets/arrow.svg";
import "./SkiffMail.css";
import skiff from "../../assets/skiff-mail.png";
const SkiffMail = () => {
  return (
    <div className="rn-skiff-mail-sec">
      <div className="rn-mail-header">
        <h1>Skiff Mail</h1>
        <button>
          <img src={arrow} alt="" />
        </button>
      </div>
      <p>
        Skiff Mail`s client is completely open-source, giving you the confidence
        to communicate freely.
      </p>

      <img src={skiff} alt="" className="img-mail" />
    </div>
  );
};

export default SkiffMail;
