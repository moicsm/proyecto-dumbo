import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton, IonInput, IonTextarea, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { logoInstagram, logoTwitter, logoTiktok, mail } from 'ionicons/icons';
import './Contacto.css';

const ContactoWeb = () => {
    return (
        <WebLayout>
            <div className="contacto-page">
                {/* Header de la página */}
                <header className="contacto-header">
                    <h1>Contáctanos</h1>
                    <p>
                        ¿Tienes dudas, quieres adoptar o denunciar un caso? Estamos aquí para escucharte.
                    </p>
                </header>

                <div className="page-container">
                    <div className="contacto-info-container">

                        {/* Info de contacto */}
                        <div>
                            <h2 className="contacto-info-title">Nuestras Redes</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                La forma más rápida de contactarnos es a través de nuestras redes sociales o correo electrónico.
                            </p>

                            <div className="flex-column" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <ContactItem
                                    icon={mail}
                                    title="Correo Electrónico"
                                    content={<a href="mailto:proyectodumbovenezuela@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>proyectodumbovenezuela@gmail.com</a>}
                                />
                            </div>

                            <div className="contacto-social-section" style={{ marginTop: '3rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: '800' }}>Síguenos</h3>
                                <div className="contacto-social-grid" style={{ display: 'flex', gap: '1rem' }}>
                                    <SocialButton 
                                        icon={logoInstagram} 
                                        color="#e4405f" 
                                        link="https://instagram.com/michellefloresm"
                                    />
                                    <SocialButton 
                                        icon={logoTiktok} 
                                        color="#000000" 
                                        link="https://tiktok.com/@proyectodumbo"
                                    />
                                    <SocialButton 
                                        icon={logoTwitter} 
                                        color="#000000" 
                                        link="https://x.com/proyectodumbo"
                                        isX={true}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Formulario */}
                        <div className="contacto-form-card">
                            <h2 className="contacto-form-title">Envíanos un mensaje</h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <IonItem className="contacto-input-item ion-margin-bottom" lines="none">
                                    <IonLabel position="floating" style={{ color: 'var(--form-label-color)' }}>Nombre Completo</IonLabel>
                                    <IonInput type="text" placeholder="Tu nombre"></IonInput>
                                </IonItem>

                                <IonItem className="contacto-input-item ion-margin-bottom" lines="none">
                                    <IonLabel position="floating" style={{ color: 'var(--form-label-color)' }}>Email</IonLabel>
                                    <IonInput type="email" placeholder="tu@correo.com"></IonInput>
                                </IonItem>

                                <IonItem className="contacto-input-item ion-margin-bottom" lines="none">
                                    <IonLabel position="floating" style={{ color: 'var(--form-label-color)' }}>Asunto</IonLabel>
                                    <IonInput type="text" placeholder="Motivo de contacto"></IonInput>
                                </IonItem>

                                <IonItem className="contacto-input-item ion-margin-bottom" lines="none">
                                    <IonLabel position="floating" style={{ color: 'var(--form-label-color)' }}>Mensaje</IonLabel>
                                    <IonTextarea rows={5} placeholder="Escribe tu mensaje aquí..."></IonTextarea>
                                </IonItem>

                                <IonButton expand="block" type="submit" color="primary" shape="round" style={{ marginTop: '2rem', height: '56px', fontWeight: '800' }}>
                                    Enviar Mensaje
                                </IonButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

// Helper Components
const ContactItem = ({ icon, title, content }: { icon: any, title: string, content: React.ReactNode }) => (
    <div className="contact-item">
        <div className="contact-icon-wrapper">
            <IonIcon icon={icon} style={{ fontSize: '24px' }} />
        </div>
        <div className="contact-details">
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800' }}>{title}</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>{content}</p>
        </div>
    </div>
);

const SocialButton = ({ icon, color, link, isX }: { icon: any, color: string, link: string, isX?: boolean }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="social-circle-btn" style={{ background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '50%', color: 'white' }}>
        {isX ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ) : (
            <IonIcon icon={icon} style={{ fontSize: '24px' }} />
        )}
    </a>
);

export default ContactoWeb;
