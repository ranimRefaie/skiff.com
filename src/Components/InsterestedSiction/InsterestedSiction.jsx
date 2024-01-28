import DescriptAllSection from "../DescriptAllSection/DescriptAllSection";
import logo from "../../assets/SVG(1).svg";
import "./InsterestedSiction.css";
const InsterestedSiction = () => {
  return (
    <div className="insterested-sec">
      <DescriptAllSection
        title="Interested in Skiff for your
startup?"
        desc="Apply now and earn up to $2,000 of credit for custom
domains, 1 TB storage, and more"
        link="Claim credits"
      />
      <div className="col-img">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default InsterestedSiction;
