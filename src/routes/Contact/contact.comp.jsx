// Styles
import '../Contact/contact.styles.scss';

// Comps
import Footer from '../../comps/footer/footer.comp';

// Images
import HeroImage from '../../assets/contact/desktop/image-hero.jpg';
import Map from '../../assets/contact/desktop/image-map.png';
import Arrow from '../../assets/icons/icon-arrow.svg'
;
export default function Contact() {
    return(
      <div>
        {/* Vertical Text */}
        <div className='vert-container'>
          <span className='vert-line'></span>
          <p className='vert-text'>CONTACT</p>
        </div>

        <div className='page-container'>
        
          <div className='contact-hero-container'>
            <img src={HeroImage} alt='' />
            <h1>Contact</h1>
            <div className='text-container'>
              <div className='text-flex'>
                <span className='line'></span>
                <h3>Tell us about your project</h3>
                <p>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
              </div>
            </div>
          </div>
{/* Contact Section */}
          <div className='contact-details'>
              <span className='line'></span>

              <div className='contact-flex'>
                <h3>Contact<br></br>Details</h3>

                <div className='contact-sub'>
                  <h5>Main Office</h5>
                  <p>Mail: archone@mail.com</p>
                  <p>Address: 1892 Chenoweth Drive TN</p>
                  <p>Phone: 123-456-3451</p>

                  <div>
                    <h6>View on Map</h6>
                  </div>
                </div>

                <div className='contact-sub'>
                  <h5>Office II</h5>
                  <p>Mail: archtwo@mail.com</p>
                  <p>Address: 3399 Wines Lane TX</p>
                  <p>Phone: 832-123-4321</p>

                  <div>
                    <h6>View on Map</h6>
                  </div>
                </div>
                
            </div>


          </div> 
{/* Map */}
          <img className='map' src={Map}/>

          <div className='form-section-container'>
            <h3>Connect<br></br>with us</h3>

            <form>
              <input placeholder='Name'></input>
              <input placeholder='Email'></input>
              <input className='message' placeholder='Message'></input>
              <button>
                <img src={Arrow} />
              </button>
            </form>

          </div>

        </div> {/* End of Page Container*/}



      <Footer />
      </div>   
    )
  }
