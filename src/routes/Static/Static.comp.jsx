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
        <p className='vert-text'>STATIK</p>
      </div>

      {/* MAIN PAGE */}
      <div className='page-container'>
        <div className='hero-container'>
          <img src={HeroImage} alt='' />
          <h1>Um</h1>
          <div className='text-container'>
            <div className='text-flex'>
              <span className='line'></span>
              <h3>Statik</h3>
              <p>
                Vom Einfamilienhaus über das Bürogebäude bis hin zur urbanen
                Wohnsiedlung – Tragwand bietet innovative Lösungen für
                Tragwerkskonzepte im Bau an.
              </p>
            </div>
          </div>
        </div>

        <div className='heritage-container'>
          <div className='text-container'>
            <span className='line'></span>
            <h3>Bestands- und Schadensgutachten</h3>
            <p>
              Ingenieurbefunde (Stufe 1 bis Stufe 3 gem. OIB-RL 1) Sofern
              gewünscht, können die für das Bauvorhaben erforderlichen
              Mauerwerks- und Bodengutachten mitübernommen werden
              <br></br>
              <br></br>
              Bestandsstatik - Bei fehlender Plandokumentation kümmern wir uns
              um den statischen Nachweis der Tragfähigkeit bestehender Objekte
              <br></br>
              <br></br>
              Gutachten bei Bauteil - oder Gebäudeschäden - Wir holen notwendige
              Gutachten bei altersbedingten Schäden bzw. Planungs- oder
              Ausführungsmängeln ein
              <br />
              <br />
              Gebäudezustandsgutachten nach WEG §37 (4) - Für Immobilien, die
              älter als 20 Jahre sind, muss im Verkaufsfall ein Gutachten über
              die bautechnische Mängelfreiheit der allgemeinen Teile des
              Gebäudes vorgelegt werden.
            </p>
          </div>

          <img src={HeritageImage} alt='' />
        </div>

        <div className='heritage-container'>
          <img src={HeritageImage2} alt='' />
          <div className='text-container'>
            <span className='line'></span>
            <h3>
              Statik – Altbauten: Vom alten Gebäude bis zum Gründerzeitpalais
            </h3>
            <p>
              Machbarkeitsstudien
              <br></br>
              <br></br>
              Ingenieurbefunde (gem. OIB-RL1) und dazugehörige Mauerwerks- und
              Bodengutachten (in Zusammenarbeit mit Materialprüfungslabors) ​
              <br></br>
              <br></br>
              Risikoanalyse/Erdbebennachweise (gem. ÖNorm B 1998-3, Berechnung
              nach Kapazitätsmethode oder Push-Over-Verfahren/ 3D-Berechnung mit
              FEM-Programm 3muri/ingware) ​
              <br />
              <br />
              Bestandsstatiken
              <br />
              <br />
              Bauwerksbuch gem. §128a und §129 BO
            </p>
          </div>
        </div>

        <div className='heritage-container desktop'>
          <div className='text-container'>
            <span className='line'></span>
            <h3>
              Statik – Neubauten: Vom Einfamilienhaus bis zur Wohnhausanlage
            </h3>
            <p>
              Konstruktive Vorentwürfe – Unsere Ingenieure entwerfen das
              Tragwerkskonzept in Zusammenarbeit mit dem Bauherren
              <br></br>
              <br></br>
              Statische Vorbemessungen und Berechnungen – erfolgen im Rahmen des
              Baubewilligungsverfahrens gem. OIB-RL 1<br></br>
              <br></br>
              Gutachten für geringfügige Bauvorhaben gem. §63 (1) lit h BO
              <br />
              <br />
              Konstruktions- und Detailplanungen für Stahl- und
              Holzkonstruktionen <br />
              <br />
              Schalungs- und Bewehrungsplanungen für Massivbauten
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
