// Dhura Mistry

import bannerImg from '../assests/images/banner1.svg'
import analysisImg from '../assests/images/analysis.svg'
const Home = () => {
  return (
    <div>
      <section id="banner" class="item-50 some">
        <div class="banner-left">
          <h1>
            Digital Marketing
            <span class="text-color"> that drives results</span>
          </h1>
          <p>
            We’re a creative technology lab that delivers groundbreaking
            experiences through web and mobile development, user experience
            design and innovative engineering services..
          </p>
          <a href="#contact.html" class="btn">
            contact us
          </a>
        </div>
        <div class="banner-right">
          <img src={bannerImg} alt="banner-image" />
        </div>
      </section>

      <section class="boxes">
        <div class="box">
          <i class="fas fa-chart-pie fa-4x"></i>
          <h3>Analytics</h3>
          <p>
            We provide analytics services for various stages in marketing and
            client gathering.
          </p>
        </div>
        <div class="box">
          <i class="fas fa-mobile fa-4x"></i>
          <h3>Store</h3>
          <p>
            We provide various services from consulting to providing various
            slef designed tools for marketing
          </p>
        </div>
        <div class="box">
          <i class="fas fa-cog fa-4x"></i>
          <h3>Development</h3>
          <p>
            We will solve challenges that other agencies can’t. We’ll adapt to
            your codebase and revitalize your code.
          </p>
        </div>
        <div class="box">
          <i class="fas fa-users fa-4x"></i>
          <h3>Users</h3>
          <p>
            Our agency helps clients reach their potential user target by using
            various tools and techologies for social media marketing
          </p>
        </div>
      </section>

      <section class="info">
        <img src={analysisImg} alt="" class="img-80" />
        <div class="banner-left">
          <h2>
            Your Business <span class="text-color"> on the Web</span>
          </h2>
          <p>
            We Helped AARP Uncover a New Digital Strategy for Their Target
            Market. We’re a full-stack firm that can help you from strategy to
            launch, and anywhere in between.{" "}
          </p>
          <a href="#" class="btn">
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
