import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";

export const Footer = () => {
    return (
        <footer className="f-footer">
            <div className="f-footer-img-container">
                <img src="latch-logo-v4.png"/>
                {/* <div className="f-footer-img-wrapper">
                </div> */}
            </div>

            <div className="f-footer-icons-wrapper">
                <div className="f-footer-icons fb"><FaFacebookF id="fb"/></div>
                <div className="f-footer-icons"><FaInstagram id="insta"/></div>
                <div className="f-footer-icons"><GoMail /></div>
                   
            </div>
            <div className="f-footer-lc-wrapper">
                <p>HITTA OSS</p>
               <a href="https://www.google.com/maps/dir//Eleonoragatan+4,+633+43+Eskilstuna/@59.3761999,16.4324066,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x465ef2c96c4468c3:0x51523b9f1b02b8ce!2m2!1d16.5148063!2d59.3762259?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"><div className="f-footer-icons"><CiLocationOn /></div></a>
            </div>
        </footer>
    )
}