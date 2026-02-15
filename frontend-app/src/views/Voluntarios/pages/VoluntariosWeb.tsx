import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton, IonIcon, IonCard, IonGrid, IonRow, IonCol } from '@ionic/react';
import { heart, paw, time, camera, car, chatbubble } from 'ionicons/icons';

const VoluntariosWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Únete a nuestro equipo de Voluntarios</h1>
                <p className="page-subtitle">
                    Tu tiempo y cariño pueden cambiar el mundo de un animal rescatado. <br />
                    ¡Descubre cómo puedes sumar tu granito de arena!
                </p>
            </div>

            <div className="page-container">
                {/* Intro Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>¿Qué significa ser voluntario?</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
                        Ser voluntario en Proyecto Dumbo es más que dar tiempo; es comprometerse con la vida.
                        No buscamos héroes, buscamos personas constantes, responsables y con mucho amor para dar
                        a quienes han sufrido el abandono.
                    </p>
                </div>

                {/* Roles Grid */}
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#444' }}>Áreas donde puedes ayudar</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <RoleCard
                            icon={paw}
                            title="Cuidado Directo"
                            desc="Alimentación, limpieza de caniles y paseos. El contacto directo que sana el alma."
                        />
                        <RoleCard
                            icon={car}
                            title="Traslados"
                            desc="Ayúdanos a llevar animales al veterinario, a sus hogares de tránsito o a jornadas de adopción."
                        />
                        <RoleCard
                            icon={camera}
                            title="Fotografía y Video"
                            desc="Una buena foto acelera una adopción. Si tienes talento visual, ¡te necesitamos!"
                        />
                        <RoleCard
                            icon={chatbubble}
                            title="Redes y Eventos"
                            desc="Ayuda a difundir casos, moderar comentarios y organizar eventos de recaudación."
                        />
                    </div>
                </div>

                {/* Requirements Section */}
                <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '1rem', marginBottom: '4rem' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Requisitos básicos</h3>
                    <ul style={{ listStyle: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
                        <RequirementItem text="Ser mayor de 18 años (o contar con autorización de padres)." />
                        <RequirementItem text="Disponibilidad de al menos 4 horas semanales." />
                        <RequirementItem text="Compromiso mínimo de 3 meses." />
                        <RequirementItem text="Vivir en la zona o tener movilidad propia." />
                        <RequirementItem text="Amor y respeto incondicional por los animales." />
                    </ul>
                </div>

                {/* CTA Section */}
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>¿Listo para empezar?</h2>
                    <p style={{ marginBottom: '2rem' }}>Competa el formulario y nos pondremos en contacto contigo para una charla informativa.</p>
                    <IonButton routerLink="/contacto" size="large" shape="round">
                        Quiero ser Voluntario
                    </IonButton>
                </div>
            </div>
        </WebLayout>
    );
};

// Helper Components
const RoleCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div style={{
        padding: '2rem',
        borderRadius: '12px',
        background: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        border: '1px solid #eee'
    }}>
        <div style={{
            background: '#fff0e5',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
        }}>
            <IonIcon icon={icon} style={{ fontSize: '30px', color: '#ff6b00' }} />
        </div>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{title}</h4>
        <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>{desc}</p>
    </div>
);

const RequirementItem = ({ text }: { text: string }) => (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', fontSize: '1.05rem', color: '#444' }}>
        <IonIcon icon={heart} style={{ color: '#ff6b00', marginRight: '1rem' }} />
        {text}
    </li>
);

export default VoluntariosWeb;
