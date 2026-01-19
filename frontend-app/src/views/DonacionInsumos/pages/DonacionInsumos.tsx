import { usePlatform } from '@/hooks/usePlatform';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import DonacionInsumosWeb from './DonacionInsumosWeb';
const DonacionInsumosMobile = () => {

    return <IonPage><IonHeader><IonToolbar><IonTitle>Donación de Insumos</IonTitle></IonToolbar></IonHeader><IonContent className="ion-padding"><h1>Donación de Insumos</h1><p>Próximamente</p></IonContent></IonPage>;
};

export const DonacionInsumos = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <DonacionInsumosWeb /> : <DonacionInsumosMobile />;
};
