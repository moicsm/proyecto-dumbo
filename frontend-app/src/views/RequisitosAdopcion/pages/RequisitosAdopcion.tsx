import { usePlatform } from '@/hooks/usePlatform';
import RequisitosAdopcionWeb from './RequisitosAdopcionWeb';
import { RequisitosAdopcionMobile } from './RequisitosAdopcionMobile';

export const RequisitosAdopcion = () => {
    const { isDesktop } = usePlatform();
    return isDesktop ? <RequisitosAdopcionWeb /> : <RequisitosAdopcionMobile />;
};
