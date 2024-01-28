import { Link } from "react-router-dom";
import logo from "../../assets/logo-footer.svg";
import "./Footer.css";
import twitter from "../../assets/twitter.svg";
import discord from "../../assets/discord.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
  const social = [twitter, discord, github, linkedin, youtube];
  const link1 = [
    "Mail",
    "Pages",
    "Drive",
    "Calendar",
    "Pricing",
    "Download",
    "Roadmap",
  ];
  const link2 = [
    "Blog",
    "Help",
    "About us",
    "Changelog",
    "For startups",
    "Free online notepad",
    "Videos",
  ];
  const link3 = [
    "Anonymous email",
    "End-to-end",
    "encryption email",
    "Secure documents",
    "Cloud storage guide",
    "Cloud data protection",
    "Have I been hacked?",
  ];

  const link4 = [
    "GitHub",
    "Libraries",
    "Skiff Crypto docs",
    "Skiff UI docs",
    "Whitepaper",
    "Report an issue",
    "Status",
  ];

  const link5 = [
    "Email security",
    "Cloud storage",
    "Quick Aliases",
    "Encrypted notes",
  ];

  const link6 = [
    "Privacy policy",
    "Terms of service",
    "Acceptable use policy",
    "Transparency",
  ];
  return (
    <div className="rn-footer">
      <div className="rn-about">
        <img src={logo} alt="" className="logo" />

        <div className="social">
          {social.map((social, i) => (
            <Link key={i}>
              <img src={social} alt="" />
            </Link>
          ))}
        </div>

        <p>© 2023. All rights reserved.</p>
      </div>
      <div className="rn-links">
        {link1.map((link1, i) => (
          <Link key={i}>{link1}</Link>
        ))}
      </div>

      <div className="rn-links">
        {link2.map((link2, i) => (
          <Link key={i}>{link2}</Link>
        ))}
      </div>

      <div className="rn-links">
        {link3.map((link3, i) => (
          <Link key={i}>{link3}</Link>
        ))}
      </div>

      <div className="rn-links">
        {link4.map((link4, i) => (
          <Link key={i}>{link4}</Link>
        ))}
      </div>

      <div className="rn-links">
        {link5.map((link5, i) => (
          <Link key={i}>{link5}</Link>
        ))}
      </div>

      <div className="rn-links">
        {link6.map((link6, i) => (
          <Link key={i}>{link6}</Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
