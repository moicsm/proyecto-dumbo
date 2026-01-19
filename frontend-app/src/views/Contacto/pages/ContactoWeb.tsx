import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton, IonInput, IonTextarea, IonItem, IonLabel } from '@ionic/react';

const ContactoWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Contáctanos</h1>
                <p className="page-subtitle">
                    ¿Tienes dudas, quieres adoptar o denunciar un caso? Estamos aquí para escucharte.
                </p>
            </div>

            <div className="page-container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Info de contacto */}
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Información</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>📍 Dirección (Solo con cita)</h3>
                                <p style={{ color: '#666' }}>Calle Rescate 123, Sector La Esperanza<br />San Juan, Puerto Rico 00901</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>📧 Email</h3>
                                <p style={{ color: '#666' }}>info@proyectodumbo.org</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>📱 WhatsApp</h3>
                                <p style={{ color: '#666' }}>+1 (787) 555-0123</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>⏰ Horario de Atención</h3>
                                <p style={{ color: '#666' }}>Lunes a Sábado: 9:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Envíanos un mensaje</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <IonItem className="ion-margin-bottom" lines="none" style={{ '--background': '#f8f9fa', borderRadius: '8px' }}>
                                <IonLabel position="floating">Nombre Completo</IonLabel>
                                <IonInput type="text"></IonInput>
                            </IonItem>

                            <IonItem className="ion-margin-bottom" lines="none" style={{ '--background': '#f8f9fa', borderRadius: '8px' }}>
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput type="email"></IonInput>
                            </IonItem>

                            <IonItem className="ion-margin-bottom" lines="none" style={{ '--background': '#f8f9fa', borderRadius: '8px' }}>
                                <IonLabel position="floating">Asunto</IonLabel>
                                <IonInput type="text"></IonInput>
                            </IonItem>

                            <IonItem className="ion-margin-bottom" lines="none" style={{ '--background': '#f8f9fa', borderRadius: '8px' }}>
                                <IonLabel position="floating">Mensaje</IonLabel>
                                <IonTextarea rows={4}></IonTextarea>
                            </IonItem>

                            <IonButton expand="block" type="submit" color="primary" style={{ marginTop: '2rem' }}>
                                Enviar Mensaje
                            </IonButton>
                        </form>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default ContactoWeb;
