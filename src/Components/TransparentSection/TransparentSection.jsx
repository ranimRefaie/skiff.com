import OpenSource from "../OpenSource/OpenSource";
import "./TransparentSection.css";
import source from "../../assets/opensource.png";
import SkiffUI from "../SkiffUI/SkiffUI";
import SkiffMail from "../SkiffMail/SkiffMail";

const TransparentSection = () => {
  return (
    <div className="rn-trans-section">
      <div className="rn-row">
        <OpenSource />
        <div className="rn-img-source">
          <img src={source} alt="" />
        </div>
      </div>
      <div className="rn-row">
        <SkiffMail />
        <SkiffUI />
      </div>
    </div>
  );
};

export default TransparentSection;
