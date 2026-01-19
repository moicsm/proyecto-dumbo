import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton } from '@ionic/react';

const QuieroAdoptarWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Adopta un amigo</h1>
                <p className="page-subtitle">
                    Al adoptar un animal, estás salvando dos vidas: la del que adoptas y la del que ocupará su lugar en el refugio.
                </p>
            </div>

            <div className="page-container">
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🐕🐈</div>
                    <h2 style={{ marginBottom: '1rem' }}>Buscador de Mascotas en Construcción</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#666' }}>
                        Estamos renovando nuestro catálogo digital. Muy pronto podrás ver todos nuestros perros y gatos disponibles para adopción en tiempo real.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <IonButton routerLink="/requisitos-adopcion" fill="outline">
                            Ver Requisitos
                        </IonButton>
                        <IonButton routerLink="/contacto">
                            Contáctanos para Visitar
                        </IonButton>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default QuieroAdoptarWeb;
