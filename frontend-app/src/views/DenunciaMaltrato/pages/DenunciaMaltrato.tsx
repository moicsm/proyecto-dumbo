import { usePlatform } from '@/hooks/usePlatform';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import DenunciaMaltratoWeb from './DenunciaMaltratoWeb';
const DenunciaMaltratoMobile = () => {

    return <IonPage><IonHeader><IonToolbar><IonTitle>Denuncia Maltrato</IonTitle></IonToolbar></IonHeader><IonContent className="ion-padding"><h1>Denuncia Maltrato</h1><p>Próximamente</p></IonContent></IonPage>;
};

export const DenunciaMaltrato = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <DenunciaMaltratoWeb /> : <DenunciaMaltratoMobile />;
};
