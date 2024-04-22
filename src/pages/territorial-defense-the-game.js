import React from 'react';
import Layout from '@theme/Layout';
import NetlifyForms from '../components/NetlifyForms';

export default function TerDefSupport() {
    const props = {
        formName: "terfef-support",
        submitAction: "/thanks/",
        nameLabel: "forms.name",
        emailLabel: "forms.email",
        messageLabel: "forms.message",
        sendLabel: "forms.send",
    }
    return (
        <Layout title="TerDef Support" description="Support page for Territorial Defense: The Game">
            <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                fontSize: '20px',
            }}>
                <NetlifyForms {...props}/>
            </div>
        </Layout>
    )
}