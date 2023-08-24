import { Link } from "react-router-dom";

import "../footer/footer.styles.scss";
import Logo from "../../assets/static/logonew.png";
import iconArrow from "../../assets/icons/icon-arrow.svg";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='logo-container'>
        <Link to='/'>
          <img width={200} className='logo' src={Logo} alt='' />
        </Link>
      </div>

      <div className='footer-links-container'>
        <Link className='nav-link' to='/architecture'>
          Architektur
        </Link>
        <Link className='nav-link' to='/static'>
          Statik
        </Link>
        <Link className='nav-link' to='/about'>
          Über uns
        </Link>
        <Link className='nav-link' to='/contact'>
          Kontakt
        </Link>
      </div>

      <Link className='button-link' to='/contact'>
        <div className='button'>
          <h4> Über uns</h4>
          <img className='arrow-icon' src={iconArrow} />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
