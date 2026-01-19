import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonCard, IonCardContent, IonButton } from '@ionic/react';

const DonarWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Tu ayuda salva vidas</h1>
                <p className="page-subtitle">
                    Somos una organización sin fines de lucro. Tu donación va 100% al cuidado de nuestros animales.
                </p>
            </div>

            <div className="page-container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* ATH Móvil */}
                    <IonCard style={{ textAlign: 'center', padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', color: '#ff6b00', marginBottom: '1rem' }}>📱</div>
                        <h2>ATH Móvil</h2>
                        <p style={{ margin: '1rem 0', fontSize: '1.2rem', fontWeight: 'bold' }}>/ProyectoDumbo</p>
                        <p style={{ color: '#666' }}>La forma más rápida de ayudar desde PR.</p>
                    </IonCard>

                    {/* PayPal */}
                    <IonCard style={{ textAlign: 'center', padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', color: '#003087', marginBottom: '1rem' }}>💳</div>
                        <h2>PayPal</h2>
                        <p style={{ margin: '1rem 0' }}>donaciones@proyectodumbo.org</p>
                        <IonButton fill="outline" href="https://paypal.com" target="_blank">
                            Donar con PayPal
                        </IonButton>
                    </IonCard>

                    {/* Cuenta Bancaria */}
                    <IonCard style={{ textAlign: 'center', padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', color: '#0066cc', marginBottom: '1rem' }}>🏦</div>
                        <h2>Transferencia</h2>
                        <div style={{ textAlign: 'left', background: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                            <p><strong>Banco:</strong> Banco Popular</p>
                            <p><strong>Cuenta:</strong> 123-456-789</p>
                            <p><strong>Nombre:</strong> Proyecto Dumbo Inc.</p>
                        </div>
                    </IonCard>
                </div>
            </div>
        </WebLayout>
    );
};

export default DonarWeb;
