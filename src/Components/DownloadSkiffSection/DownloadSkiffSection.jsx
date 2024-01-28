import DescriptAllSection from "../DescriptAllSection/DescriptAllSection";
import "./DownloadSkiffSection.css";
import mobile from "../../assets/mobile.png";

const DownloadSkiffSection = () => {
  return (
    <div className="down-skiff-sec">
      <DescriptAllSection
        title="Download Skiff for mobile"
        desc="Want to access your inbox, files, and schedule on the go?
Download our iOS and Android apps."
        link="Download apps"
      />
      <div className="col-img">
        <img src={mobile} alt="" />
      </div>
    </div>
  );
};

export default DownloadSkiffSection;
