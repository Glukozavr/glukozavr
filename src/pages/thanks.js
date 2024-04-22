import React from 'react'
import Layout from '@theme/Layout';
import Translate from "@docusaurus/Translate";

export default () => (
    <Layout title="Thanks">
         <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                fontSize: '20px',
            }}>
                <div>
                    <h1><Translate>thanks.title</Translate></h1>
                </div>
                
                <div>
                    <p><Translate>thanks.description</Translate></p>    
                </div>
        </div>
    </Layout>
);
