import { usePlatform } from '@/hooks/usePlatform';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import TiendaWeb from './TiendaWeb';
const TiendaMobile = () => {
    return <IonPage><IonHeader><IonToolbar><IonTitle>Tienda</IonTitle></IonToolbar></IonHeader><IonContent className="ion-padding"><h1>Tienda</h1><p>Próximamente</p></IonContent></IonPage>;
};

export const Tienda = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <TiendaWeb /> : <TiendaMobile />;
};
