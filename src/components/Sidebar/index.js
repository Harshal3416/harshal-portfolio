import "./index.scss";
import hlogo from '../../assets/images/hlogoblack.jpg';
import CV from '../../assets/pdf/HARSHAL-Front-end-4.5Years.pdf'
import { Link, NavLink } from "react-router-dom";
import { faDownload, faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faSkype, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {

    return (
        <>
            <div className="nav-bar">
                {/* <Link className="logo" > */}
                {/* <img className="hlogo" src={hlogo} alt="logoSub" /> */}
                <span className="mylogo">H</span>
                {/* </Link> */}
                <nav>
                    <NavLink exact="true" activeclassname="active" to="/">
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
                    </NavLink>
                    <a href={CV} download className="download-cv">
                        <FontAwesomeIcon icon={faDownload} color="#ffd700"></FontAwesomeIcon>
                    </a>
                </nav>

                <ul>
                    <li>
                        <a target="_blank" rel="norederrer" href="https://linkedin.com/in/harshal-belamkar">
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="norederrer" href="https://github.com/Harshal3416">
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="norederrer" href="https://wa.me/8970903416">
                            <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e"></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;