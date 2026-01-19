import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton } from '@ionic/react';

const VoluntariosWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Sé Voluntario</h1>
                <p className="page-subtitle">
                    Dona tu tiempo y talento. Necesitamos paseadores, fotógrafos, y ayuda en eventos.
                </p>
            </div>
            <div className="page-container">
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                    <IonButton routerLink="/contacto">Llenar Solicitud</IonButton>
                </div>
            </div>
        </WebLayout>
    );
};
export default VoluntariosWeb;
