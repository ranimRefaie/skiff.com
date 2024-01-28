import github from "../../assets/github-dark.png";
import "./OpenSource.css";
const OpenSource = () => {
  return (
    <div className="rn-open-source">
      <h1>
        Transparent, audited, & <span>open source</span>
      </h1>

      <p>
        Privacy is more than a promise. Anyone can verify our encryption
        protocols and privacy protections.
      </p>

      <div className="rn-open-btn">
        <button>
          View on GitHub <img src={github} alt="" />
        </button>
        <button>Read whitepaper</button>
      </div>
    </div>
  );
};

export default OpenSource;
