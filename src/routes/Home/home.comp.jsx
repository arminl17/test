import { useState } from "react";
import { Link } from "react-router-dom";
import "../Home/home.styles.scss";

// Comps
import Footer from "../../comps/footer/footer.comp";

// Images
import heroImage1 from "../../assets/static/slider1.webp";
import heroImage2 from "../../assets/static/slider2.webp";
import heroImage3 from "../../assets/static/slider3.webp";
import heroImage4 from "../../assets/static/slider4.webp";
// import heroImage2 from '../../assets/home/desktop/image-hero-seraph.jpg';
// import heroImage3 from '../../assets/home/desktop/image-hero-federal.jpg';
// import heroImage4 from '../../assets/home/desktop/image-hero-trinity.jpg';
import iconArrow from "../../assets/icons/icon-arrow.svg";
import welcomeImage from "../../assets/home/desktop/image-welcome.jpg";

export default function Home() {
  const heroData = {
    paramour: {
      header: "We do architecture and static for you!",
      description:
        "The creation of attractive and urban living or working space, combined with the competent planning, management and monitoring of the project.",
      image: heroImage1,
    },
    seraph: {
      header: "We do architecture and static for you!",
      description:
        "From a family home to an office building to an urban housing estate TRAGWAND offers innovative solutions for structural concepts in construction.",
      image: heroImage2,
    },
    federal: {
      header: "We do architecture and static for you!",
      description:
        "Whether new construction, outbuilding or reconstruction – we make your project a better place. As an experienced Viennese team in the field of statics, architecture and renovation we not only bring the necessary know-how, but at the same time efficient and sustainable solutions.",
      image: heroImage3,
    },
    trinity: {
      header: "Check more of our work",
      description: "",
      image: heroImage4,
    },
  };

  const [heroImage, setHeroImage] = useState(heroData.paramour.image);
  const [heroDataHeader, setHeroDataHeader] = useState(
    heroData.paramour.header
  );
  const [heroDataDescription, setHeroDataDescription] = useState(
    heroData.paramour.description
  );

  const carouselHandler = (event) => {
    // Sets Hero Data
    let i = event.target.id;
    setHeroDataHeader(heroData[i].header);
    setHeroDataDescription(heroData[i].description);
    setHeroImage(heroData[i].image);
    // Button Styling
    var buttons = document.getElementsByClassName("carousel-button");
    for (var e = 0; e < buttons.length; e++) {
      buttons[e].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  };

  return (
    <div>
      {/* VERTICAL TEXT */}
      <div className='vert-container'>
        <span className='vert-line'></span>
        <p className='vert-text'>HOME</p>
      </div>

      <div className='page-container'>
        {/* HERO SECTION */}
        <div className='carousel-container'>
          <div className='hero-data'>
            <h1>{heroDataHeader}</h1>
            <p>{heroDataDescription}</p>

            <Link className='button-link' to='/contact'>
              <div className='button'>
                <h4>Contact us</h4>
                <img className='arrow-icon' src={iconArrow} />
              </div>
            </Link>
          </div>

          <img src={heroImage} className='hero-image' alt='hero image' />

          <div className='carousel-buttons'>
            <div className='button-container'>
              <span
                onClick={carouselHandler}
                className='carousel-button clicked'
                id='paramour'
                value='0'
              >
                01
              </span>

              <span
                onClick={carouselHandler}
                className='carousel-button'
                id='seraph'
                value='1'
              >
                02
              </span>

              <span
                onClick={carouselHandler}
                className='carousel-button'
                id='federal'
                value='2'
              >
                03
              </span>

              <span
                onClick={carouselHandler}
                className='carousel-button'
                id='trinity'
                value='3'
              >
                04
              </span>
            </div>
          </div>
        </div>
        {/* WELCOME SECTION */}
        <div className='welcome-section'>
          <div className='welcome-text-container'>
            <h3>Welcome to TRAGWAND GmbH</h3>
            <p>
              TRAGWAND GmbH is an independent company in the construction
              industry and real estate sector with an emphasis on the static,
              architecture and renovation.
              <br></br>
              <br></br>
              Our customers enjoy and benefit from our professional service and
              offers, from project handling to total takeover and complete
              project handling from a single source.
              <br></br>
              <br></br>
              We take over integrated planning and construction management as
              well as offer comprehensive support in all project phases.
            </p>
          </div>

          <img className='welcome-image' src={welcomeImage} alt='' />
        </div>
        {/* SMALL TEAMS */}
        <div className='small-team-container'>
          <div className='filter'>
            <h2>
              Small team, <br></br>big ideas
            </h2>

            <Link className='button-link' to='/about'>
              <div className='button'>
                <h4>About Us</h4>
                <img className='arrow-icon' src={iconArrow} />
              </div>
            </Link>
          </div>
        </div>
        {/* FEATURED */}
        {/* <div className='featured'>
          <div className='featured-title-flex'>
            <h3>Featured</h3>
            <Link className='button-link' to='/portfolio'>
              <div className='button'>
                <h4>See All</h4>
                <img className='arrow-icon' src={iconArrow} />
              </div>
            </Link>
          </div>

          <div className='featured-cards'>
            <div className='card' id='card1'>
              <div className='filter'>
                <div className='text-container'>
                  <h1>1</h1>
                  <h5>Project Del Sol</h5>
                  <Link className='button-link' to='/portfolio'>
                    <h6>View All Projects</h6>
                  </Link>
                </div>
              </div>
            </div>

            <div className='card' id='card2'>
              <div className='filter'>
                <h1>2</h1>
                <h5>228B Tower</h5>
                <Link className='button-link' to='/portfolio'>
                  <h6>View All Projects</h6>
                </Link>
              </div>
            </div>

            <div className='card' id='card3'>
              <div className='filter'>
                <h1>3</h1>
                <h5>Le Prototype</h5>
                <Link className='button-link' to='/portfolio'>
                  <h6>View All Projects</h6>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
