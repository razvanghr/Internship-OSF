import { FaFacebookF } from "react-icons/fa6";
import "./HomePage.scss";
import palmPhoto from "../../assets/MainImages/palm-image.png";
import SimpleSlider from "../../components/SlickSlider/SimpleSlider";
function Header() {
  return (
    <div className="header">
      <SimpleSlider />
      <div className="header-content">
        <img src={palmPhoto} alt="Palm Header Photo" />
        <div className="facebook-contact">
          <h1>Follow us on Facebook</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
          <a href="https://www.facebook.com/" target="_blanck">
            <button className="header-button">
              <FaFacebookF />
              <p>FOLLOW</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
