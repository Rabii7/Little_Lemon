import "../css/Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="offset-xl-2 col-xl-10">
          <div className="row">
            <div className="col-xl-9">
              <div className="row">
                <div className="col-lg-3 col-xl-3 align-self-center">
                  <img
                    src="https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692540420/Logo_r5vvxk.svg"
                    alt="little-lemon-brand"
                    className="brand"
                  />
                </div>
                <div className="col-lg-3 col-xl-3">
                  <h4 className="nav-header">Navigation</h4>
                  <nav className="navigation">
                    <Link to="/home" className="link-item">
                      Home
                    </Link>
                    <Link to="/about" className="link-item">
                      About
                    </Link>
                    <Link to="/menu" className="link-item">
                      Menu
                    </Link>
                    <Link to="/reservations" className="link-item">
                      Reservations
                    </Link>
                    <Link to="/orderonline" className="link-item">
                      Order Online
                    </Link>
                    <Link to="/login" className="link-item">
                      Login
                    </Link>
                  </nav>
                </div>
                <div className="col-lg-3 col-xl-3">
                  <h4 className="nav-header">Contact</h4>
                  <nav className="navigation">
                    <Link to="#" className="link-item">
                      80439 Williamson Union Suite 500
                    </Link>
                    <Link to="#" className="link-item">
                      (867) 999-1844 x242
                    </Link>
                    <Link to="#" className="link-item">
                      welcome@littlelemon.com
                    </Link>
                  </nav>
                </div>
                <div className="col-lg-3 col-xl-3">
                  <h4 className="nav-header">Social Media Links</h4>
                  <nav className="navigation">
                    <Link to="#" className="link-item">
                      Facebook
                    </Link>
                    <Link to="#" className="link-item">
                      Whatsapp
                    </Link>
                    <Link to="#" className="link-item">
                      Instagram
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xl-3"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
