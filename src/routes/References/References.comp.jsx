// Styles
import "../References/References.styles.scss";

//  Comps
import Footer from "../../comps/footer/footer.comp";

// Images
import HeroImage from "../../assets/architecture/img1.webp";
import HeritageImage from "../../assets/architecture/img2.webp";

const testArray = [
  { refName: "testReference", picture: HeritageImage },
  { refName: "testReference", picture: HeritageImage },
  { refName: "testReference", picture: HeritageImage },
  { refName: "testReference", picture: HeritageImage },
];

const listItems = [
  "1010 Wien, Liebenberggasse 7 - Zahnarztordination (Altstadtschutzzone) / Generalsanierung & Umbau / Planung & GU / 2018",
  "1010 Wien, Mahlerstraße 5 - Altbauwohnung (Altstadtschutzzone) / Umbau / Statische Berechnungen / 2022",
  "1010 Wien, Mölker Bastei 10 - Altbauwohnung (Altstadtschutzzone) / Umbau / Statische Berechnungen / 2021",
  "1020 Wien, Adamsbergergasse 10 - Altbauwohnung / Umbau / Statische Berechnungen / 2022",
  "1030 Wien, Neulinggasse 28 - Zahnarztordination / Generalsanierung & Umbau / Planung & GU / 2021",
  "1040 Wien, Gogolgasse 43 - Familienhaus / Umbau / Statische Berechnungen / 2021",
  "1040 Wien, Große Neugasse 31 - Mehrfamilienhaus / Sanierungskonzept / Stellungnahme / 2021",
  "1040 Wien, Plößlgasse 13 - BFI - Berufsförderungsinstitut / Zubau / Statische Berechnungen / 2020",
  "1060 Wien, Bürgerspitalgasse 21 - Familienwohnung / Generalsanierung & Umbau / Planung & GU / 2019",
  "1060 Wien, Mariahilferstraße 61 - Zahnarztordination (Altstadtschutzzone) / Generalsanierung & Umbau / Planung & GU / 2019",
  "1070 Wien, Burggasse 43-45 - Dachgeschossausbau / Zubau / Statische Berechnungen / 2016",
  "1070 Wien, Sigmundsgasse 3 - Altbauwohnung (Altstadtschutzzone) / Sanierung & Umbau / Planung & GU / 2020",
  "1070 Wien, Spitalgasse 1A - Geschäftslokal / Sanierung & Umbau / Statische Berechnungen / 2021",
  "1080 Wien, Pfeilgasse 43 - Familienwohnung / Sanierung & Umbau / Planung / 2017",
  "1090 Wien, Spitalgasse 1A - Geschäftslokal / Sanierung & Umbau / Statische Berechnungen / 2020",
  "1100 Wien, Buchengasse 58 - Mehrfamilienhaus/ Neubau / Statische Berechnungen / 2018-19",
  "1100 Wien, Franz Schrekergasse 22 - Familienhaus / Generalsanierung & Umbau / Planung & GU / 2018",
  "1100 Wien, Gudrunstraße 136 - Dachgeschossausbau / Zubau / Statische Berechnungen / 2016",
  "1100 Wien, Gudrunstraße 137-139 - Familienwohnung / Generalsanierung & Umbau / Planung & GU / 2019",
  "1100 Wien, Gudrunstraße 163 - Büro / Sanierung / Planung & GU / 2021",
  "1100 Wien, Hasenöhrlstraße 45 - Familienhaus / Neubau / Statische Berechnungen / 2018-19",
  "1100 Wien, Herzgasse 63 - Mehrfamilienhaus / Neubau / Statische Berechnungen / 2016",
  "1100 Wien, Laxenburgerstraße 114 - Kleingartenhaus / Neubau / Planung / 2021",
  "1100 Wien, Simmeringer Hauptstraße 120 - Zahnarztordination / Generalsanierung & Umbau / Planung & GU / 2017",
  "1110 Wien, Csokorgasse 52-56 - Familienhaus / Sanierung / Planung & GU / 2022",
  "1120 Wien, Flurschützstraße 23 - Zahnarztordination / Generalsanierung & Umbau / Planung & GU / 2019",
  "1120 Wien, Niederhofstraße 39-41 - Dachterrasse / Umbau / Statische Berechnung / 2022",
  "1120 Wien, Schönbrunnerstraße 282 - Zahnarztordination / Sanierung & Umbau / Planung & GU/ 2020-21",
  "1130 Wien, Fasangartengasse 55 - Familienhaus / Generalsanierung & Umbau / Planung & GU / 2018",
  "1130 Wien, Hermesstrasse 1A - Altbauwohnung / Generalsanierung & Umbau / Planung & GU / 2022",
  "1130 Wien, Kupelwiesergasse 5 - Altbauwohnung / Generalsanierung & Umbau / Planung & GU / 2020",
  "1130 Wien, Lainzerstraße 84 - Restaurant / Umbau / Statische Berechnung / 2022",
  "1130 Wien, Versorgungsheimstraße 1 - Familienhaus / Umbau / Statische Berechnungen / 2017",
  "1140 Wien, Diesterweggasse 18 - Balkone im Hof / Zubau / Planung & GU / 2019",
  "1140 Wien, Felbigergasse 39 - Familienwohnung / Generalsanierung & Umbau / Planung & GU / 2021",
  "1140 Wien, Meiselstraße 62 - Dachgeschoss / Sanierung & Umbau / Statische Berechnungen / 2018",
  "1140 Wien, Mittlere Straße 10 - Familienhaus / Studie / Statische Berechnungen / 2022",
  "1150 Wien, Felbergasse 36 - Dachgeschossausbau / Zubau / Statische Berechnungen / 2016",
  "1150 Wien, Felbergasse 38 - Dachgeschossausbau / Zubau / Statische Berechnungen / 2016",
  "1150 Wien, Jurekgasse 23 - Altbauwohnung / Umbau / Statische Berechnungen / 2021",
  "1150 Wien, Pouthongasse 13 - Altbauwohnung / Generalsanierung & Umbau / Planung & GU / 2020",
  "1150 Wien, Rauchfangkehrergasse 32 - Blechhütte / Neubau / Statische Berechnungen / 2021-22",
  "1160 Wien, Abelegasse 2 - Mehrfamilienhaus / Nebau / Statische Berechnungen /2016",
  "1160 Wien, Römergasse 23 - Altbaugebäude / Instandhaltungskonzept / Statische Berechnungen / 2022",
  "1170 Wien, Dr. Josef Resch Platz 12 - Dachgeschoss Wohnung / Sanierung / Statische Berechnung / 2021",
  "1170 Wien, Lascygasse 24 - Familienwohnung / Sanierung / Statische Berechnung / 2021",
  "1170 Wien, Pezzlgasse 38 - Mehrfamilienhaus / Sanierungskonzept / Stellungnahme / 2021",
  "1180 Wien, Gersthoferstraße 63 - Kosmetikstudio (Altstadtschutzzone) / Sanierung & Umbau / Planung & GU / 2020",
  "1180 Wien, Schopenhauerstraße 9 - Altbaugebäude / Sanierungskonzept / Planung & GU / 2019",
  "1180 Wien, Währinger Gürtel 33 - Zahnarztordination / Generalsanierung & Umbau / Planung & GU / 2022",
  "1190 Wien, Himmelstraße 24 - Altbaugebäude / Umbau / Statische Berechnungen / 2022",
  "1190 Wien, Zierleitengasse 44 - Familienhaus / Umbau / Statische Berechnungen / 2019",
  "1200 Wien, Burghardtgasse 28 - Altbauwohnungen / Umbau / Statische Berechnungen / 2022",
  "1200 Wien, Dammstraße 10 - Altbauwohnung / Umbau / Statische Berechnungen / 2021",
  "1200 Wien, Hellwagstraße 4-8 - Hof des Gebäudes / Sanierung / Planung & GU / 2017",
  "1200 Wien, Wolfsaugasse 6 - Dachgeschossausbau / Sanierung & Zubau / Statische Berechnungen / 2021-22",
  "1210 Wien, Dahliengasse 2 - Kleingartenwohnhaus / Neubau / Statische Berechnungen / 2022",
  "1210 Wien, Marksteinergasse 13 - Bürohaus / Sanierungskonzept / Planung / 2018",
  "1210 Wien, Mengergasse 23 - Altbaugebäude / Instandhaltungskonzept / Statische Berechnungen / 2022",
  "1210 Wien, Ostmarkgasse 31 - Wohnung / Umbau / Statische Berechnung / 2022",
  "1230 Wien, Dirmhirngasse 112 - Fitness Center / Umbau / Generalplanung & GU / 2020-22",
  "1230 Wien, Genarrogagasse 3 - Familienhaus / Umbau / Statische Berechnungen / 2018",
  "1230 Wien, Konstanziagasse 3 - Familienhaus / Umbau / Statische Berechnungen / 2021",
  "1230 Wien, Lehmböckgasse 34 - Mehrfamilienhaus / Neubau / Statische Berechnungen / 2021",
];

export default function Architecture() {
  const array = listItems.map((listItem) => ({
    refName: listItem,
    picture: HeritageImage,
  }));
  return (
    <div>
      {/*Vertical Text */}
      <div className='vert-container'>
        <span className='vert-line'></span>
        <p className='vert-text'>REFERENZEN</p>
      </div>

      {/* MAIN PAGE */}
      <div className='page-container'>
        <div className='hero-container'>
          <img src={HeroImage} alt='' />
          <h1>Unser</h1>
          <div className='text-container'>
            <div className='text-flex'>
              <span className='line'></span>
              <h3>Referenzen</h3>
            </div>
          </div>
        </div>
        <div className='references-container-new'>
          {array.map((reference) => (
            <div className='reference-card'>
              <img
                src={reference.picture}
                alt='reference picture'
                width={400}
                height={400}
                className='image'
              />
              <div class='middle'>
                <div class='text'>{reference.refName}</div>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
