import { usePlatform } from '@/hooks/usePlatform';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import VoluntariosWeb from './VoluntariosWeb';
const VoluntariosMobile = () => {
    return <IonPage><IonHeader><IonToolbar><IonTitle>Voluntarios</IonTitle></IonToolbar></IonHeader><IonContent className="ion-padding"><h1>Voluntarios</h1><p>Próximamente</p></IonContent></IonPage>;
};

export const Voluntarios = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <VoluntariosWeb /> : <VoluntariosMobile />;
};
