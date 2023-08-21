import { useState } from "react";

// Styles
import "../Contact/contact.styles.scss";

// Comps
import Footer from "../../comps/footer/footer.comp";
import Map from "../../comps/map/map.comp";

// Images
import HeroImage from "../../assets/contact/desktop/image-hero.jpg";
import Arrow from "../../assets/icons/icon-arrow.svg";
export default function Contact() {
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log([name, email, message]);
  };

  const nameHandler = (e) => {
    if (e.target.value == 0) {
      setFormError({ ...formError, name: "Name cannot be left blank." });
    } else {
      setFormError({ ...formError, name: "" });
    }
  };

  const emailHandler = (e) => {
    if (!e.target.value.includes("@" && ".")) {
      setFormError({ ...formError, email: "Email format is incorrect." });
    } else {
      setFormError({ ...formError, email: "" });
    }
  };

  const messageHandler = (e) => {
    if (e.target.value == 0) {
      setFormError({ ...formError, message: "Message cannot be left blank." });
    } else {
      setFormError({ ...formError, message: "" });
    }
  };

  const locations = {
    default: [48.212536078963, 16.362402293870637],
    Vienna: [48.212536078963, 16.362402293870637],
  };

  const [zoom, setZoom] = useState(12);

  const [mapCenter, setMapCenter] = useState(locations.default);

  const setLocation = (event) => {
    const coords = event.target.id;
    setMapCenter(locations[coords]);
    setZoom(17);
    //
    let Map = document.getElementById("map");
    Map.scrollIntoView({ block: "center" });
  };

  return (
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
              <p>
                We’d love to hear more about your project. Please, leave a
                message below or give us a call. We have office in Vienna If you
                find yourself nearby, come say hello!
              </p>
            </div>
          </div>
        </div>

        <div className='contact-details'>
          <span className='line'></span>

          <div className='contact-flex'>
            <h3>
              Contact<br></br>Details
            </h3>

            <div className='contact-sub'>
              <div>
                <h5>Office</h5>
                <p>Mail: office@tragwand.at</p>
                <p>Address: 1010 Vienna, Mölker Bastei 10/5</p>
                <p>Phone: +43 660 4181 693</p>
              </div>

              <div>
                <h6 onClick={setLocation} id='Vienna'>
                  View on Map
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}

        <Map id='map' locations={locations} mapCenter={mapCenter} zoom={zoom} />

        {/* Form */}
        {/* <div className='form-section-container'>
          <h3>
            Connect<br></br>with us
          </h3>

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
                required
              ></input>
            </div>

            <button type='submit'>
              <img src={Arrow} />
            </button>
          </form>
        </div> */}
      </div>{" "}
      {/* End of Page Container*/}
      <Footer />
    </div>
  );
}
