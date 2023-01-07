import "./index.scss";
import emailjs from '@emailjs/browser'
import { useRef } from "react";

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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ea consectetur ipsa enim voluptatem optio explicabo facilis adipisci ex reiciendis repellendus saepe alias itaque temporibus porro quod, earum, ad debitis!</p>

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