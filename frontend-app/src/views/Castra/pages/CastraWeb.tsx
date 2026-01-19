import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';

const CastraWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Campaña de Esterilización</h1>
                <p className="page-subtitle">
                    La esterilización es el único método ético y efectivo para controlar la sobrepoblación.
                </p>
            </div>
            <div className="page-container">
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                    <p>Próximamente publicaremos nuestras fechas de esterilización a bajo costo.</p>
                </div>
            </div>
        </WebLayout>
    );
};
export default CastraWeb;
