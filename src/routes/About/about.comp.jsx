// Styles
import "../About/about.styles.scss";

//  Comps
import Footer from "../../comps/footer/footer.comp";

// Images
import HeroImage from "../../assets/about/hero.webp";
import HeritageImage from "../../assets/about/about2.webp";
import Jake from "../../assets/about/aboutFounder.webp";
import Thompson from "../../assets/about/desktop/avatar-thompson.jpg";
import Jackson from "../../assets/about/desktop/avatar-jackson.jpg";
import Maria from "../../assets/about/desktop/avatar-maria.jpg";
import LinkedIn from "../../assets/icons/icon-linkedin.svg";
import Twitter from "../../assets/icons/icon-twitter.svg";

export default function About() {
  return (
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
              <p>
                We are an experienced team of experts who, thanks to many years
                of experience and innovative solutions in construction, make
                Austria (focus on Vienna and Lower Austria) a better place to
                live and work.
              </p>
            </div>
          </div>
        </div>

        <div className='heritage-container'>
          <div className='text-container'>
            <span className='line'></span>
            <h3>
              Our <br></br>Heritage
            </h3>
            <p>
              The TRAGWAND e.U. company was founded in June 2016 in the form of
              a sole proprietorship. Over time, it grew into TRAGWAND GmbH, a
              new business form.
              <br></br>
              <br></br>
              Our aim is to be able to offer economical, but also sustainable
              and innovative solutions for construction projects.
              <br></br>
              <br></br>
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </div>

          <img src={HeritageImage} alt='' />
        </div>

        <div className='leaders-container'>
          <h3>
            The<br></br>Leaders
          </h3>

          <div className='tile-container'>
            <div className='tile'>
              <div className='image-container'>
                <img className='avatar' src={Jake} alt='Jake' />
                <div className='icon-container'>
                  <img className='linkedin' src={LinkedIn} alt='linkedin' />
                  <img className='twitter' src={Twitter} alt='twitter' />
                </div>
              </div>

              <h4>Name & Surname</h4>
              <p>Chief Architect</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
