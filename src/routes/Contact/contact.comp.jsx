import { useState } from 'react';

// Styles
import '../Contact/contact.styles.scss';

// Comps
import Footer from '../../comps/footer/footer.comp';
import Map from '../../comps/map/map.comp';

// Images
import HeroImage from '../../assets/contact/desktop/image-hero.jpg';
import Arrow from '../../assets/icons/icon-arrow.svg'
;
export default function Contact() {

  const [formError, setFormError] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const message = event.target.message.value;

      console.log([name, email, message]);
    }

  const nameHandler = (e) => {
    if (e.target.value == 0) {
      setFormError({...formError, name: 'Name cannot be left blank.'})
    } else {
      setFormError({...formError, name: ''})
    }
  }

  const emailHandler = (e) => {
    if (!e.target.value.includes('@' && '.')) {
      setFormError({...formError, email: 'Email format is incorrect.'})
    } else {
      setFormError({...formError, email: ''})
    } 
  }

  const messageHandler = (e) => {
    if (e.target.value == 0) {
      setFormError({...formError, message: 'Message cannot be left blank.'})
    } else {
      setFormError({...formError, message:''})
    }
  }

  const locations = {
    default: [40.34498, -74.66487],
    NYoffice: [40.73526, -73.99236],
    PHLoffice: [39.94940, -75.16569]
  }

  const [zoom, setZoom] = useState(8)

  const [mapCenter, setMapCenter] = useState(locations.default);

  const setLocation = (event) => {
      const coords = event.target.id;
      setMapCenter(locations[coords])
      setZoom(17)
      //
      let Map = document.getElementById('map');
      Map.scrollIntoView(false);
  }
  
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

          <div className='contact-details'>
              <span className='line'></span>

              <div className='contact-flex'>
                <h3>Contact<br></br>Details</h3>

                <div className='contact-sub'>
                  <div>
                    <h5>Main Office</h5>
                    <p>Mail: archone@mail.com</p>
                    <p>Address: 28 East 14th Street NYC</p>
                    <p>Phone: 123-456-3451</p>
                  </div>

                  <div>
                    <h6 onClick={setLocation} id='NYoffice'>View on Map</h6>
                  </div>
                </div>

                <div className='contact-sub'>
                  <div>
                    <h5>Office II</h5>
                    <p>Mail: archtwo@mail.com</p>
                    <p>Address: 1426 Walnut Street PHL</p>
                    <p>Phone: 832-123-4321</p>
                  </div>

                  <div>
                    <h6 onClick={setLocation} id='PHLoffice'>View on Map</h6>
                  </div>
                </div>
            </div>
          </div> 

{/* Map */}

          <Map
            id='map' 
            locations={locations}
            mapCenter={mapCenter}
            zoom={zoom}
          />

{/* Form */}
          <div className='form-section-container'>
            <h3>Connect<br></br>with us</h3>

            <form onSubmit={submitForm}>
              <div className='input-container'>
                <label>{formError.name}</label>
                <input 
                onChange={nameHandler}
                type='text'
                name='name'
                id='name' 
                placeholder='Name' 
                required
                ></input>
              </div>
              
              <div className='input-container'>
                <label>{formError.email}</label>
                <input 
                onChange={emailHandler}
                type='text' 
                name='email' 
                placeholder='Email' 
                required
                ></input>
              </div>
              
              <div className='input-container'>
                <label>{formError.message}</label>
                <input 
                  onChange={messageHandler}
                  type='text' 
                  name='message' 
                  className='message' 
                  placeholder='Message'
                  required>
                </input>
              </div>
              

              <button type='submit'>
                <img src={Arrow} />
              </button>
            </form>

          </div>

        </div> {/* End of Page Container*/}

      <Footer />
      </div>   
    )
  }



  /*
  TO-DO:
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email` or `Message` fields are empty should show "Can't be empty"
  - The `Email` is not formatted correctly should show "Please use a valid email address"

- **Bonus**: View actual locations on the contact page map. The addresses we have on 
the design are fictional, so you'll need to add real addresses for this bonus task.

⚠️ **IMPORTANT** ⚠️: If you choose to do the bonus part of the challenge and use a mapping API,
 we recommend using [LeafletJS](https://leafletjs.com/). It's free to use and doesn't require an 
 API Key. If you decide to use another API, like Google Maps or Mapbox, be sure to secure your 
 API Key. Here are guides for both Google Maps and Mapbox, be sure to read through them thoroughly:

  */
