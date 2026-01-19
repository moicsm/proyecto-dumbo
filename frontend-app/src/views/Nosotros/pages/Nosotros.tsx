import { usePlatform } from '@/hooks/usePlatform';
import NosotrosWeb from './NosotrosWeb';
import { NosotrosMobile } from './NosotrosMobile';

/**
 * Nosotros - Información de la fundación
 */
export const Nosotros = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <NosotrosWeb /> : <NosotrosMobile />;
};
