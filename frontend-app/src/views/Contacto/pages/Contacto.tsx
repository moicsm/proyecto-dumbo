import { usePlatform } from '@/hooks/usePlatform';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import ContactoWeb from './ContactoWeb';
const ContactoMobile = () => {
    return <IonPage><IonHeader><IonToolbar><IonTitle>Contacto</IonTitle></IonToolbar></IonHeader><IonContent className="ion-padding"><h1>Contacto</h1><p>Próximamente</p></IonContent></IonPage>;
};

export const Contacto = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <ContactoWeb /> : <ContactoMobile />;
};
