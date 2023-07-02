import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p>&copy; 2023 burger33.com</p>
        <a>
          <BsInstagram />
        </a>
        <a>
          <BsTwitter />
        </a>
        <a>
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
