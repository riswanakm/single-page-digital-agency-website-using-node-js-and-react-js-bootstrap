// Sai Monica

import contactImg from "../assests/images/contact.svg";

const ContactUs = () => {
  return (
    <div>
      <section id="contact" class="some">
        <h2>
          Our Latest
          <span class="text-color">
            Blogs <br />
            Will Keep
          </span>
          Everyone Updated
        </h2>
        <div class="item-33 padding-60">
          <div class="c-signle-item">
            <div class="c-single-item-top">
              <i class="fas fa-envelope"></i>
              <div class="c-single-item-top-right">
                <p>drop a line</p>
                <h3>mail us</h3>
              </div>
            </div>

            <div class="c-single-item-bottom">
              <p>Support87@gmial.com</p>
              <p>ijkuiu874@gmial.com</p>
            </div>
          </div>

          <div class="c-signle-item">
            <div class="c-single-item-top">
              <i class="fas fa-envelope"></i>
              <div class="c-single-item-top-right">
                <p>24/7 Service</p>
                <h3>Call Us</h3>
              </div>
            </div>

            <div class="c-single-item-bottom">
              <p>
                +880 265 98745
                <span class="text-color" style={{ fontWeight: "600" }}>
                  (Toll Fee)
                </span>
              </p>
              <p>+895 855 85589</p>
            </div>
          </div>

          <div class="c-signle-item">
            <div class="c-single-item-top">
              <i class="fas fa-envelope"></i>
              <div class="c-single-item-top-right">
                <p>Location</p>
                <h3>Visit Us</h3>
              </div>
            </div>

            <div class="c-single-item-bottom">
              <p>
                158 ralegih sit, <br />
                houston, yk 5896,uk
              </p>
            </div>
          </div>
        </div>

        <div class="item-50" style={{ display: "flex", alignItems: "center" }}>
          <div class="c-left">
            <img src={contactImg} alt="" />
          </div>
          <div class="c-right">
            <h2 style={{ textAlign: "left", marginBottom: "20px" }}>
              Send Your <span class="text-color">Message To Us</span>
            </h2>
            <form action="">
              <div>
                <input type="text" name="name" id="name" placeholder="name" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  placeholder="Your phone number"
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <textarea
                name="message"
                id="message"
                cols="73"
                rows="10"
                placeholder="Send Message"
              ></textarea>
              <button type="submit" class="btn">
                submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
