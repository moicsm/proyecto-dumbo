import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';

const TiendaWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Tienda Solidaria</h1>
                <p className="page-subtitle">
                    Compra con propósito. El 100% de las ganancias apoyan a nuestros rescatados.
                </p>
            </div>
            <div className="page-container">
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                    <h2>🛍️ Próximamente</h2>
                    <p style={{ marginTop: '1rem' }}>Camisas, gorras y accesorios para tu mascota.</p>
                </div>
            </div>
        </WebLayout>
    );
};
export default TiendaWeb;
