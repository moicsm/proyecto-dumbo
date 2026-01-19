import { isPlatform } from '@ionic/react';
import { useEffect, useState } from 'react';

/**
 * Hook personalizado para detectar la plataforma actual
 * Útil para renderizar componentes diferentes según device
 */
export const usePlatform = () => {
    const [platform, setPlatform] = useState({
        isDesktop: isPlatform('desktop'),
        isMobile: isPlatform('mobile'),
        isTablet: isPlatform('tablet'),
        isIOS: isPlatform('ios'),
        isAndroid: isPlatform('android'),
    });

    useEffect(() => {
        // Actualizar si cambia el tamaño de ventana
        const handleResize = () => {
            setPlatform({
                isDesktop: isPlatform('desktop'),
                isMobile: isPlatform('mobile'),
                isTablet: isPlatform('tablet'),
                isIOS: isPlatform('ios'),
                isAndroid: isPlatform('android'),
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return platform;
};
