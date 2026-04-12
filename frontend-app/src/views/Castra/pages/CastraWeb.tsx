import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton, IonIcon } from '@ionic/react';
import { medkit, alertCircle, checkmarkCircle, calendar } from 'ionicons/icons';
import './Castra.css';

const CastraWeb = () => {
    return (
        <WebLayout>
            <div className="castra-page">
                <header className="castra-header">
                    <h1>Campaña de Esterilización</h1>
                    <p>
                        La esterilización es el único método ético y efectivo para controlar la sobrepoblación. <br />
                        ¡Salva vidas antes de que nazcan en la calle!
                    </p>
                </header>

                <div className="page-container">
                    {/* Benefits Section */}
                    <section className="benefits-section">
                        <h2 className="benefits-title">¿Por qué esterilizar?</h2>
                        <div className="benefits-grid">
                            <InfoCard
                                icon={medkit}
                                title="Salud"
                                desc="Reduce el riesgo de cáncer uterino, de mama y problemas de próstata. Tu mascota vivirá más y mejor."
                            />
                            <InfoCard
                                icon={alertCircle}
                                title="Comportamiento"
                                desc="Disminuye el marcaje de territorio, la agresividad y las ganas de escapar en busca de pareja."
                            />
                            <InfoCard
                                icon={checkmarkCircle}
                                title="Control"
                                desc="Evita camadas no deseadas que terminan abandonadas o sufriendo en las calles."
                            />
                        </div>
                    </section>

                    {/* Myths Section */}
                    <section className="myths-section">
                        <h3 className="myths-title">Mitos vs Realidad</h3>
                        <div className="myths-container">
                            <MythItem
                                myth="Debe tener una cría antes de operar."
                                reality="FALSO. Operar antes del primer celo es lo más recomendable para prevenir enfermedades futuras."
                            />
                            <MythItem
                                myth="Se pondrá gordo y perezoso."
                                reality="FALSO. La obesidad depende de la dieta y el ejercicio, no de la operación."
                            />
                            <MythItem
                                myth="Es una operación peligrosa."
                                reality="REALIDAD: Es una cirugía de rutina con muy bajo riesgo cuando la realiza un profesional."
                            />
                        </div>
                    </section>

                    {/* Campaign CTA */}
                    <section className="castra-cta">
                        <div className="cta-icon">
                            <IonIcon icon={calendar} />
                        </div>
                        <h2>Próximas Jornadas a Bajo Costo</h2>
                        <p>
                            Realizamos jornadas mensuales en diferentes municipios. Suscríbete para recibir una alerta cuando estemos cerca de ti.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <IonButton routerLink="/contacto" size="large" fill="solid" color="primary">
                                Notificarme
                            </IonButton>
                            <IonButton href="tel:1234567890" size="large" fill="outline">
                                Llamar para Info
                            </IonButton>
                        </div>
                    </section>
                </div>
            </div>
        </WebLayout>
    );
};

// Helper Components
const InfoCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="benefit-card">
        <IonIcon icon={icon} className="benefit-icon" />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
);

const MythItem = ({ myth, reality }: { myth: string, reality: string }) => (
    <div className="myth-item">
        <p className="myth-false">❌ {myth}</p>
        <p className="myth-true">✅ {reality}</p>
    </div>
);

export default CastraWeb;
