import logo from "../assets/navLogo.png";

const MusicBanner = () => {
  return (
    <div className="banner">
      <div className="bannerImg">
        <img src={logo} alt="" />
        <span>BeatBliss</span>
      </div>
      <div className="bannerText">
        <h1>
          Your Oasis of Harmony – <br />
          Explore, Discover, and Enjoy
        </h1>
        <button className="button-78" role="button">
          Let's Play
        </button>
      </div>
    </div>
  );
};

export default MusicBanner;
