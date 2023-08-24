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
        <p className='vert-text'>ÜBER UNS</p>
      </div>

      {/* MAIN PAGE */}
      <div className='page-container'>
        <div className='hero-container'>
          <img src={HeroImage} alt='' />
          <h1>Um</h1>
          <div className='text-container'>
            <div className='text-flex'>
              <span className='line'></span>
              <h3>Ihr Team aus Profis</h3>
              <p>
                Wir sind ein erfahrenes Expertenteam, das durch langjährige
                Erfahrung und innovative Lösungsansätze im Bau, Österreich
                (Schwerpunkt Wien und Niederösterreich) zu einem besseren
                Wohn-/Arbeitsort macht. In Kooperation mit unserem beständigen
                Netzwerk, bestehend aus ausgewählten Fachleuten, betreuen wir
                mit Hingabe und Expertise die uns anvertrauten Bauprojekte.
                Dadurch ist es uns auch möglich sowohl Klein- als auch
                Großprojekte zu übernehmen.
              </p>
            </div>
          </div>
        </div>

        <div className='heritage-container mobileview'>
          <div className='text-container'>
            <span className='line'></span>
            <h3>Unser Erbe</h3>
            <p>
              Das erste Unternehmen TRAGWAND e.U. wurde im Juli 2016 in Form
              eines Einzelunternehmens gegründet. Im Laufe der Zeit entwickelte
              sich das Unternehmen zu einer neuen Rechtsform TRAGWAND GmbH.
              <br></br>
              <br></br>
              Unser Anspruch ist es, wirtschaftliche aber auch nachhaltige und
              innovative Lösungen für Bauprojekte anbieten zu können.
              <br></br>
              <br></br>
              Als erfahrenes Wiener Team in den Bereichen Statik, Architektur
              und Sanierung bringen wir nicht nur das nötige Know-How mit,
              sondern gleichzeitig qualitativ hochwertige Leistungen,
              individuelle Betreuung und einen hohen Grad an Flexibilität.
              <br />
              Sofern gewünscht, begleiten wir Ihr Projekt von der Ideenfindung
              und Planung bis hin zur schlüsselfertigen Übergabe. Alles aus
              einer Hand – Standortbewertung, Beweissicherung vor Baubeginn,
              Entwurf, Statik / statische Berechnungen / statische
              Ausführungsplanungen, bauphysikalische Berechnungen,
              Einreichpläne, innenarchitektonische Beratungen,
              Tragwerkskonzepte, Bauschadensgutachten, usw.
            </p>
          </div>

          <img src={HeritageImage} alt='' />
        </div>

        <div className='leaders-container mobile'>
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
