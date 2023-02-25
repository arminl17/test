import Footer from '../../comps/footer/footer.comp';
import Data from '../../portfolio-data.json';

export default function Portfolio() {
  console.log(Data);

  return(
    <div>
      <div className='page-container'>
        <h1>Portfolio</h1>
      </div>

      <div className='vert-container'>
        <span className='vert-line'></span>
        <p className='vert-text'>PORTFOLIO</p>
      </div>

      <Footer />
    </div>
  )
}

/* Portfolio

  Portfolio
  About Us
  Contact

  Seraph Station
  September 2019

  Eebox Building
  August 2017

  Federal II Tower
  March 2017

  Project Del Sol
  January 2016

  Le Prototype
  October 2015

  228B Tower
  April 2015

  Grand Edelweiss Hotel
  December 2013

  Netcry Tower
  August 2012

  Hypers
  January 2012

  SXIV Tower
  March 2011

  Trinity Bank Tower
  September 2010

  Project Paramour
  February 2008

  Portfolio
  About Us
  Contact

  See Our Portfolio */