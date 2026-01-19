import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

/**
 * NosotrosMobile - Vista mobile
 * TODO: Implementar contenido sobre la fundación
 */
export const NosotrosMobile = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Nosotros</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="ion-padding">
                    <h1>Nosotros</h1>
                    <p>Página en desarrollo - Próximamente</p>
                </div>
            </IonContent>
        </IonPage>
    );
};
