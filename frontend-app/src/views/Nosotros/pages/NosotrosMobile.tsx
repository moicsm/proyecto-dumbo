import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import './Nosotros.css';

/**
 * NosotrosMobile - Vista mobile
 */
export const NosotrosMobile = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Nosotros</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="nosotros-page mobile">
                    <div className="ion-padding">
                        <header className="nosotros-header" style={{ padding: '1rem 0' }}>
                            <h1>Sobre <span style={{ color: 'var(--ion-color-primary)' }}>Proyecto Dumbo</span></h1>
                            <p style={{ fontSize: '1rem' }}>
                                Somos una organización sin fines de lucro dedicada a cambiar el destino de animales abandonados.
                            </p>
                        </header>

                        <div className="mv-card" style={{ marginBottom: '1.5rem', padding: '1.5rem' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎯</div>
                            <h2 style={{ fontSize: '1.2rem' }}>Nuestra Misión</h2>
                            <p style={{ fontSize: '0.9rem' }}>
                                Rescatar, rehabilitar y ubicar en hogares responsables a animales en situación de abandono, trabajando bajo la premisa de que cada vida salvada contribuye a la meta colectiva de erradicar el maltrato. A través de la educación constante y la concientización social, transformamos la realidad de las calles, brindando una segunda oportunidad a quienes no tienen voz.
                            </p>
                        </div>

                        <div className="mv-card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👁️</div>
                            <h2 style={{ fontSize: '1.2rem' }}>Nuestra Visión</h2>
                            <p style={{ fontSize: '0.9rem' }}>
                                Ser una fundación referente en bienestar animal para Venezuela, reconocida por reducir significativamente la sobrepoblación de animales en las calles y por formar una sociedad más empática y educada. Aspiramos a un futuro donde el abandono sea la excepción y donde cada ciudadano sea un guardián activo de la vida animal.
                            </p>
                        </div>

                        <section className="legado-section" style={{ padding: 0 }}>
                            <h2 className="legado-title" style={{ textAlign: 'left', fontSize: '1.4rem' }}>El Legado de Dumbo</h2>
                            <div className="legado-content" style={{ padding: '1.5rem' }}>
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    La Fundación Proyecto Dumbo se formalizó en julio de 2021 en el estado Aragua, consolidando una labor de rescate iniciada por Michelle Flores.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};
