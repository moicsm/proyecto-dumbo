import { usePlatform } from '@/hooks/usePlatform';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import AporteEconomicoWeb from './AporteEconomicoWeb';
const AporteEconomicoMobile = () => {
    return <IonPage><IonHeader><IonToolbar><IonTitle>Aporte Económico</IonTitle></IonToolbar></IonHeader><IonContent className="ion-padding"><h1>Aporte Económico</h1><p>Próximamente</p></IonContent></IonPage>;
};

export const AporteEconomico = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <AporteEconomicoWeb /> : <AporteEconomicoMobile />;
};
