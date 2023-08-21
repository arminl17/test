// Styles
import "../Architecture/architecture.styles.scss";

//  Comps
import Footer from "../../comps/footer/footer.comp";

// Images
import HeroImage from "../../assets/architecture/img1.webp";
import HeritageImage from "../../assets/architecture/img2.webp";

export default function Architecture() {
  return (
    <div>
      {/*Vertical Text */}
      <div className='vert-container'>
        <span className='vert-line'></span>
        <p className='vert-text'>ARCHITECTURE</p>
      </div>

      {/* MAIN PAGE */}
      <div className='page-container'>
        <div className='hero-container'>
          <img src={HeroImage} alt='' />
          <h1>About</h1>
          <div className='text-container'>
            <div className='text-flex'>
              <span className='line'></span>
              <h3>Architecture</h3>
              <p>
                The creation of attractive and urban living or working space,
                combined with the competent planning, management and monitoring
                of the project.
              </p>
            </div>
          </div>
        </div>

        <div className='heritage-container mobileview'>
          <div className='text-container'>
            <span className='line'></span>
            <h3>
              Submission planning <br></br>
            </h3>
            <p>
              A compilation and evaluation of relevant information about laws,
              standards, properties and similar is essential even before ideas
              of a project or before purchase of a real estate or a property.
              Being esential, that kind of service is done by us with absolute
              diligence.
              <br></br>
              <br></br>
            </p>
          </div>

          <img src={HeritageImage} alt='' />
        </div>

        <div className='heritage-container'>
          <img src={HeritageImage} alt='' />
          <div className='text-container'>
            <span className='line'></span>
            <h3>
              We do <br></br>
            </h3>
            <p>
              <li>Family houses</li> ​<li>Apartment buildings</li> ​
              <li>Modifications and additions</li> ​<li> Loft conversions</li> ​
              <li>Residental and office buildings</li> ​
              <li>Commercial and industrial buildings</li> ​
              <li>Special constructions</li> ​<li>Catering trade</li> ​
              <li>Feasibility studies</li> ​<li>Competitions</li> ​
              <li>Basic determination</li> ​<li>Preliminary draft</li> ​
              <li>Draft</li> ​​
              <li>Visualizations​</li> ​​
              <li> Digitization of the architectural plans</li> ​​
              <li>Open space design</li> ​​
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
