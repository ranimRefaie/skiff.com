import "./Hero.css";
import DescriptSection from "../DescriptSection/DescriptSection";

const Hero = () => {
  return (
    <div className="rn-hero">
      <DescriptSection
        title={
          <div>
            Privacy-first <span>end-to-end encrypted</span> email.
          </div>
        }
        desc="End-to-end encrypted email, calendar, documents, and
files that give you the power to communicate freely."
      />
    </div>
  );
};

export default Hero;
