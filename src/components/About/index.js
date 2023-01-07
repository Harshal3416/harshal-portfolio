import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="text-zone">

                    <h1>About Me</h1>
                    <p>
                        Senior Software Engineer working on Front-End technologies from past 4.5+ years. <br />
                        Key Skills: Javascript, React JS, Angular 2+, Typescript, HTML5, CSS3, GIT, etc.
                    </p>
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