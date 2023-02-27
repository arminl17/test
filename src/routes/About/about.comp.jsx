import { useState } from 'react';
 
// Styles
import '../About/about.styles.scss';

//  Comps
import Footer from '../../comps/footer/footer.comp';

// Images
import HeroImage from '../../assets/about/desktop/image-hero.jpg';
import HeritageImage from '../../assets/about/desktop/image-heritage.jpg';
import Jake from '../../assets/about/desktop/avatar-jake.jpg';
import Thompson from '../../assets/about/desktop/avatar-thompson.jpg';
import Jackson from '../../assets/about/desktop/avatar-jackson.jpg';
import Maria from '../../assets/about/desktop/avatar-maria.jpg';
import LinkedIn from '../../assets/icons/icon-linkedin.svg';
import Twitter from '../../assets/icons/icon-twitter.svg';

export default function About() {
  
  return(
    <div>
{/*Vertical Text */}
      <div className='vert-container'>
        <span className='vert-line'></span>
        <p className='vert-text'>ABOUT US</p>
      </div>

{/* MAIN PAGE */}
      <div className='page-container'>
        
        <div className='hero-container'>
          <img src={HeroImage} alt='' />
          <h1>About</h1>
          <div className='text-container'>
            <div className='text-flex'>
              <span className='line'></span>
              <h3>Your team of professionals</h3>
              <p>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
            </div>
          </div>
        </div>

        <div className='heritage-container'>
          <div className='text-container'>
            <span className='line'></span>
            <h3>Our <br></br>Heritage</h3>
            <p>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
              <br></br>
              <br></br>
              Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
              <br></br>
              <br></br>
              Our small team of world-class professionals provides input on every project.
            </p>
          </div>

          <img src={HeritageImage} alt=''/>
        </div>

        <div className='leaders-container'>
          <h3>The<br></br>Leaders</h3>

          <div className='tile-container'>

            <div className='tile'>
            <div className='image-container'>
                <img className='avatar' src={Jake} alt='Jake' />
                <div className='icon-container'>
                  <img className='linkedin' src={LinkedIn} alt='linkedin'/>
                  <img className='twitter' src={Twitter} alt='twitter'/>
                </div>
              </div>
              
              <h4>Jake Richards</h4>
              <p>Chief Architect</p>
            </div>

            <div className='tile'>
              <div className='image-container'>
                <img className='avatar' src={Thompson} alt='Thompson' />
                <div className='icon-container'>
                  <img className='linkedin' src={LinkedIn} alt='linkedin'/>
                  <img className='twitter' src={Twitter} alt='twitter'/>
                </div>
              </div>
              
              <h4>Thompson Smith</h4>
              <p>Head of Finance</p>
            </div>

            <div className='tile'>
            <div className='image-container'>
                <img className='avatar' src={Jackson} alt='Jackson' />
                <div className='icon-container'>
                  <img className='linkedin' src={LinkedIn} alt='linkedin'/>
                  <img className='twitter' src={Twitter} alt='twitter'/>
                </div>
              </div>

              <h4>Jackson Rourke</h4>
              <p>Lead Designer</p>
            </div>

            <div className='tile'>
            <div className='image-container'>
                <img className='avatar' src={Maria} alt='Maria' />
                <div className='icon-container'>
                  <img className='linkedin' src={LinkedIn} alt='linkedin'/>
                  <img className='twitter' src={Twitter} alt='twitter'/>
                </div>
              </div>

              <h4>Maria Simpson</h4>
              <p>Senior Architect</p>
            </div>
          </div>
        </div>
        


      </div>


{/* FOOTER */}
      <Footer />
    </div>
  )
}

/* About Us

  Portfolio
  About Us
  Contact

  About

  Your team of professionals

  Our small team of world-class professionals will work with you every step of the way. 
  Strong relationships are at the core of everything we do. This extends to the 
  relationship our projects have with their surroundings.

  Our Heritage

  Founded in 2007, we started as a trio of architects. Our complimentary skills and 
  relentless attention to detail turned Arch into one of the most sought after boutique 
  firms in the country.

  Speciliazing in Urban Design allowed us to focus on creating exceptional structures that 
  live in harmony with their surroundings. We consider every detail from every surrounding 
  element to inform our designs. 

  Our small team of world-class professionals provides input on every project.

  The Leaders

  Jake Richards
  Chief Architect

  Thompson Smith
  Head of Finance

  Jackson Rourke
  Lead Designer

  Maria Simpson
  Senior Architect

  Portfolio
  About Us
  Contact

  See Our Portfolio
 */