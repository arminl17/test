// Styles
import "../References/References.styles.scss";

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
        <p className='vert-text'>REFERENCES</p>
      </div>

      {/* MAIN PAGE */}
      <div className='page-container'>
        <div className='hero-container'>
          <img src={HeroImage} alt='' />
          <h1>Our</h1>
          <div className='text-container'>
            <div className='text-flex'>
              <span className='line'></span>
              <h3>References</h3>
              <p>Below is a list of our references</p>
            </div>
          </div>
        </div>

        <div className='references-container'>
          <div className='references-item'>
            <h3 className='references-title'>Vienna</h3>
            <ul>
              <li>
                1010 Wien, Liebenberggasse 7 - Zahnarztordination
                (Altstadtschutzzone) / Generalsanierung & Umbau / Planung & GU /
                2018
              </li>
              <li>
                1010 Wien, Mahlerstraße 5 - Altbauwohnung (Altstadtschutzzone) /
                Umbau / Statische Berechnungen / 2022
              </li>
              <li>
                1010 Wien, Mölker Bastei 10 - Altbauwohnung (Altstadtschutzzone)
                / Umbau / Statische Berechnungen / 2021
              </li>
              <li>
                1020 Wien, Adamsbergergasse 10 - Altbauwohnung / Umbau /
                Statische Berechnungen / 2022
              </li>
              <li>
                1030 Wien, Neulinggasse 28 - Zahnarztordination /
                Generalsanierung & Umbau / Planung & GU / 2021
              </li>
              <li>
                1040 Wien, Gogolgasse 43 - Familienhaus / Umbau / Statische
                Berechnungen / 2021
              </li>
              <li>
                1040 Wien, Große Neugasse 31 - Mehrfamilienhaus /
                Sanierungskonzept / Stellungnahme / 2021
              </li>
              <li>
                1040 Wien, Plößlgasse 13 - BFI - Berufsförderungsinstitut /
                Zubau / Statische Berechnungen / 2020
              </li>
              <li>
                1060 Wien, Bürgerspitalgasse 21 - Familienwohnung /
                Generalsanierung & Umbau / Planung & GU / 2019
              </li>
              <li>
                1060 Wien, Mariahilferstraße 61 - Zahnarztordination
                (Altstadtschutzzone) / Generalsanierung & Umbau / Planung & GU /
                2019
              </li>
              <li>
                1070 Wien, Burggasse 43-45 - Dachgeschossausbau / Zubau /
                Statische Berechnungen / 2016
              </li>
              <li>
                1070 Wien, Sigmundsgasse 3 - Altbauwohnung (Altstadtschutzzone)
                / Sanierung & Umbau / Planung & GU / 2020
              </li>
              <li>
                1070 Wien, Spitalgasse 1A - Geschäftslokal / Sanierung & Umbau /
                Statische Berechnungen / 2021
              </li>
              <li>
                1080 Wien, Pfeilgasse 43 - Familienwohnung / Sanierung & Umbau /
                Planung / 2017
              </li>
              <li>
                1090 Wien, Spitalgasse 1A - Geschäftslokal / Sanierung & Umbau /
                Statische Berechnungen / 2020
              </li>
              <li>
                1100 Wien, Buchengasse 58 - Mehrfamilienhaus/ Neubau / Statische
                Berechnungen / 2018-19
              </li>
              <li>
                1100 Wien, Franz Schrekergasse 22 - Familienhaus /
                Generalsanierung & Umbau / Planung & GU / 2018
              </li>
              <li>
                1100 Wien, Gudrunstraße 136 - Dachgeschossausbau / Zubau /
                Statische Berechnungen / 2016
              </li>
              <li>
                1100 Wien, Gudrunstraße 137-139 - Familienwohnung /
                Generalsanierung & Umbau / Planung & GU / 2019
              </li>
              <li>
                1100 Wien, Gudrunstraße 163 - Büro / Sanierung / Planung & GU /
                2021
              </li>
              <li>
                1100 Wien, Hasenöhrlstraße 45 - Familienhaus / Neubau /
                Statische Berechnungen / 2018-19
              </li>
              <li>
                1100 Wien, Herzgasse 63 - Mehrfamilienhaus / Neubau / Statische
                Berechnungen / 2016
              </li>
              <li>
                1100 Wien, Laxenburgerstraße 114 - Kleingartenhaus / Neubau /
                Planung / 2021
              </li>
              <li>
                1100 Wien, Simmeringer Hauptstraße 120 - Zahnarztordination /
                Generalsanierung & Umbau / Planung & GU / 2017
              </li>
              <li>
                1110 Wien, Csokorgasse 52-56 - Familienhaus / Sanierung /
                Planung & GU / 2022
              </li>
              <li>
                1120 Wien, Flurschützstraße 23 - Zahnarztordination /
                Generalsanierung & Umbau / Planung & GU / 2019
              </li>
              <li>
                1120 Wien, Niederhofstraße 39-41 - Dachterrasse / Umbau /
                Statische Berechnung / 2022
              </li>
              <li>
                1120 Wien, Schönbrunnerstraße 282 - Zahnarztordination /
                Sanierung & Umbau / Planung & GU/ 2020-21
              </li>
              <li>
                1130 Wien, Fasangartengasse 55 - Familienhaus / Generalsanierung
                & Umbau / Planung & GU / 2018
              </li>
              <li>
                1130 Wien, Hermesstrasse 1A - Altbauwohnung / Generalsanierung &
                Umbau / Planung & GU / 2022
              </li>
              <li>
                1130 Wien, Kupelwiesergasse 5 - Altbauwohnung / Generalsanierung
                & Umbau / Planung & GU / 2020
              </li>
              <li>
                1130 Wien, Lainzerstraße 84 - Restaurant / Umbau / Statische
                Berechnung / 2022
              </li>
              <li>
                1130 Wien, Versorgungsheimstraße 1 - Familienhaus / Umbau /
                Statische Berechnungen / 2017
              </li>
              <li>
                1140 Wien, Diesterweggasse 18 - Balkone im Hof / Zubau / Planung
                & GU / 2019
              </li>
              <li>
                1140 Wien, Felbigergasse 39 - Familienwohnung / Generalsanierung
                & Umbau / Planung & GU / 2021
              </li>
              <li>
                1140 Wien, Meiselstraße 62 - Dachgeschoss / Sanierung & Umbau /
                Statische Berechnungen / 2018
              </li>
              <li>
                1140 Wien, Mittlere Straße 10 - Familienhaus / Studie /
                Statische Berechnungen / 2022
              </li>
              <li>
                1150 Wien, Felbergasse 36 - Dachgeschossausbau / Zubau /
                Statische Berechnungen / 2016
              </li>
              <li>
                1150 Wien, Felbergasse 38 - Dachgeschossausbau / Zubau /
                Statische Berechnungen / 2016
              </li>
              <li>
                1150 Wien, Jurekgasse 23 - Altbauwohnung / Umbau / Statische
                Berechnungen / 2021
              </li>
              <li>
                1150 Wien, Pouthongasse 13 - Altbauwohnung / Generalsanierung &
                Umbau / Planung & GU / 2020
              </li>
              <li>
                1150 Wien, Rauchfangkehrergasse 32 - Blechhütte / Neubau /
                Statische Berechnungen / 2021-22
              </li>
              <li>
                1160 Wien, Abelegasse 2 - Mehrfamilienhaus / Nebau / Statische
                Berechnungen /2016
              </li>
              <li>
                1160 Wien, Römergasse 23 - Altbaugebäude /
                Instandhaltungskonzept / Statische Berechnungen / 2022
              </li>
              <li>
                1170 Wien, Dr. Josef Resch Platz 12 - Dachgeschoss Wohnung /
                Sanierung / Statische Berechnung / 2021
              </li>
              <li>
                1170 Wien, Lascygasse 24 - Familienwohnung / Sanierung /
                Statische Berechnung / 2021
              </li>
              <li>
                1170 Wien, Pezzlgasse 38 - Mehrfamilienhaus / Sanierungskonzept
                / Stellungnahme / 2021
              </li>
              <li>
                1180 Wien, Gersthoferstraße 63 - Kosmetikstudio
                (Altstadtschutzzone) / Sanierung & Umbau / Planung & GU / 2020
              </li>
              <li>
                1180 Wien, Schopenhauerstraße 9 - Altbaugebäude /
                Sanierungskonzept / Planung & GU / 2019
              </li>
              <li>
                1180 Wien, Währinger Gürtel 33 - Zahnarztordination /
                Generalsanierung & Umbau / Planung & GU / 2022
              </li>
              <li>
                1190 Wien, Himmelstraße 24 - Altbaugebäude / Umbau / Statische
                Berechnungen / 2022
              </li>
              <li>
                1190 Wien, Zierleitengasse 44 - Familienhaus / Umbau / Statische
                Berechnungen / 2019
              </li>
              <li>
                1200 Wien, Burghardtgasse 28 - Altbauwohnungen / Umbau /
                Statische Berechnungen / 2022
              </li>
              <li>
                1200 Wien, Dammstraße 10 - Altbauwohnung / Umbau / Statische
                Berechnungen / 2021
              </li>
              <li>
                1200 Wien, Hellwagstraße 4-8 - Hof des Gebäudes / Sanierung /
                Planung & GU / 2017
              </li>
              <li>
                1200 Wien, Wolfsaugasse 6 - Dachgeschossausbau / Sanierung &
                Zubau / Statische Berechnungen / 2021-22
              </li>
              <li>
                1210 Wien, Dahliengasse 2 - Kleingartenwohnhaus / Neubau /
                Statische Berechnungen / 2022
              </li>
              <li>
                1210 Wien, Marksteinergasse 13 - Bürohaus / Sanierungskonzept /
                Planung / 2018
              </li>
              <li>
                1210 Wien, Mengergasse 23 - Altbaugebäude /
                Instandhaltungskonzept / Statische Berechnungen / 2022
              </li>
              <li>
                1210 Wien, Ostmarkgasse 31 - Wohnung / Umbau / Statische
                Berechnung / 2022
              </li>
              <li>
                1230 Wien, Dirmhirngasse 112 - Fitness Center / Umbau /
                Generalplanung & GU / 2020-22
              </li>
              <li>
                1230 Wien, Genarrogagasse 3 - Familienhaus / Umbau / Statische
                Berechnungen / 2018
              </li>
              <li>
                1230 Wien, Konstanziagasse 3 - Familienhaus / Umbau / Statische
                Berechnungen / 2021
              </li>
              <li>
                1230 Wien, Lehmböckgasse 34 - Mehrfamilienhaus / Neubau /
                Statische Berechnungen / 2021
              </li>
            </ul>
            <h3 className='references-title'>Lower Austria</h3>
            <ul>
              <li>
                2301 Groß-Enzersdorf, Schlosshoferstraße 60 - Hotel /
                Sanierungskonzept / Planung / 2016
              </li>
              <li>
                2410 Hainburg an der Donau, Brunnenstraße 4 - Zwei
                Mehrfamilienhäuse / Neubau / Statische Berechnungen / 2017
              </li>
              <li>
                2483 Ebreichsdorf, Hans Czettel-Gasse 38 - Familienhaus / Umbau
                / Statische Berechnungen / 2022
              </li>
              <li>
                2542 Kottingbrunn, Renngasse 26 - Mehrfamilienhaus / Neubau /
                Statische Berechnungen / 2019
              </li>
              <li>
                3021 Pressbaum, Ludwig Kaiser-Straße 19 - Zahnarztordination /
                Generalsanierung & Umbau / Generalplanung & GU / 2021
              </li>
              <li>
                3107 St.Pölten, Ortweingasse 11 - Familienwohung /
                Generalsanierung & Umbau / Planung & GU / 2019
              </li>
            </ul>
            <h3 className='references-title'>Burgerland</h3>
            <ul>
              <li>
                2301 Groß-Enzersdorf, Schlosshoferstraße 60 - Hotel /
                Sanierungskonzept / Planung / 2016
              </li>
              <li>
                2410 Hainburg an der Donau, Brunnenstraße 4 - Zwei
                Mehrfamilienhäuse / Neubau / Statische Berechnungen / 2017
              </li>
              <li>
                2483 Ebreichsdorf, Hans Czettel-Gasse 38 - Familienhaus / Umbau
                / Statische Berechnungen / 2022
              </li>
              <li>
                2542 Kottingbrunn, Renngasse 26 - Mehrfamilienhaus / Neubau /
                Statische Berechnungen / 2019
              </li>
              <li>
                3021 Pressbaum, Ludwig Kaiser-Straße 19 - Zahnarztordination /
                Generalsanierung & Umbau / Generalplanung & GU / 2021
              </li>
              <li>
                3107 St.Pölten, Ortweingasse 11 - Familienwohung /
                Generalsanierung & Umbau / Planung & GU / 2019
              </li>
              <li>
                7021 Baumgarten, Pfarrwiesenweg 3 - Reihenhäuse / Nebau /
                Statische Berechnungen / 2019
              </li>
              <li>
                7411 Markt Allhau, Taborweg 8 - Familienhaus / Umbau / Planung &
                GU / 2017
              </li>
            </ul>
            <h3 className='references-title'>Germany</h3>
            <ul>
              <li>
                52351 Düren, Ursulinenstraße 16 - Mehrfamilienhaus / Nebau /
                Planung / 2016
              </li>
            </ul>
            <h3 className='references-title'>Croatia</h3>
            <ul>
              <li>
                Insel Pag - Ferienhaus / Generalsanierung & Umbau / Planung & GU
                / 2019-20
              </li>
              <li>
                Insel Krk - Resort mit Villen und Apartments / Neubau /
                Machbarkeitstudie / 2022
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
