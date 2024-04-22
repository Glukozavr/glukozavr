import styles from './styles.module.css';
import React from "react";
import Translate from "@docusaurus/Translate";
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}
  
export default function NetlifyForms({formName, submitAction, nameLabel, emailLabel, messageLabel, sendLabel}) {
    const { i18n } = useDocusaurusContext();
    const history = useHistory();
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
            const local_prefix = i18n.currentLocale === i18n.defaultLocale ? '' : `/${i18n.localeConfigs[i18n.currentLocale].htmlLang}`;
            history.push(`${local_prefix}${form.getAttribute('action')}`);
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
                <label><Translate>{nameLabel}</Translate><input type="text" name="name" onChange={handleChange} /></label>
                <label><Translate>{emailLabel}</Translate><input type="email" name="email" onChange={handleChange} /></label>
                <label><Translate>{messageLabel}</Translate><textarea name="message" onChange={handleChange} ></textarea></label>
            </div>
            <div className={styles.button}>
                <button className="button button--secondary button--lg" type="submit"><Translate>{sendLabel}</Translate></button>
            </div>
        </form>
    );
}