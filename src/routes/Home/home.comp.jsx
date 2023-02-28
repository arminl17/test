import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home/home.styles.scss';

// Comps
import Footer from '../../comps/footer/footer.comp';

// Images
import heroImage1 from '../../assets/home/desktop/image-hero-paramour.jpg';
import heroImage2 from '../../assets/home/desktop/image-hero-seraph.jpg';
import heroImage3 from '../../assets/home/desktop/image-hero-federal.jpg';
import heroImage4 from '../../assets/home/desktop/image-hero-trinity.jpg';
import iconArrow from '../../assets/icons/icon-arrow.svg';
import welcomeImage from '../../assets/home/desktop/image-welcome.jpg';

export default function Home() {

    const heroData = {
        paramour: {
            header: "Project Paramour",
            description: "Project made for an art museum near Southwest London.  Project Paramour is a statement of bold, modern architecture.",
            image: heroImage1,
        },
        seraph: {
            header: "Seraph Station",
            description: "The Seraph Station project challenged us to design a unique station that would transport people through time.  The result is a fresh and futuristing model inspired by space stations.",
            image: heroImage2
        },
        federal: {
            header: "Federal II Tower",
            description: "A sequel theme project for a tower originally built in the 1800s.  We achieved this with a striking look of brutal minimalism with modern touches.",
            image: heroImage3
        },
        trinity: {
            header: "Trinity Bank Tower",
            description: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earchquake frequency.  For this project we used curves to blend design and stability to meet our objectives.",
            image: heroImage4
        }
    }

    const [heroImage, setHeroImage] = useState(heroData.paramour.image);
    const [heroDataHeader, setHeroDataHeader] = useState(heroData.paramour.header);
    const [heroDataDescription, setHeroDataDescription] = useState(heroData.paramour.description);

    const carouselHandler = (event) => {
        // Sets Hero Data
        let i = event.target.id;
        setHeroDataHeader(heroData[i].header);
        setHeroDataDescription(heroData[i].description);
        setHeroImage(heroData[i].image);
        // Button Styling
        var buttons = document.getElementsByClassName('carousel-button');
        for (var e = 0; e < buttons.length; e++) {
            buttons[e].classList.remove('clicked');
        }
        event.target.classList.add('clicked')
    }

    return(
        <div>
{/* VERTICAL TEXT */}
            <div className='vert-container'>
                <span className='vert-line'></span>
                <p className='vert-text'>HOME</p>
            </div>

            <div className='page-container'>

{/* HERO SECTION */}
                <div className='carousel-container'>
                    <div className='hero-data'>
                        <h1>{heroDataHeader}</h1>
                        <p>{heroDataDescription}</p>
                        
                        <Link className='button-link' to='/portfolio'>
                            <div className='button'>
                                <h4>See Our Portfolio</h4>
                                <img className='arrow-icon' src={iconArrow}/>
                            </div>
                        </Link>
                    </div>

                    <img src={heroImage} className='hero-image' alt='hero image'/>

                    <div className='carousel-buttons'>
                        <div className='button-container'>
                            <span 
                                onClick={carouselHandler} 
                                className='carousel-button clicked' 
                                id='paramour' 
                                value='0'
                            >01</span>

                            <span 
                                onClick={carouselHandler} 
                                className='carousel-button' 
                                id='seraph' 
                                value='1'
                            >02</span>

                            <span 
                                onClick={carouselHandler} 
                                className='carousel-button' 
                                id='federal' 
                                value='2'
                            >03</span>

                            <span
                                onClick={carouselHandler}
                                className='carousel-button'
                                id='trinity'
                                value='3'
                            >04</span>

                        </div>
                    </div>
                </div>
{/* WELCOME SECTION */}
                <div className='welcome-section'>
                    <h1>Welcome</h1>

                    <div className='welcome-text-container'>
                        <h3>Welcome to Arch Studio</h3>
                        <p>We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
                            <br></br>
                            <br></br>
                        Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
                            <br></br>
                            <br></br>
                        We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
                    </div>

                    <img className ='welcome-image' src={welcomeImage} alt=''/>
                </div>
{/* SMALL TEAMS */}
                <div className='small-team-container'>
                <div className='filter'>
                    <h2>Small team, <br></br>big ideas</h2>

                    <Link className='button-link' to='/about'>
                        <div className='button'>
                            <h4>About Us</h4>
                            <img className='arrow-icon' src={iconArrow}/>
                        </div>
                    </Link>
                </div>
                </div>
{/* FEATURED */}
                <div className='featured'>
                    <div className='featured-title-flex'>
                        <h3>Featured</h3>
                        <Link className='button-link' to='/portfolio'>
                            <div className='button'>
                                <h4>See All</h4>
                                <img className='arrow-icon' src={iconArrow}/>
                            </div>
                        </Link>
                    </div>

                    <div className='featured-cards'>
                        <div className='card' id='card1'>
                        <div className='filter'>
                            <div className='text-container'>
                                <h1>1</h1>
                                <h5>Project Del Sol</h5>
                                <Link className='button-link' to ='/portfolio'>
                                    <h6>View All Projects</h6>
                                </Link>
                            </div>
                        </div>
                        </div>

                        <div className='card' id='card2'>
                        <div className='filter'>
                            <h1>2</h1>
                            <h5>228B Tower</h5>
                            <Link className='button-link' to ='/portfolio'>
                                <h6>View All Projects</h6>
                            </Link>
                        </div>
                        </div>

                        <div className='card' id='card3'>
                        <div className='filter'>
                            <h1>3</h1>
                            <h5>Le Prototype</h5>
                            <Link className='button-link' to ='/portfolio'>
                                <h6>View All Projects</h6>
                            </Link>
                        </div>
                        </div>


                    </div>
                    
                </div>
            </div>
        <Footer />
        </div>
    )
}