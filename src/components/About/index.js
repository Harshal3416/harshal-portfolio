import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="text-zone">

                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ea consectetur ipsa enim voluptatem optio explicabo facilis adipisci ex reiciendis repellendus saepe alias itaque temporibus porro quod, earum, ad debitis!</p>

                </div>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#dd0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;