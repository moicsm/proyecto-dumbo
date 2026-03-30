import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton, IonInput, IonTextarea, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter, logoWhatsapp, mail, location, time } from 'ionicons/icons';

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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>

                    {/* Info de contacto */}
                    <div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333' }}>Información de Contacto</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <ContactItem
                                icon={mail}
                                title="Escríbenos"
                                content="info@proyectodumbo.org"
                            />
                            <ContactItem
                                icon={logoWhatsapp}
                                title="WhatsApp"
                                content="+1 (787) 555-0123"
                            />
                        </div>

                        <div style={{ marginTop: '3rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Síguenos en redes</h3>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <SocialButton icon={logoFacebook} color="#1877f2" />
                                <SocialButton icon={logoInstagram} color="#e4405f" />
                                <SocialButton icon={logoTwitter} color="#1da1f2" />
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div style={{ background: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#333' }}>Envíanos un mensaje</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <IonItem className="ion-margin-bottom" lines="none" style={{ '--background': '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
                                <IonLabel position="floating" style={{ color: '#666' }}>Nombre Completo</IonLabel>
                                <IonInput type="text"></IonInput>
                            </IonItem>

                            <IonItem className="ion-margin-bottom" lines="none" style={{ '--background': '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
                                <IonLabel position="floating" style={{ color: '#666' }}>Email</IonLabel>
                                <IonInput type="email"></IonInput>
                            </IonItem>

                            <IonItem className="ion-margin-bottom" lines="none" style={{ '--background': '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
                                <IonLabel position="floating" style={{ color: '#666' }}>Asunto</IonLabel>
                                <IonInput type="text"></IonInput>
                            </IonItem>

                            <IonItem className="ion-margin-bottom" lines="none" style={{ '--background': '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
                                <IonLabel position="floating" style={{ color: '#666' }}>Mensaje</IonLabel>
                                <IonTextarea rows={5}></IonTextarea>
                            </IonItem>

                            <IonButton expand="block" type="submit" color="primary" size="large" style={{ marginTop: '2rem', '--box-shadow': '0 4px 10px rgba(var(--ion-color-primary-rgb), 0.3)' }}>
                                Enviar Mensaje
                            </IonButton>
                        </form>
                    </div>
                </div>


            </div>
        </WebLayout>
    );
};

// Helper Components
const ContactItem = ({ icon, title, content }: { icon: any, title: string, content: React.ReactNode }) => (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{
            background: '#fff0e5', padding: '10px', borderRadius: '50%',
            marginRight: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <IonIcon icon={icon} style={{ fontSize: '24px', color: '#ff6b00' }} />
        </div>
        <div>
            <h3 style={{ margin: '0 0 0.3rem 0', fontSize: '1.1rem', fontWeight: 'bold' }}>{title}</h3>
            <p style={{ margin: 0, color: '#666', lineHeight: '1.5' }}>{content}</p>
        </div>
    </div>
);

const SocialButton = ({ icon, color }: { icon: any, color: string }) => (
    <a href="#" style={{
        width: '45px', height: '45px', borderRadius: '50%', background: color,
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
        transition: 'transform 0.2s'
    }}>
        <IonIcon icon={icon} style={{ fontSize: '22px' }} />
    </a>
);

export default ContactoWeb;
