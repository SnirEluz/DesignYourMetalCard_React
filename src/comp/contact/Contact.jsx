import React from 'react'
import { Helmet } from 'react-helmet'
import './Contact.scss'

export default function Contact() {
    return (
        <div className="Contact">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div>
                <h1>צור קשר</h1>
                <h2>אימייל</h2>
                <a href="mailto:blank@blank.com"><h3>info@northmetalcard.com</h3></a>
                <h2>טלפון</h2>
                <a href="tel:+9735555555"><h3>+972-55-555-5555</h3></a>
            </div>
            <form action="https://formsubmit.co/snireluzttt@gmail.com" method="POST">
                <h1>הישאר בקשר</h1>
                <input type="email" name="email" placeholder="* כתובת אימייל" required />
                <input type="text" name="Full Name" placeholder="* שם מלא" />
                <input type="tel" name="Thelepgon" placeholder="* טלפון" />
                <input type="text" name="Subject" placeholder="נושא" />
                <input className="Message" type="text" name="Message" placeholder="* תוכן הודעה" />
                <button type="submit">Send</button>
                <input type="hidden" name="_next" value="http://localhost:3000/thankspage" />
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </div>
    )
}

