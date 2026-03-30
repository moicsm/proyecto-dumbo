import React from 'react';
import { usePlatform } from '@/hooks/usePlatform';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import AnimalDetailWeb from './AnimalDetailWeb';

const AnimalDetailMobile = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Detalle del Animal</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Detalle</h1>
                <p>Próximamente en mobile</p>
            </IonContent>
        </IonPage>
    );
};

export const AnimalDetail = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <AnimalDetailWeb /> : <AnimalDetailMobile />;
};
