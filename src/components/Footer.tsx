import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

export const Footer = () => {
    return (
        <footer className="f-footer">
            <div className="f-footer-img-container">
                <img src="latch-logo-v4.png" alt="logo"/>
            </div>

            <div className="f-footer-icons-wrapper">
                <div className="f-footer-icons fb"><FaFacebookF id="fb" /></div>
                <div className="f-footer-icons"><FaInstagram id="insta" /></div>
                <div className="f-footer-icons"><GoMail /></div>

            </div>
            <div className="f-footer-contact-info-wrapper">
                <div className="f-footer-contact-wrapper">
                    <p>KONTAKTA OSS</p>
                    <a href="0700000000"><div className="f-footer-icons"><BsTelephone /></div></a>
                </div>
                <div className="f-footer-lc-wrapper">
                    <p>HITTA OSS</p>
                    <a href="https://www.google.com/maps"><div className="f-footer-icons"><CiLocationOn /></div></a>
                </div>
            </div>
        </footer>
    )
}