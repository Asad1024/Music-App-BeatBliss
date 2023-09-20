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
            <p>Discover the magic of our music app, offering captivating melodies and rhythms for fans of classics and contemporary beats alike.</p>
        </div>
        <div className="footerIcons">
            <FcMusic className="fIcons1"/>
            <ImHeadphones className="fIcons2"/>
        </div>
    </footer>
  )
}

export default Footer