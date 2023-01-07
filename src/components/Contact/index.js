import "./index.scss";
import emailjs from '@emailjs/browser'
import { useRef } from "react";
import { faCopy, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                (err) => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    return (
        <>
            <div className="contact-container">
                <div className="text-zone">

                    <h1>Contact Me</h1>
                    <p>
                        <br />
                        <FontAwesomeIcon icon={faMessage} color="#4d4d4e"></FontAwesomeIcon>
                        <span className="gmail" onClick={() => { navigator.clipboard.writeText('harshalbelamkar3416@gmail.com') }}> &nbsp; harshalbelamkar3416@gmail.com &nbsp;
                            <FontAwesomeIcon icon={faCopy} color="#4d4d4e"></FontAwesomeIcon>
                        </span> <br /> <br />
                        <FontAwesomeIcon icon={faPhone} color="#4d4d4e"></FontAwesomeIcon>
                        <span className="phone" onClick={() => { navigator.clipboard.writeText('+91 8970903416') }}>&nbsp; +91 8970903416 &nbsp;
                            <FontAwesomeIcon icon={faCopy} color="#4d4d4e"></FontAwesomeIcon>
                        </span>
                    </p>

                </div>

                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>

                        <ul>
                            <li className="half">
                                <input type="text" name="from_name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="from_email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" name="subject"
                                    placeholder="Subject" required />
                            </li>
                            <li><textarea name="message"
                                placeholder="Message" required
                            ></textarea></li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"
                                />
                            </li>
                        </ul>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact;