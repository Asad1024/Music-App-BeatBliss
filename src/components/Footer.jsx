import {FcMusic} from "react-icons/fc"
import {ImHeadphones} from "react-icons/im"
import logo from "../assets/navLogo.png";

const Footer = () => {
  return (
    <footer id="about">
      <div className="footerImg">
      <img src={logo} alt="" />
      <h3>BeatBliss</h3>
      </div>
       
        <div className="footerAbout">
            <h3>About</h3>
            <p>Experience the magic of our music app as you delve into a world of captivating melodies and rhythms. Whether you are a fan of classic tunes or contemporary beats, our app has something for everyone..</p>
        </div>
        <div className="footerIcons">
            <FcMusic className="fIcons1"/>
            <ImHeadphones className="fIcons2"/>
        </div>
    </footer>
  )
}

export default Footer