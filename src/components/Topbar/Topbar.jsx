import "./topbar.scss";
import { Person, Mail, Facebook, Instagram, GitHub } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link className="logo" to="/">
            Feriel.
          </Link>

          <div className="itemComtainer first">
            <Person className="icon" />
            <span>+216 21 122 439</span>
          </div>
          <div className="itemComtainer">
            <Mail className="icon" />
            <span>feriel.jabri@yahoo.fr</span>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/ange.f.tunisie/">
              <Facebook className="icon social" />
            </a>

            <a href="https://www.instagram.com/feri878/?hl=fr">
              <Instagram className="icon social" />
            </a>

            <a href="https://github.com/feriel-j">
              {" "}
              <GitHub className="icon social" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
