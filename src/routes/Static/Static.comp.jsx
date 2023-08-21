// Styles
import "../Static/static.styles.scss";

//  Comps
import Footer from "../../comps/footer/footer.comp";

// Images
import HeroImage from "../../assets/staticPage/img1.webp";
import HeritageImage from "../../assets/staticPage/img2.webp";
import HeritageImage2 from "../../assets/staticPage/img3.webp";
import HeritageImage3 from "../../assets/about/hero.webp";
import Jake from "../../assets/about/aboutFounder.webp";
import LinkedIn from "../../assets/icons/icon-linkedin.svg";
import Twitter from "../../assets/icons/icon-twitter.svg";

export default function Static() {
  return (
    <div>
      {/*Vertical Text */}
      <div className='vert-container'>
        <span className='vert-line'></span>
        <p className='vert-text'>STATIC</p>
      </div>

      {/* MAIN PAGE */}
      <div className='page-container'>
        <div className='hero-container'>
          <img src={HeroImage} alt='' />
          <h1>About</h1>
          <div className='text-container'>
            <div className='text-flex'>
              <span className='line'></span>
              <h3>Static</h3>
              <p>
                From a family home to an office building to an urban housing
                estate TRAGWAND offers innovative solutions for structural
                concepts in construction.
              </p>
            </div>
          </div>
        </div>

        <div className='heritage-container'>
          <div className='text-container'>
            <span className='line'></span>
            <h3>
              Inventory and <br></br>damage reports
            </h3>
            <p>
              Engineering findings (level 1 to level 3 according to OIB-RL 1) If
              required, the masonry and floor reports required for the
              construction project can be taken over
              <br></br>
              <br></br>
              Inventory statistics – In the absence of planning documentation,we
              take care of the verification of the existing object's
              sustainability
              <br></br>
              <br></br>
              Expert reports for component or building damage - We obtain
              necessary expert reports for age-related damage or planning or
              execution defects
              <br />
              <br />
              Building's condition report according to WEG §37 (4) – for real
              estates that are older than 20 years , in case of a sale there has
              to be a condition report about the structural absence of
              deficiencies submitted
            </p>
          </div>

          <img src={HeritageImage} alt='' />
        </div>

        <div className='heritage-container'>
          <img src={HeritageImage2} alt='' />
          <div className='text-container'>
            <span className='line'></span>
            <h3>
              Statics – Old buildings <br></br> from old buildings to
              Wilhelminian style palace
            </h3>
            <p>
              Feasibility studies
              <br></br>
              <br></br>
              Engineering findings (in accordance with OIB-RL1) and associated
              masonry and floor reports (in cooperation with material testing
              laboratories)
              <br></br>
              <br></br>
              Risk analysis/earthquake evidence (according to ÖNorm B 1998-3,
              calculation according to the capacity method or push-over method /
              3D calculation with FEM program 3muri / ingware)
              <br />
              <br />
              Inventory statistics
              <br />
              <br />
              Building/construction book according to §128a and §129 BO
            </p>
          </div>
        </div>

        <div className='heritage-container'>
          <div className='text-container'>
            <span className='line'></span>
            <h3>
              Static – new buldings; <br></br> single family home to residental
              complex
            </h3>
            <p>
              Constructive preliminary designs – our engineers create a design
              concept in coorporation with the client
              <br></br>
              <br></br>
              Static preliminary measurements and calculations – are carried out
              as a part of the bulding permit procedure according to OIB-RL 1 ​
              <br></br>
              <br></br>
              Expert opinion on minor construction projects acc. §63 (1) lit h
              BO
              <br />
              <br />
              Construction and detailed planning of steel and wood structures ​
              <br />
              <br />
              Formwork and reinforcement planning for solid structures
            </p>
          </div>

          <img src={HeroImage} alt='' />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
