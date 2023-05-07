// Riswana

import blog1Client from "../assests/images/blog-1.svg";
import blog1Img from "../assests/images/blog-2.svg";
import blog2Client from "../assests/images/client-1.svg";
import blog2Img from "../assests/images/graphic1.png";

const OurBlog = () => {
  return (
    <div>
      <section id="blog" class="some">
        <h2 class="padding-60">
          Our Latest
          <span class="text-color">
            Blogs <br />
            Will Keep
          </span>
          Everyone Updated
        </h2>

        <div class="item-50">
          <div class="b-signle-item mr-25">
            <div class="b-single-item-top">
              <div class="b-single-item-top-content">
                <h6 class="text-color">Google Ads</h6>
                <h3>
                  Boost your website SEO to get in top search results
                </h3>
              </div>
              <img src={blog1Client} alt="" />
            </div>

            <div class="b-single-item-bottom">
              <img src={blog1Img} alt="" />
              <div class="b-single-item-bottom-content">
                <h5>Clemont Leblanc</h5>
                <div class="b-pain">
                  <span>January 25, 2021</span> <i class="fas fa-circle"></i>
                  <span>5 min Read</span>
                </div>
              </div>
            </div>
          </div>

          <div class="b-signle-item">
            <div class="b-single-item-top">
              <div class="b-single-item-top-content">
                <h6 class="text-color">Graphic Design</h6>
                <h3>
                  35 Stellar Graphic Design Blogs to Keep You Educated and
                  Inspired
                </h3>
              </div>
              <img src={blog2Img} alt="" />
            </div>

            <div class="b-single-item-bottom">
              <img src={blog2Client} alt="" />
              <div class="b-single-item-bottom-content">
                <h5>Cristofer Westervelt</h5>
                <div class="b-pain">
                  <span>January 25, 2021</span> <i class="fas fa-circle"></i>
                  <span>5 min Read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBlog;
