import React from "react";
import Translate from "@docusaurus/Translate";
import {useLocation} from '@docusaurus/router';

function navigate(route) {
    // React router provides the current component's route, even in SSR
    const location = useLocation();
    const destination = location.pathname + route;
    window.location.href = destination;
}

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
    //   navigate(form.getAttribute('action'));
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
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <button className="button button--secondary button--lg" type="submit"><Translate>{sendLabel}</Translate></button>
            </div>
        </form>
    );
}