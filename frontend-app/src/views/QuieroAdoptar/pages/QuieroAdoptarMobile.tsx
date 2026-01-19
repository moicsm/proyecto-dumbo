import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

export const QuieroAdoptarMobile = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar><IonTitle>Quiero Adoptar</IonTitle></IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Quiero Adoptar</h1>
                <p>Formulario de adopción - Próximamente</p>
            </IonContent>
        </IonPage>
    );
};
