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
        <p className='vert-text'>ARCHITEKTUR</p>
      </div>

      {/* MAIN PAGE */}
      <div className='page-container'>
        <div className='hero-container'>
          <img src={HeroImage} alt='' />
          <h1>Um</h1>
          <div className='text-container'>
            <div className='text-flex'>
              <span className='line'></span>
              <h3>Architektur</h3>
              <p>
                Die Schaffung von attraktivem und urbanem Lebens- bzw.
                Arbeitsraum, kombiniert mit kompetenter Planung, Steuerung und
                Überwachung des Projekts.
              </p>
            </div>
          </div>
        </div>

        <div className='heritage-container mobileview'>
          <div className='text-container'>
            <span className='line'></span>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              Einreichplanung, Einreichplanung, Ausführungsplanung,
              Leistungsvergabe, Begleitende Kontrolle, Baustellenkoordin
              <br></br>
            </h3>
            <p>
              Erstellen einen bewilligungsfähigen Einreichplan- Bauanzeigeplan
              für Ihr Projekt, holen gegebenenfalls Beilagen ein und fungieren
              als Vertretung in Behördenverfahren. Erstellen einen
              bewilligungsfähigen Einreichplan- Bauanzeigeplan für Ihr Projekt,
              holen gegebenenfalls Beilagen ein und fungieren als Vertretung in
              Behördenverfahren. Generieren Polierpläne und Leitdetails für die
              anschließende Ausführung. Stellen Leistungsverzeichnisse oder
              Leistungs-beschreibungen auf, führen Vergabeverhandlungen durch
              und kümmern uns um allfällige anfallende Tätigkeiten. ​ übernehmen
              die Funktion als Bauherrnvertretung oder Projektleiter im Sinne
              des Bauarbeiten- koordinationsgesetzes und leisten die
              Planungskoordination fungieren als Bauberatung, Bauüberwachung und
              kümmern uns um die Organisation der Bauabwicklung.
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
              Wir tun <br></br>
            </h3>
            <p>
              <li>Einfamilienhäuser</li>
              <li>Mehrfamilienhäuser</li>
              <li>Um- und Zubauten</li>
              <li>Dachgeschoßausbauten</li>
              <li>Wohn- und Bürobauten</li>
              <li>Gewerbe- und Industriebauten</li>
              <li>Sonderbauten</li>
              <li>Gastronomie</li>
              <li>Machbarkeitsstudien</li>
              <li>Wettbewerbe</li>
              <li>Grundlagenermittlung</li>
              <li>Vorentwurf</li>
              <li>Entwurf</li>
              <li>Visualisierungen</li>
              <li>Digitalisierung der architektonischen Pläne</li>
              <li>Freiraumgestaltung</li>
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
