import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonCard, IonButton } from '@ionic/react';

const AporteEconomicoWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Aporte Económico</h1>
                <p className="page-subtitle">
                    Conviértete en un Héroe Mensual. Tu donación recurrente nos permite planificar rescates a largo plazo.
                </p>
            </div>
            <div className="page-container">
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                    <IonCard style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
                        <h3>Suscripción Mensual</h3>
                        <p style={{ margin: '1rem 0' }}>Desde $5/mes ayudas a alimentar un perro.</p>
                        <IonButton expand="block">Suscribirme</IonButton>
                    </IonCard>
                </div>
            </div>
        </WebLayout>
    );
};
export default AporteEconomicoWeb;
