import { usePlatform } from '@/hooks/usePlatform';
import { HomeWeb } from './HomeWeb';
import { HomeMobile } from './HomeMobile';

/**
 * Home - Página principal
 * Decide qué vista mostrar según la plataforma
 */
export const Home = () => {
    const { isDesktop } = usePlatform();

    return isDesktop ? <HomeWeb /> : <HomeMobile />;
};
