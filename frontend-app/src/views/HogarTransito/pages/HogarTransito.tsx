import { usePlatform } from '@/hooks/usePlatform';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import HogarTransitoWeb from './HogarTransitoWeb';
const HogarTransitoMobile = () => {
    return <IonPage><IonHeader><IonToolbar><IonTitle>Hogar de Tránsito</IonTitle></IonToolbar></IonHeader><IonContent className="ion-padding"><h1>Hogar de Tránsito</h1><p>Próximamente</p></IonContent></IonPage>;
};

export const HogarTransito = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <HogarTransitoWeb /> : <HogarTransitoMobile />;
};
