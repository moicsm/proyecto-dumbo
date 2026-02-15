import { usePlatform } from '@/hooks/usePlatform';
import ConocelosWeb from './ConocelosWeb';
import { ConocelosMobile } from './ConocelosMobile';

export const Conocelos = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <ConocelosWeb /> : <ConocelosMobile />;
};
