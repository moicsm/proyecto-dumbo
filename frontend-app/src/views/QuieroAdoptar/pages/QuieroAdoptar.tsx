import { usePlatform } from '@/hooks/usePlatform';
import QuieroAdoptarWeb from './QuieroAdoptarWeb';
import { QuieroAdoptarMobile } from './QuieroAdoptarMobile';

export const QuieroAdoptar = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <QuieroAdoptarWeb /> : <QuieroAdoptarMobile />;
};
