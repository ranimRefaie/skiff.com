import CreateAlisesSection from "../Components/CreateAlisesSection/CreateAlisesSection";
import DownloadSkiffSection from "../Components/DownloadSkiffSection/DownloadSkiffSection";
import Header from "../Components/Header/Header";
import InsterestedSiction from "../Components/InsterestedSiction/InsterestedSiction";
import "../App.css";
import CardSkiffNews from "../Components/CardSkiffNews/CardSkiffNews";
import Footer from "../Components/Footer/Footer";
import JoinSection from "../Components/JoinSection/JoinSection";
import CardGetLatest from "../Components/CardGetLatest/CardGetLatest";
import TransparentSection from "../Components/TransparentSection/TransparentSection";
import SliderTest from "../Components/Slider/SliderTest";
const Home = () => {
  return (
    <>
      <Header />
      <div className="main">
        <TransparentSection />
        <CreateAlisesSection />
        <DownloadSkiffSection />
        <InsterestedSiction />
        <CardSkiffNews />
        <CardGetLatest />

        <JoinSection />
        <SliderTest />
      </div>

      <Footer />
    </>
  );
};

export default Home;
