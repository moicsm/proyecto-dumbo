import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonIcon, IonButton } from '@ionic/react';
import { medkit, nutrition, home, location, time, cart } from 'ionicons/icons';

const DonacionInsumosWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Donación de Insumos</h1>
                <p className="page-subtitle">
                    Tu ayuda material nos permite seguir alimentando y curando. <br />
                    Mira nuestra lista de necesidades prioritarias.
                </p>
            </div>

            <div className="page-container">
                {/* Wishlist Grid */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>¿Qué necesitamos hoy?</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Alimentos */}
                        <VoteCard
                            icon={nutrition}
                            category="Alimentación"
                            items={['Alimento Perro (Adulto/Cachorro)', 'Alimento Gato (Adulto/Kitten)', 'Latas de comida húmeda', 'Leche maternizada']}
                            color="#ff6b00"
                        />

                        {/* Farmacia */}
                        <VoteCard
                            icon={medkit}
                            category="Farmacia"
                            items={['Desparasitantes', 'Gasas y vendas', 'Povidona yorudada', 'Antibióticos (según receta)']}
                            color="#e91e63"
                        />

                        {/* Limpieza y Hogar */}
                        <VoteCard
                            icon={home}
                            category="Limpieza y Confort"
                            items={['Clorox y Desinfectantes', 'Escobas y palas', 'Toallas y sábanas viejas', 'Collares y correas']}
                            color="#2196f3"
                        />
                    </div>
                </div>

                {/* Drop-off Locations */}
                <div style={{ background: 'white', border: '1px solid #eee', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <div style={{ padding: '3rem', flex: 1 }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>📍 Centro de Acopio</h3>
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', marginBottom: '1rem', alignItems: 'flex-start' }}>
                                    <IonIcon icon={location} style={{ fontSize: '24px', color: '#ff6b00', marginRight: '1rem', marginTop: '3px' }} />
                                    <div>
                                        <strong>Dirección Principal:</strong>
                                        <p style={{ margin: '0.5rem 0', color: '#666' }}>Calle Falsa 123, Santurce<br />San Juan, PR 00907</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <IonIcon icon={time} style={{ fontSize: '24px', color: '#ff6b00', marginRight: '1rem', marginTop: '3px' }} />
                                    <div>
                                        <strong>Horario de recepción:</strong>
                                        <p style={{ margin: '0.5rem 0', color: '#666' }}>Lunes a Sábado: 9:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
                                <h4 style={{ display: 'flex', alignItems: 'center', margin: 0, marginBottom: '0.5rem' }}>
                                    <IonIcon icon={cart} style={{ marginRight: '0.5rem' }} />
                                    ¿Compras online?
                                </h4>
                                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                                    Puedes hacer tu pedido en Amazon o PetSmart y enviarlo directamente a nuestra dirección.
                                </p>
                            </div>
                        </div>
                        {/* Map placeholder */}
                        <div style={{ flex: 1, minHeight: '300px', background: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid #eee' }}>
                            <p style={{ color: '#adb5bd', fontWeight: 'bold' }}>Mapa de Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

// Helper Component
const VoteCard = ({ icon, category, items, color }: { icon: any, category: string, items: string[], color: string }) => (
    <div style={{
        padding: '2rem',
        borderRadius: '12px',
        background: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        borderTop: `4px solid ${color}`
    }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{
                padding: '10px',
                borderRadius: '8px',
                background: `${color}15`,
                marginRight: '1rem'
            }}>
                <IonIcon icon={icon} style={{ fontSize: '24px', color: color }} />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.3rem' }}>{category}</h3>
        </div>
        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            {items.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '0.8rem', color: '#555' }}>{item}</li>
            ))}
        </ul>
    </div>
);

export default DonacionInsumosWeb;
