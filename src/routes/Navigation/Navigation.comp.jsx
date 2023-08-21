import Logo from "../../assets/static/logonew.png";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useState } from "react";

import "./Navigation.styles.scss";

export default function Navigation() {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    openMobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <Fragment>
      <div>
        <header>
          <div className='navbar'>
            <Link to='/'>
              <img
                className='logo'
                src={Logo}
                alt='logo'
                height={50}
                width={200}
                onClick={closeMobileMenu}
              />
            </Link>

            <div className='hamburger' onClick={handleMobileMenu}>
              <span className='hamburger-line'></span>
              <span className='hamburger-line'></span>
              <span className='hamburger-line'></span>
            </div>

            {openMobileMenu ? (
              <div className='mobile-navlinks'>
                <Link
                  className='nav-link'
                  to='/static'
                  onClick={closeMobileMenu}
                >
                  Static
                </Link>
                <Link
                  className='nav-link'
                  to='/architecture'
                  onClick={closeMobileMenu}
                >
                  Architecture
                </Link>
                <Link
                  className='nav-link'
                  to='/about'
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
                <Link
                  className='nav-link'
                  to='/contact'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                <Link
                  className='nav-link'
                  to='/references'
                  onClick={closeMobileMenu}
                >
                  References
                </Link>
              </div>
            ) : null}

            <div className='navlinks'>
              <Link className='nav-link' to='/static'>
                Static
              </Link>
              <Link className='nav-link' to='/architecture'>
                Architecture
              </Link>
              <Link className='nav-link' to='/about'>
                About Us
              </Link>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
              <Link className='nav-link' to='/references'>
                References
              </Link>
            </div>
          </div>
        </header>
      </div>
      <Outlet />
    </Fragment>
  );
}
