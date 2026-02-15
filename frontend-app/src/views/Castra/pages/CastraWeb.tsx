import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton, IonIcon } from '@ionic/react';
import { medkit, alertCircle, checkmarkCircle, calendar } from 'ionicons/icons';

const CastraWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Campaña de Esterilización</h1>
                <p className="page-subtitle">
                    La esterilización es el único método ético y efectivo para controlar la sobrepoblación. <br />
                    ¡Salva vidas antes de que nazcan en la calle!
                </p>
            </div>

            <div className="page-container">
                {/* Benefits Grid */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>¿Por qué esterilizar?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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
                </div>

                {/* Myths Section - Text Only for improved SEO/Reading */}
                <div style={{ background: '#fff0e6', padding: '3rem', borderRadius: '1rem', marginBottom: '5rem' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#d35400' }}>Mitos vs Realidad</h3>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
                </div>

                {/* Campaign CTA */}
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <IonIcon icon={calendar} style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: '1rem' }} />
                    <h2 style={{ marginBottom: '1rem' }}>Próximas Jornadas a Bajo Costo</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: '#666' }}>
                        Realizamos jornadas mensuales en diferentes municipios. Suscríbete para recibir una alerta cuando estemos cerca de ti.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <IonButton routerLink="/contacto" size="large" fill="solid">
                            Notificarme
                        </IonButton>
                        <IonButton href="tel:1234567890" size="large" fill="outline">
                            Llamar para Info
                        </IonButton>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

// Helper Components
const InfoCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div style={{ textAlign: 'center', padding: '2rem', background: 'white', border: '1px solid #eee', borderRadius: '12px' }}>
        <IonIcon icon={icon} style={{ fontSize: '40px', color: '#ff6b00', marginBottom: '1rem' }} />
        <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{title}</h3>
        <p style={{ color: '#666', lineHeight: '1.6' }}>{desc}</p>
    </div>
);

const MythItem = ({ myth, reality }: { myth: string, reality: string }) => (
    <div style={{ marginBottom: '1.5rem', background: 'white', padding: '1.5rem', borderRadius: '8px' }}>
        <p style={{ fontWeight: 'bold', color: '#c0392b', marginBottom: '0.5rem' }}>❌ {myth}</p>
        <p style={{ color: '#27ae60', fontWeight: 'bold' }}>✅ {reality}</p>
    </div>
);

export default CastraWeb;
