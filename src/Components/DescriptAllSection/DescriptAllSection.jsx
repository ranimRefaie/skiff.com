import "./DescriptAllSection.css";
import { GoArrowRight } from "react-icons/go";
const DescriptAllSection = ({ title, desc, link }) => {
  return (
    <div className="descrip-section">
      <h1>{title}</h1>
      <p>{desc}</p>
      <button>
        {link} <GoArrowRight />
      </button>
    </div>
  );
};

export default DescriptAllSection;
