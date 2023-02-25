import {Link} from 'react-router-dom';

import '../footer/footer.styles.scss';
import Logo from '../../assets/static/logo-white.svg';
import iconArrow from '../../assets/icons/icon-arrow.svg';

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='logo-container'>
                <img src={Logo} alt=''/>
            </div>

            <div className='footer-links-container'>
                <Link className='nav-link' to='/portfolio'>Portfolio</Link>
                <Link className='nav-link' to='/about'>About Us</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
            </div>

            <Link className='button-link' to='/portfolio'>
                <div className='button'>
                    <h4>See Our Portfolio</h4>
                    <img className='arrow-icon' src={iconArrow}/>
                </div>
            </Link>

        </div>
    )
}

export default Footer;