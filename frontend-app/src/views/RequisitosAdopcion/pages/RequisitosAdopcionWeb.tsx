import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { checkmarkCircle } from 'ionicons/icons';

const RequisitosAdopcionWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Requisitos de Adopción</h1>
                <p className="page-subtitle">
                    Queremos asegurarnos de que nuestras mascotas vayan a los mejores hogares posibles.
                </p>
            </div>

            <div className="page-container" style={{ maxWidth: '800px' }}>
                <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Antes de adoptar, ten en cuenta:</h2>

                    <IonList lines="none">
                        {[
                            'Ser mayor de 21 años.',
                            'Tener la aprobación de todos los miembros del hogar.',
                            'Si vives alquilado, permiso escrito del dueño de la propiedad.',
                            'Capacidad económica para cubrir alimentación y gastos veterinarios.',
                            'Tiempo disponible para dedicarle a la mascota (paseos, juegos, atención).',
                            'Compromiso de esterilización (si el animal es muy joven aún).',
                            'Llenar el formulario de pre-adopción y pasar una entrevista.'
                        ].map((req, i) => (
                            <IonItem key={i} style={{ marginBottom: '1rem' }}>
                                <IonIcon icon={checkmarkCircle} slot="start" color="primary" />
                                <IonLabel className="ion-text-wrap">{req}</IonLabel>
                            </IonItem>
                        ))}
                    </IonList>

                    <div style={{ marginTop: '2rem', textAlign: 'center', background: '#f0f9ff', padding: '1.5rem', borderRadius: '8px' }}>
                        <p style={{ fontWeight: 'bold', color: '#0066cc' }}>
                            La cuota de adopción es de $40.00 para gatos y $60.00 para perros.
                        </p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            Incluye: Vacunas al día, desparasitación y esterilización.
                        </p>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default RequisitosAdopcionWeb;
