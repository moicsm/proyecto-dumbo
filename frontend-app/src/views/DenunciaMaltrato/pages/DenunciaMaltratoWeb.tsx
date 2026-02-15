import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton, IonIcon, IonCard, IonGrid, IonRow, IonCol } from '@ionic/react';
import { alertCircle, call, camera, documentText, shield } from 'ionicons/icons';

const DenunciaMaltratoWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Denuncia el Maltrato</h1>
                <p className="page-subtitle">
                    No seas indiferente. Si ves maltrato, repórtalo. Tu silencio es cómplice. <br />
                    El maltrato animal es delito bajo la Ley 154.
                </p>
            </div>

            <div className="page-container">
                {/* Emergency Banner */}
                <div style={{ background: '#ffebee', border: '1px solid #ef5350', borderRadius: '8px', padding: '1.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center' }}>
                    <IonIcon icon={alertCircle} style={{ fontSize: '30px', color: '#d32f2f', marginRight: '1rem', minWidth: '30px' }} />
                    <div>
                        <h3 style={{ margin: '0 0 0.5rem 0', color: '#b71c1c' }}>¿Peligro de muerte inminente?</h3>
                        <p style={{ margin: 0, color: '#c62828' }}>
                            Si el animal está siendo golpeado en este momento o su vida corre peligro inmediato,
                            <strong> llama al 9-1-1 o al cuartel de policía más cercano.</strong>
                        </p>
                    </div>
                </div>

                {/* What WE can do vs Police */}
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Importante: No somos la policía</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
                        Las fundaciones y rescatistas <strong>NO tenemos autoridad legal</strong> para entrar a propiedades privadas
                        ni confiscar animales. Solo la Policía de Puerto Rico y oficiales de manejo de emergencias tienen esa potestad.
                    </p>
                </div>

                {/* Steps to Report */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Pasos para una denuncia efectiva</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <StepCard
                            icon={camera}
                            step="1. Evidencia"
                            desc="Toma fotos y videos discretamente. Anota direcciones exactas, fechas y horas. Sin evidencia, es difícil procesar."
                        />
                        <StepCard
                            icon={call}
                            step="2. Reporta"
                            desc="Llama al Cuartel de Policía del municipio (Ley 154) o a Manejo de Emergencias del municipio."
                        />
                        <StepCard
                            icon={documentText}
                            step="3. Número de Querella"
                            desc="Exige el número de querella. Es tu derecho y la única forma de dar seguimiento oficial al caso."
                        />
                        <StepCard
                            icon={shield}
                            step="4. Seguimiento"
                            desc="Llama para verificar el estatus. Si la policía no actúa, escala la queja a la comandancia de área."
                        />
                    </div>
                </div>

                {/* Law 154 Info */}
                <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '1rem' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Conoce la Ley 154</h3>
                    <div style={{ maxWidth: '700px', margin: '0 auto', color: '#555' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            La <strong>Ley para el Bienestar y la Protección de los Animales</strong> tipifica como delito grave:
                        </p>
                        <ul style={{ paddingLeft: '2rem', lineHeight: '1.8' }}>
                            <li>El abandono animal.</li>
                            <li>El confinamiento sin cuidado adecuado (agua, comida, techo).</li>
                            <li>El maltrato físico y la negligencia.</li>
                            <li>Las peleas de animales.</li>
                        </ul>
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <IonButton href="https://www.lexjuris.com/lexlex/Leyes2008/lexl2008154.htm" target="_blank" fill="outline">
                                Leer Ley Completa
                            </IonButton>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

// Helper Components
const StepCard = ({ icon, step, desc }: { icon: any, step: string, desc: string }) => (
    <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #eee', borderRadius: '12px', background: 'white' }}>
        <div style={{ background: '#e3f2fd', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <IonIcon icon={icon} style={{ fontSize: '30px', color: '#1976d2' }} />
        </div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', fontWeight: 'bold' }}>{step}</h3>
        <p style={{ fontSize: '0.95rem', color: '#666' }}>{desc}</p>
    </div>
);

export default DenunciaMaltratoWeb;
