import Footer from "./components/Footer";
import MusicBanner from "./components/MusicBanner";
import MusicContainer from "./components/MusicContainer";
import Navbar from "./components/Navbar";
import TopSingers from "./components/TopSingers";
import TopSongs from "./components/TopSongs";

const App = () => {
  return (
    <>
      <Navbar />
      <>
        <MusicBanner />
        <MusicContainer />
        {/* <TopSongs /> */}
        <TopSingers />
      </>
      <Footer/>
    </>
  );
};

export default App;
