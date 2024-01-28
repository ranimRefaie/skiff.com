import { Link } from "react-router-dom";
import DescriptSection from "../DescriptSection/DescriptSection";
import green from "../../assets/green-circle.png";
import blue from "../../assets/blue-circle.png";
import email from "../../assets/email.svg";
import pages from "../../assets/pages.svg";
import drive from "../../assets/drive.svg";
import calender from "../../assets/calender.svg";
import "./JoinSection.css";
const JoinSection = () => {
  const links = [email, pages, drive, calender];
  return (
    <div className="join-section">
      <img src={green} alt="" className="green" />

      <div className="rn-desc-join">
        <div className="rn-icons">
          {links.map((links, i) => (
            <Link key={i}>
              <img src={links} alt="" />
            </Link>
          ))}
        </div>
        <DescriptSection
          className="desc"
          title="Join the community"
          desc="Join our 1,500,000+ person community and contribute to a more
private and decentralized internet."
        />
      </div>

      <img src={blue} alt="" className="blue" />
    </div>
  );
};

export default JoinSection;
