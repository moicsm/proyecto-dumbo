import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';

const HogarTransitoWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Hogar de Tránsito (Foster)</h1>
                <p className="page-subtitle">
                    Abre las puertas de tu hogar temporalmente para salvar una vida mientras encontramos su familia definitiva.
                </p>
            </div>
            <div className="page-container">
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                    <p>Nosotros cubrimos los gastos veterinarios y alimentos. Tú pones el amor y el techo.</p>
                </div>
            </div>
        </WebLayout>
    );
};
export default HogarTransitoWeb;
