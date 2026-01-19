import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { medkit } from 'ionicons/icons';

const DonacionInsumosWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Donación de Insumos</h1>
                <p className="page-subtitle">
                    No todo es dinero. Necesitamos materiales y alimentos día a día.
                </p>
            </div>
            <div className="page-container">
                <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '1rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Lista de Deseos (Wishlist)</h2>
                    <IonList lines="full">
                        <IonItem>
                            <IonIcon icon={medkit} slot="start" />
                            <IonLabel>Comida Seca (Perro y Gato, cualquier marca)</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={medkit} slot="start" />
                            <IonLabel>Comida Húmeda (Latas)</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={medkit} slot="start" />
                            <IonLabel>Toallas viejas y sábanas</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={medkit} slot="start" />
                            <IonLabel>Clorox y detergente de piso</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={medkit} slot="start" />
                            <IonLabel>Periódicos</IonLabel>
                        </IonItem>
                    </IonList>
                </div>
            </div>
        </WebLayout>
    );
};
export default DonacionInsumosWeb;
