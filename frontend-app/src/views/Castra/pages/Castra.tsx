import { usePlatform } from '@/hooks/usePlatform';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import CastraWeb from './CastraWeb';
const CastraMobile = () => {
    return <IonPage><IonHeader><IonToolbar><IonTitle>Castra</IonTitle></IonToolbar></IonHeader><IonContent className="ion-padding"><h1>Castra</h1><p>Próximamente</p></IonContent></IonPage>;
};

export const Castra = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <CastraWeb /> : <CastraMobile />;
};
