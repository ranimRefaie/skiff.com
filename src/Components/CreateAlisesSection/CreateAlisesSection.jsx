import scale from "../../assets/div.scale-75.svg";
import DescriptAllSection from "../DescriptAllSection/DescriptAllSection";
import "./CreateAlisesSection.css";
import { useTypewriter } from "react-simple-typewriter";
const CreateAlisesSection = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "deliverers",
      "promotion",
      "datingapp",
      "shopping",
      "freetrials",
      "newsletter",
      "socialmedia",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="sec-create">
      <div className="col-1">
        <img src={scale} alt="" />
        <div className="email">
          <p>
            <span>{typeEffect}</span>@mine.maskmy.id
          </p>
        </div>
      </div>

      <div className="col-2">
        <button className="btn-just">Just released</button>
        <DescriptAllSection
          title="Create aliases anywhere you go"
          desc="Protect your internet identity with Quick Aliases and
create aliases on the fly."
          link="Try now"
        />
      </div>
    </div>
  );
};

export default CreateAlisesSection;
