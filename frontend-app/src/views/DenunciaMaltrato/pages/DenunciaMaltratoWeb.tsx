import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';

const DenunciaMaltratoWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Denuncia el Maltrato</h1>
                <p className="page-subtitle">
                    No seas indiferente. Si ves maltrato, repórtalo. Tu silencio es cómplice.
                </p>
            </div>
            <div className="page-container">
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                    <p>Si la vida del animal corre peligro inminente, llama al 9-1-1 o a la Policía de Puerto Rico (Ley 154).</p>
                </div>
            </div>
        </WebLayout>
    );
};
export default DenunciaMaltratoWeb;
