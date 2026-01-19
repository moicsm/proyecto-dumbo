import { Route } from 'react-router-dom';

// Páginas
import { Home } from '@/views/Home/pages/Home';
import { Nosotros } from '@/views/Nosotros/pages/Nosotros';
import { QuieroAdoptar } from '@/views/QuieroAdoptar/pages/QuieroAdoptar';
import { RequisitosAdopcion } from '@/views/RequisitosAdopcion/pages/RequisitosAdopcion';
import { Castra } from '@/views/Castra/pages/Castra';
import { DenunciaMaltrato } from '@/views/DenunciaMaltrato/pages/DenunciaMaltrato';
import { Voluntarios } from '@/views/Voluntarios/pages/Voluntarios';
import { HogarTransito } from '@/views/HogarTransito/pages/HogarTransito';
import { Tienda } from '@/views/Tienda/pages/Tienda';
import { AporteEconomico } from '@/views/AporteEconomico/pages/AporteEconomico';
import { DonacionInsumos } from '@/views/DonacionInsumos/pages/DonacionInsumos';
import { Contacto } from '@/views/Contacto/pages/Contacto';
import { Donar } from '@/views/Donar/pages/Donar';

/**
 * Definición de todas las rutas de la aplicación
 */
export const routes = [
    // Home
    { path: '/', component: Home, exact: true },
    { path: '/home', component: Home, exact: true },

    // Nosotros
    { path: '/nosotros', component: Nosotros, exact: true },

    // Adoptá
    { path: '/quiero-adoptar', component: QuieroAdoptar, exact: true },
    { path: '/requisitos-adopcion', component: RequisitosAdopcion, exact: true },

    // Salvá vidas
    { path: '/castra', component: Castra, exact: true },
    { path: '/denuncia-maltrato', component: DenunciaMaltrato, exact: true },

    // Participá
    { path: '/voluntarios', component: Voluntarios, exact: true },
    { path: '/hogar-transito', component: HogarTransito, exact: true },

    // Tienda
    { path: '/tienda', component: Tienda, exact: true },

    // Donaciones
    { path: '/aporte-economico', component: AporteEconomico, exact: true },
    { path: '/donacion-insumos', component: DonacionInsumos, exact: true },

    // Contacto
    { path: '/contacto', component: Contacto, exact: true },

    // Donar (CTA button)
    { path: '/donar', component: Donar, exact: true },
];

/**
 * Renderiza todas las rutas
 */
export const AppRoutes = () => (
    <>
        {routes.map((route, index) => (
            <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
            />
        ))}
    </>
);
