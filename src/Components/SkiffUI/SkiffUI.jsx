import ui from "../../assets/skiff-ui.png";
import arrow from "../../assets/arrow.svg";
import "./SkiffUI.css";
const SkiffUI = () => {
  return (
    <div className="rn-skiff-ui">
      <div className="rn-header-ui">
        <h1>Skiff UI</h1>
        <button>
          <img src={arrow} alt="" />
        </button>
      </div>
      <p>
        Use, modify, and share our open-source user interface and design system
        components.
      </p>

      <img src={ui} alt="" className="ui-img" />
    </div>
  );
};

export default SkiffUI;
