import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faFacebookSquare,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <h2>GitHub</h2>

        <div class="footer-main">
          <div class="footer-two">
            <p class="footer-p">Product</p>
            <p>Features</p>
            <p>Security</p>
            <p>Enterprise</p>
            <p>Customer stories</p>
            <p>Pricing</p>
            <p>Resources</p>
          </div>

          <div class="footer-three">
            <p class="footer-p">Platform</p>
            <p>Developer API</p>
            <p>Partners</p>
            <p>Atom</p>
            <p>Electron</p>
            <p>GitHub Desktop</p>
          </div>

          <div class="footer-four">
            <p class="footer-p">Support</p>
            <p>Help</p>
            <p>Community Forum</p>
            <p>Professional Services</p>
            <p>Learning Lab</p>
            <p>Status</p>
            <p>Contact GitHub</p>
          </div>

          <div class="footer-five">
            <p class="footer-p">Company</p>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Shop</p>
          </div>
        </div>
      </footer>

      <div class="cli-last">
        <div class="cli-first">
          <p>© 2024 GitHub, Inc.</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div class="cli-lasts">
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#1f2328", marginRight: "10px" }}
          />
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ color: "#1f2328", marginRight: "10px" }}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "#1f2328", marginRight: "10px" }}
          />
          <FontAwesomeIcon
            icon={faLinkedinIn}
            style={{ color: "#1f2328", marginRight: "10px" }}
          />
          <FontAwesomeIcon icon={faGithub} style={{ color: "#1f2328" }} />
        </div>
      </div>
    </>
  );
}

export default Footer;
