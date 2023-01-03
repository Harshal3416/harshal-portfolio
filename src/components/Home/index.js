import { Link } from "react-router-dom";
import "./index.scss";
import profileImage from "../../assets/images/profileImage.jpg"

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm Harshal<br />
                    web developer
                </h1>
                <h2>Frontend Developer | React JS | <br /> Javascript Expert</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>

            <div className="profile-image">
                <img src={profileImage} alt="profileImage" />
            </div>
        </div>
    )
}

export default Home;