import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonCard, IonCardContent, IonIcon } from '@ionic/react';
import { paw } from 'ionicons/icons';

const NosotrosWeb = () => {
    return (
        <WebLayout>
            {/* Header de la página */}
            <div className="page-header">
                <h1 className="page-title">
                    Sobre <span className="text-gradient">Proyecto Dumbo</span>
                </h1>
                <p className="page-subtitle">
                    Somos una organización sin fines de lucro dedicada a cambiar el destino de animales abandonados.
                </p>
            </div>

            <div className="page-container">
                {/* Misión y Visión */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    <IonCard style={{ margin: 0 }}>
                        <IonCardContent style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Nuestra Misión</h2>
                            <p>
                                Rescatar, rehabilitar y reubicar animales en situación de abandono, promoviendo la tenencia responsable y educando a la comunidad sobre el bienestar animal.
                            </p>
                        </IonCardContent>
                    </IonCard>

                    <IonCard style={{ margin: 0 }}>
                        <IonCardContent style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁️</div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Nuestra Visión</h2>
                            <p>
                                Un mundo donde cada animal tenga un hogar amoroso y sea tratado con respeto, dignidad y compasión de por vida.
                            </p>
                        </IonCardContent>
                    </IonCard>
                </div>

                {/* Historia Básica */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Nuestra Historia</h2>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Proyecto Dumbo nació en 2020, en medio de la pandemia, cuando notamos un aumento alarmante en el abandono de mascotas. Lo que comenzó como un grupo de 3 amigos alimentando perros callejeros, hoy es una fundación constituida que ha rescatado a más de 500 animales.
                        </p>
                        <p style={{ lineHeight: '1.6' }}>
                            Nos enfocamos en los casos más difíciles: animales atropellados, seniors o con enfermedades crónicas que otros ignoran. Para nosotros, cada vida es un tesoro.
                        </p>
                    </div>
                </section>

                {/* Valores */}
                <section>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Nuestros Valores</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {['Transparencia', 'Compasión', 'Compromiso', 'Educación'].map((valor, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '80px', height: '80px', background: '#f0f9ff',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', margin: '0 auto 1rem',
                                    color: '#4ecdc4', fontSize: '2rem'
                                }}>
                                    <IonIcon icon={paw} />
                                </div>
                                <h3 style={{ fontWeight: 'bold' }}>{valor}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </WebLayout>
    );
};

export default NosotrosWeb;
