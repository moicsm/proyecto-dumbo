import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton, IonIcon, IonCard } from '@ionic/react';
import { home, heart, medkit, helpCircle, checkmarkCircle } from 'ionicons/icons';

const HogarTransitoWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Hogar de Tránsito (Foster)</h1>
                <p className="page-subtitle">
                    Salvar una vida no siempre significa adoptar para siempre. <br />
                    Ser hogar temporal es el puente entre el abandono y una familia feliz.
                </p>
            </div>

            <div className="page-container">
                {/* Intro */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>¿Cómo funciona?</h2>
                    <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
                        Muchos animales rescatados no están listos para ser adoptados inmediatamente; necesitan recuperarse de heridas,
                        perder el miedo o simplemente esperar a que aparezca su familia ideal. Ahí entras tú.
                    </p>
                </div>

                {/* What we cover Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                    <div style={{ background: '#e3f2fd', padding: '2rem', borderRadius: '1rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', color: '#1565c0' }}>
                            <IonIcon icon={check} style={{ marginRight: '10px' }} />
                            La Fundación Cubre:
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <ListItem text="Gastos veterinarios y medicamentos." />
                            <ListItem text="Alimento especial si es necesario." />
                            <ListItem text="Cuna, correa y platos (si no tienes)." />
                            <ListItem text="Promoción para adopción." />
                        </ul>
                    </div>
                    <div style={{ background: '#fff3e0', padding: '2rem', borderRadius: '1rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', color: '#e65100' }}>
                            <IonIcon icon={heart} style={{ marginRight: '10px' }} />
                            Tú Aportas:
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <ListItem text="Un espacio seguro dentro de tu hogar." />
                            <ListItem text="Tiempo para mimos y medicación básica." />
                            <ListItem text="Fotos y videos para sus redes sociales." />
                            <ListItem text="Mucho amor y paciencia." />
                        </ul>
                    </div>
                </div>

                {/* Steps */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>El Camino del Foster</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                        <StepCard number="1" title="Solicitud" desc="Llenas el formulario contándonos sobre tu hogar y estilo de vida." />
                        <StepCard number="2" title="Match" desc="Te asignamos un rescatado que se adapte a tu espacio (perro, gato, cachorro...)." />
                        <StepCard number="3" title="Acogida" desc="Lo recibes en casa hasta que se recupere o sea adoptado." />
                        <StepCard number="4" title="Adopción" desc="¡El momento agridulce! Se va a su hogar definitivo gracias a ti." />
                    </div>
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', padding: '4rem', background: '#f8f9fa', borderRadius: '1rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>¿Tienes un espacio libre en tu sofá?</h2>
                    <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Prometemos que aunque se vayan, la huella que dejan en tu corazón es para siempre.
                    </p>
                    <IonButton routerLink="/contacto" size="large" shape="round">
                        Quiero ser Hogar de Tránsito
                    </IonButton>
                </div>
            </div>
        </WebLayout>
    );
};

// Helper Components
const ListItem = ({ text }: { text: string }) => (
    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
        <span style={{ width: '6px', height: '6px', background: 'currentColor', borderRadius: '50%', marginRight: '10px' }}></span>
        {text}
    </li>
);

const check = checkmarkCircle; // Alias for cleaner usage above

const StepCard = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div style={{ width: '250px', textAlign: 'center' }}>
        <div style={{
            width: '50px', height: '50px', background: '#333', color: 'white',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1rem auto'
        }}>
            {number}
        </div>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{title}</h4>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>{desc}</p>
    </div>
);

export default HogarTransitoWeb;
