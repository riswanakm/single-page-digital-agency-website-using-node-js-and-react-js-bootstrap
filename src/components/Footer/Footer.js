//Sai Monica

import './Footer.css';

const Footer = () => {
    return (
        <div>
        <footer class="item-25">
        <div class="footer-logo">
            <div class="brand-logo">
                <span class="text-color">Digi</span>ency
            </div>
            <div class="footer-text">
                <p>Creative solutions that suites your needs and helps excels your business</p>
            </div>
            <div class="footer-icon">
                <ul>
                    <li><a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a></li>
                    <li><a href="#">
                            <i class="fab fa-twitter"></i>
                        </a></li>
                    <li><a href="#">
                            <i class="fab fa-instagram"></i>
                        </a></li>
                    <li><a href="#">
                            <i class="fab fa-skype"></i>
                        </a></li>
                </ul>
            </div>
        </div>
        <div class="footer-company">
            <h3>company</h3>
            <div class="footer-link">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/ourwork">Our Work</a></li>
                    <li><a href="/ourblog">Our Blog</a></li>
                    <li><a href="/contactus">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-newsletter">
            <h3>newsletter</h3>
            <div>
                <p>Subscribe to our newsletter</p>
            </div>
            <form action="">
                <input type="text" name="" id="" placeholder="digiency@gmail.com"/><i class="fab fa-telegram-plane"></i>
            </form>
        </div>

    </footer>
            <div class="copy-right">
            <i class="far fa-copyright"></i>  2022 Group 9
        </div>
           </div>

    )
  };
  
  export default Footer;