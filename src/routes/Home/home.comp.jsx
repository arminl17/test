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
      header: "Wir erledigen Architektur und Statik für Sie!",
      description:
        "Die Schaffung von attraktivem und urbanem Lebens- bzw. Arbeitsraum, kombiniert mit kompetenter Planung, Steuerung und Überwachung des Projekts. Kleinere Sanierungs- und Bauprojekte übernehmen wir gerne auch als Generalplaner. In diesem Fall liegt die Projektabwicklung und -planung ganzheitlich bei uns. ",
      image: heroImage1,
    },
    seraph: {
      header: "Wir erledigen Architektur und Statik für Sie!",
      description:
        "Vom Einfamilienhaus über das Bürogebäude bis hin zur urbanen Wohnsiedlung – Tragwand bietet innovative Lösungen für Tragwerkskonzepte im Bau an. Ob Beton, Ziegel, Holz oder auch Stahl – wird sind in jedem Fall der richtige Ansprechpartner für die Durchführung der Statik Arbeiten",
      image: heroImage2,
    },
    federal: {
      header: "Wir erledigen Architektur und Statik für Sie!",
      description:
        "Für das Rund-Um-Wohlgefühl im Wohn-/Arbeitsraum: Das Gefühl für Ästhetik, die Fingerfertigkeit unserer Profis, der perfekte Workflow - so gestalten wir Wohnräume. Wir sind erster Ansprechpartner für Sanierung in Perfektion sowie außergewöhnliche und hoch spezialisierte Innenausbau- lösungen im Großraum Wien und Umgebung. Höchste Qualität, persönliche Betreuung und maximale Flexibilität sind uns sehr wichtig, daher ist unser Unternehmen so strukturiert, dass alle Abläufe schnell und unkompliziert durchgeführt werden können.",
      image: heroImage3,
    },
    trinity: {
      header: "Sehen Sie sich mehr von unserer Arbeit an",
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
        <p className='vert-text'>TRAGWAND GmbH</p>
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
            <h3>Willkommen zu TRAGWAND GmbH</h3>
            <p>
              TRAGWAND GmbH ist ein Unternehmen in der Bau- und
              Immobilienbranche, mit Schwerpunkt Projektentwicklung samt
              Erbringung von Verwaltungs-, Planungs- und Ingenieurleistungen.
              Wir sind ein motiviertes, innovatives und ehrgeiziges Team von
              Bauingenieuren und Architekten, welches langjährigen Erfahrung in
              der Baubranche vorweisen kann.
              <br></br>
              <br></br>
              So haben wir bereits zahlreiche Bauvorhaben für Bauträger, private
              Auftraggeber, Hausverwaltungen erfolgreich mehrere Projekte
              geliefert und abgewickelt. Von den Projektabwicklungen bis der
              Totalübernahme aus einer Hand. Wir bieten eine umfassende
              Betreuung in allen Projektphasen und übernehmen das Planungs-,
              Ausführungs- und Baumanagement ganzheitlich.
              <br></br>
              <br></br>
              Unsere einzigartige Expertise, Erfahrungen und Wissen macht uns
              der zum richtigen Ansprechpartner für Sie, besonders dann wenn
              beständige Qualität sowie herausragende Leistung gefordert sind.
            </p>
          </div>

          <img className='welcome-image' src={welcomeImage} alt='' />
        </div>
        {/* SMALL TEAMS */}
        <div className='small-team-container'>
          <div className='filter'>
            <h2>Kleines Team, große Ideen</h2>

            <Link className='button-link' to='/about'>
              <div className='button'>
                <h4>Über uns</h4>
                <img className='arrow-icon' src={iconArrow} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
