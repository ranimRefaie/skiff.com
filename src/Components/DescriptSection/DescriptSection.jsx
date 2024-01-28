import "./DescriptSection.css";
import { GoArrowRight } from "react-icons/go";

// eslint-disable-next-line react/prop-types
function DescriptSection({ title, desc }) {
  return (
    <div className="rn-desc-section">
      <div className="rn-title">{title}</div>
      <div className="rn-desc-1">
        <p>{desc}</p>
      </div>
      <button>
        Start for free <GoArrowRight />
      </button>
      <div className="rn-desc-2">
        <p>Free plan • No card required</p>
      </div>
    </div>
  );
}

export default DescriptSection;
