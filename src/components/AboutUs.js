// Dhura Mistry

import aboutImg from '../assests/images/aboutUs.svg'
import dhuraImg from '../assests/images/TeamMember1.jpg'
import monicaImg from '../assests/images/monica.jpg'
import riswanaImg from '../assests/images/TeamMember5.jpeg'
import zamanImg from '../assests/images/zaman.jpeg'

const AboutUs = () => {
    return (
        <div>
        <section id="about-us" class="some">
            <div class="about-content padding-60">
                <div class="item-50">
                    <img src={aboutImg} alt="" class="img-80"/>
                    <div class="about-text">
                        <h2>We Are <span class="text-color">Making <br/>
                                Ideas Better </span> For Everyone</h2>
                        <p>Our Company incorporates different jobs and roles, each requiring contrasting skillsets and characteristics — though some do complement one another. Our roles includes SEO, Search Engine Marketing,Content Writing, Social Media Marketing.</p>
                        <a href="#" class="btn">Contact us</a>
                    </div>
                </div>
            </div>
            <div class="item-26">
                <div class="single-item">
                    <i class="far fa-file"></i>
                    <p>World leader in consulting
                        and finance</p>
                </div>
                <div class="single-item">
                    <i class="fas fa-code"></i>
                    <p>A focused team with a
                        specialized skill</p>
                </div>
                <div class="single-item">
                    <i class="fas fa-cog"></i>
                    <p>Trusted and professional
                        advisors for you</p>
                </div>
                <div class="single-item">
                    <i class="fas fa-external-link-square-alt"></i>
                    <p>Experience to give you a
                        better results</p>
                </div>
            </div>
    </section>

    

    <section id="team-member" class="some">
        <h2 class="padding-60">We Have <br/>
            <span class="text-color">Some Awesome</span> People
        </h2>
        
        <div class="item-26">
        <div class="imageCards">
                <figure>
                    <img src={zamanImg} alt=""/>
                    <figcaption>
                        <div class="t-text">
                            <h5>Zaman</h5>
                            <p>CEO</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div class="imageCards">
                <figure>
                    <img src={dhuraImg} alt=""/>
                    <figcaption>
                        <div class="t-text">
                            <h5>Dhura Mistry </h5>
                            <p>UI/UX Designer</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div class="imageCards">
                <figure>
                    <img src={monicaImg} alt=""/>
                    <figcaption>
                        <div class="t-text">
                            <h5>Sai Monica</h5>
                            <p>Web Developer</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div class="imageCards">
                <figure>
                    <img src={riswanaImg} alt=""/>
                    <figcaption>
                        <div class="t-text">
                            <h5>Riswana K Muhammed Kunju Rawther</h5>
                            <p>Content Creator</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>

        </div>
    )
  };
  
  export default AboutUs;