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
        <Link className='nav-link' to='/static'>
          Architecture
        </Link>
        <Link className='nav-link' to='/static'>
          Static
        </Link>
        <Link className='nav-link' to='/about'>
          About Us
        </Link>
        <Link className='nav-link' to='/contact'>
          Contact
        </Link>
      </div>

      <Link className='button-link' to='/contact'>
        <div className='button'>
          <h4>Contact us</h4>
          <img className='arrow-icon' src={iconArrow} />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
