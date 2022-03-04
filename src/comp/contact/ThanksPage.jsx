import React from 'react'
import { Helmet } from 'react-helmet'

export default function ThanksPage({ navigateTo }) {
    return (
        <div className="ThanksPage">
            <Helmet>
                <title>Thanks Page</title>
            </Helmet>
            <div>
                <h1>תודה רבה</h1>
                <h2>פנייתך התקבלה</h2>
                <h3>נחזור אליך בהקדם האפשרי</h3>
                <h2>אימייל</h2>
                <a href="mailto:blank@blank.com"><h3>info@northmetalcard.com</h3></a>
                <h2>טלפון</h2>
                <a href="tel:+9735555555"><h3>+972-55-555-5555</h3></a>
                <button onClick={() => { navigateTo("") }}>חזור לדף הבית</button>
            </div>
        </div>
    )
}
