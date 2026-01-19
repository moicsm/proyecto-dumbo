import { usePlatform } from '@/hooks/usePlatform';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import DonarWeb from './DonarWeb';
const DonarMobile = () => {

    return <IonPage><IonHeader><IonToolbar><IonTitle>Donar Ahora</IonTitle></IonToolbar></IonHeader><IonContent className="ion-padding"><h1>Donar Ahora</h1><p>Próximamente</p></IonContent></IonPage>;
};

export const Donar = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <DonarWeb /> : <DonarMobile />;
};
