import email from "../../assets/email.svg";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="rn-icon">
        <img src={email} alt="" />
      </div>
      <div className="name">
        <h1>Skiff Mail</h1>
        <p>Nightwatch</p>
      </div>
    </div>
  );
};

export default Dashboard;
