import "./Header.css";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <div className="rn-header">
      <div className="rn-container">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
};

export default Header;
