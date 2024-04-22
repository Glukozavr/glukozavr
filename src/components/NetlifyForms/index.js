import styles from './styles.module.css';
import React from "react";
import Translate from "@docusaurus/Translate";

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}
  
export default function NetlifyForms({formName, submitAction, nameLabel, emailLabel, messageLabel, sendLabel}) {
    const [state, setState] = React.useState({})
  
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...state,
          }),
        })
          .then(() => {
            window.location.href = form.action;
        })
          .catch((error) => {
              alert(error);
          })
    }

    return (
        <form 
            name={formName}
            method="POST"
            data-netlify="true"
            action={submitAction}
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value={formName} />
            <div className="container">
                <p>
                    <label><Translate>{nameLabel}</Translate><input type="text" name="name" onChange={handleChange} /></label>
                </p>
                <p>
                    <label><Translate>{emailLabel}</Translate><input type="email" name="email" onChange={handleChange} /></label>
                </p>
                <p>
                    <label><Translate>{messageLabel}</Translate><textarea name="message" onChange={handleChange} ></textarea></label>
                </p>
            </div>
            <div className={styles.button}>
                <button className="button button--secondary button--lg" type="submit"><Translate>{sendLabel}</Translate></button>
            </div>
        </form>
    );
}