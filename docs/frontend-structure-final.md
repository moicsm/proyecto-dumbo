# 🎯 Estructura Final del Frontend - Proyecto Dumbo

## 📁 Estructura Completa

```
frontend-app/
├── public/
│   ├── logo-dog.png
│   └── assets/
│
├── src/
│   ├── components/                    # Componentes compartidos
│   │   ├── web/                       # Solo Desktop/Web
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.css
│   │   │   │   └── index.ts
│   │   │   └── Footer/
│   │   │       ├── Footer.tsx
│   │   │       ├── Footer.css
│   │   │       └── index.ts
│   │   │
│   │   ├── mobile/                    # Solo Mobile
│   │   │   ├── Tabs/
│   │   │   │   ├── Tabs.tsx
│   │   │   │   ├── Tabs.css
│   │   │   │   └── index.ts
│   │   │   └── Menu/
│   │   │       ├── Menu.tsx
│   │   │       └── index.ts
│   │   │
│   │   └── shared/                    # Compartidos (web + mobile)
│   │       ├── Button/
│   │       │   ├── Button.tsx
│   │       │   ├── Button.css
│   │       │   └── index.ts
│   │       ├── Card/
│   │       ├── Input/
│   │       ├── Modal/
│   │       └── Loading/
│   │
│   ├── pages/                         # Todas las páginas
│   │   ├── Home/
│   │   │   ├── pages/
│   │   │   │   ├── Home.tsx           # Decide web/mobile
│   │   │   │   ├── HomeWeb.tsx
│   │   │   │   └── HomeMobile.tsx
│   │   │   ├── components/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── FeaturedAnimals.tsx
│   │   │   │   └── StatsSection.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useHomeStats.ts
│   │   │   ├── services/
│   │   │   │   └── home.service.ts
│   │   │   ├── types/
│   │   │   │   └── home.types.ts
│   │   │   └── utils/
│   │   │       └── calculateStats.ts
│   │   │
│   │   ├── Nosotros/
│   │   │   ├── pages/
│   │   │   │   ├── Nosotros.tsx
│   │   │   │   ├── NosotrosWeb.tsx
│   │   │   │   └── NosotrosMobile.tsx
│   │   │   └── types/
│   │   │       └── nosotros.types.ts
│   │   │
│   │   ├── QuieroAdoptar/
│   │   │   ├── pages/
│   │   │   │   ├── QuieroAdoptar.tsx
│   │   │   │   ├── QuieroAdoptarWeb.tsx
│   │   │   │   └── QuieroAdoptarMobile.tsx
│   │   │   ├── components/
│   │   │   │   ├── AdoptionForm.tsx
│   │   │   │   ├── AnimalSelector.tsx
│   │   │   │   └── RequirementsList.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useAdoptionForm.ts
│   │   │   │   └── useAnimalSelection.ts
│   │   │   ├── services/
│   │   │   │   └── adoption.service.ts
│   │   │   ├── types/
│   │   │   │   └── adoption.types.ts
│   │   │   └── utils/
│   │   │       └── validateAdoption.ts
│   │   │
│   │   ├── RequisitosAdopcion/
│   │   │   ├── pages/
│   │   │   │   ├── RequisitosAdopcion.tsx
│   │   │   │   ├── RequisitosAdopcionWeb.tsx
│   │   │   │   └── RequisitosAdopcionMobile.tsx
│   │   │   ├── components/
│   │   │   │   └── RequirementCard.tsx
│   │   │   └── types/
│   │   │       └── requirement.types.ts
│   │   │
│   │   ├── Castra/
│   │   │   ├── pages/
│   │   │   │   ├── Castra.tsx
│   │   │   │   ├── CastraWeb.tsx
│   │   │   │   └── CastraMobile.tsx
│   │   │   ├── components/
│   │   │   │   ├── CastraForm.tsx
│   │   │   │   └── CastraInfo.tsx
│   │   │   ├── services/
│   │   │   │   └── castra.service.ts
│   │   │   └── types/
│   │   │       └── castra.types.ts
│   │   │
│   │   ├── DenunciaMaltrato/
│   │   │   ├── pages/
│   │   │   │   ├── DenunciaMaltrato.tsx
│   │   │   │   ├── DenunciaMaltratoWeb.tsx
│   │   │   │   └── DenunciaMaltratoMobile.tsx
│   │   │   ├── components/
│   │   │   │   ├── ReportForm.tsx
│   │   │   │   └── EvidenceUpload.tsx
│   │   │   ├── services/
│   │   │   │   └── report.service.ts
│   │   │   └── types/
│   │   │       └── report.types.ts
│   │   │
│   │   ├── Voluntarios/
│   │   │   ├── pages/
│   │   │   │   ├── Voluntarios.tsx
│   │   │   │   ├── VoluntariosWeb.tsx
│   │   │   │   └── VoluntariosMobile.tsx
│   │   │   ├── components/
│   │   │   │   ├── VolunteerForm.tsx
│   │   │   │   └── VolunteerInfo.tsx
│   │   │   ├── services/
│   │   │   │   └── volunteer.service.ts
│   │   │   └── types/
│   │   │       └── volunteer.types.ts
│   │   │
│   │   ├── HogarTransito/
│   │   │   ├── pages/
│   │   │   │   ├── HogarTransito.tsx
│   │   │   │   ├── HogarTransitoWeb.tsx
│   │   │   │   └── HogarTransitoMobile.tsx
│   │   │   ├── components/
│   │   │   │   ├── FosterForm.tsx
│   │   │   │   └── FosterInfo.tsx
│   │   │   ├── services/
│   │   │   │   └── foster.service.ts
│   │   │   └── types/
│   │   │       └── foster.types.ts
│   │   │
│   │   ├── Tienda/
│   │   │   ├── pages/
│   │   │   │   ├── Tienda.tsx
│   │   │   │   ├── TiendaWeb.tsx
│   │   │   │   └── TiendaMobile.tsx
│   │   │   ├── components/
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductGrid.tsx
│   │   │   │   ├── ShoppingCart.tsx
│   │   │   │   └── Checkout.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useProducts.ts
│   │   │   │   ├── useCart.ts
│   │   │   │   └── useCheckout.ts
│   │   │   ├── services/
│   │   │   │   ├── products.service.ts
│   │   │   │   ├── cart.service.ts
│   │   │   │   └── checkout.service.ts
│   │   │   ├── types/
│   │   │   │   ├── product.types.ts
│   │   │   │   ├── cart.types.ts
│   │   │   │   └── order.types.ts
│   │   │   └── utils/
│   │   │       ├── calculateTotal.ts
│   │   │       └── formatPrice.ts
│   │   │
│   │   ├── AporteEconomico/
│   │   │   ├── pages/
│   │   │   │   ├── AporteEconomico.tsx
│   │   │   │   ├── AporteEconomicoWeb.tsx
│   │   │   │   └── AporteEconomicoMobile.tsx
│   │   │   ├── components/
│   │   │   │   ├── DonationForm.tsx
│   │   │   │   ├── PaymentMethods.tsx
│   │   │   │   ├── RecurringOption.tsx
│   │   │   │   └── DonationSummary.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useDonationForm.ts
│   │   │   │   └── usePaymentMethods.ts
│   │   │   ├── services/
│   │   │   │   └── donation.service.ts
│   │   │   ├── types/
│   │   │   │   └── donation.types.ts
│   │   │   └── utils/
│   │   │       └── validatePayment.ts
│   │   │
│   │   ├── DonacionInsumos/
│   │   │   ├── pages/
│   │   │   │   ├── DonacionInsumos.tsx
│   │   │   │   ├── DonacionInsumosWeb.tsx
│   │   │   │   └── DonacionInsumosMobile.tsx
│   │   │   ├── components/
│   │   │   │   ├── SuppliesForm.tsx
│   │   │   │   └── SuppliesList.tsx
│   │   │   ├── services/
│   │   │   │   └── supplies.service.ts
│   │   │   └── types/
│   │   │       └── supplies.types.ts
│   │   │
│   │   ├── Contacto/
│   │   │   ├── pages/
│   │   │   │   ├── Contacto.tsx
│   │   │   │   ├── ContactoWeb.tsx
│   │   │   │   └── ContactoMobile.tsx
│   │   │   ├── components/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   └── ContactInfo.tsx
│   │   │   ├── services/
│   │   │   │   └── contact.service.ts
│   │   │   └── types/
│   │   │       └── contact.types.ts
│   │   │
│   │   └── Donar/
│   │       ├── pages/
│   │       │   ├── Donar.tsx
│   │       │   ├── DonarWeb.tsx
│   │       │   └── DonarMobile.tsx
│   │       ├── components/
│   │       │   ├── QuickDonation.tsx
│   │       │   └── DonationOptions.tsx
│   │       ├── hooks/
│   │       │   └── useDonation.ts
│   │       ├── services/
│   │       │   └── quickDonation.service.ts
│   │       ├── types/
│   │       │   └── quickDonation.types.ts
│   │       └── utils/
│   │           └── validateAmount.ts
│   │
│   ├── lib/                           # Configuración base compartida
│   │   ├── api/
│   │   │   ├── client.ts              # Axios config (baseURL, headers)
│   │   │   ├── interceptors.ts        # Auth, error handling
│   │   │   └── endpoints.ts           # URLs base (opcional)
│   │   └── config/
│   │       └── env.ts                 # Variables de entorno
│   │
│   ├── hooks/                         # Hooks globales ultra-genéricos
│   │   ├── usePlatform.ts             # Detectar web/mobile
│   │   └── useAuth.ts                 # Auth global (si existe)
│   │
│   ├── layouts/                       # Layouts wrapper (opcional)
│   │   ├── WebLayout.tsx              # Header + Footer wrapper
│   │   └── MobileLayout.tsx           # Tabs wrapper
│   │
│   ├── router/                        # Configuración de rutas
│   │   └── routes.tsx                 # Todas las rutas
│   │
│   ├── styles/                        # Estilos globales
│   │   ├── global.css                 # Reset, variables CSS
│   │   ├── theme.css                  # Ionic theme
│   │   └── variables.css              # CSS variables
│   │
│   ├── assets/                        # Assets estáticos
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── App.tsx                        # Componente raíz
│   ├── App.css
│   ├── main.tsx                       # Entry point
│   └── vite-env.d.ts
│
├── tsconfig.json                      # TypeScript config
├── vite.config.ts                     # Vite config
├── package.json
└── README.md
```

---

## 🎯 Resumen por Niveles

### Nivel 1: Componentes Compartidos
```
components/
├── web/          # Header, Footer (solo desktop)
├── mobile/       # Tabs, Menu (solo mobile)
└── shared/       # Button, Card, Input (ambos)
```

### Nivel 2: Páginas (13 total)
Cada página tiene:
```
pages/[NombrePagina]/
├── pages/        # Vistas web/mobile
├── components/   # Componentes propios
├── hooks/        # Hooks propios
├── services/     # Services propios
├── types/        # Types propios
└── utils/        # Utils propios
```

### Nivel 3: Configuración Global
```
lib/              # Config API base
hooks/            # usePlatform, useAuth
styles/           # CSS global
router/           # Rutas
```

---

## 📋 Páginas Detalladas

| # | Página | Ruta | Complejidad |
|---|--------|------|-------------|
| 1 | Home | `/` | Alta (stats, hero, featured) |
| 2 | Nosotros | `/nosotros` | Baja (solo info) |
| 3 | QuieroAdoptar | `/quiero-adoptar` | Alta (formulario) |
| 4 | RequisitosAdopcion | `/requisitos-adopcion` | Media (info + cards) |
| 5 | Castra | `/castra` | Media (info + form) |
| 6 | DenunciaMaltrato | `/denuncia-maltrato` | Alta (form + upload) |
| 7 | Voluntarios | `/voluntarios` | Media (form) |
| 8 | HogarTransito | `/hogar-transito` | Media (form) |
| 9 | Tienda | `/tienda` | Alta (e-commerce) |
| 10 | AporteEconomico | `/aporte-economico` | Alta (payment) |
| 11 | DonacionInsumos | `/donacion-insumos` | Media (form) |
| 12 | Contacto | `/contacto` | Baja (form simple) |
| 13 | Donar | `/donar` | Alta (quick donation) |

---

## 🚀 Path Aliases Recomendados

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["src/components/*"],
      "@/pages/*": ["src/pages/*"],
      "@/lib/*": ["src/lib/*"],
      "@/hooks/*": ["src/hooks/*"],
      "@/styles/*": ["src/styles/*"],
      "@/assets/*": ["src/assets/*"]
    }
  }
}
```

**Imports:**
```tsx
// Componentes compartidos
import { Header } from '@/components/web/Header';
import { Button } from '@/components/shared/Button';

// Página
import { Home } from '@/pages/Home/pages/Home';

// API config
import { apiClient } from '@/lib/api/client';

// Hooks globales
import { usePlatform } from '@/hooks/usePlatform';
```

---

## 📊 Estadísticas

- **13 Páginas** (cada una auto-contenida)
- **~65-78 archivos** de vistas (3 por página simple, 6 por compleja)
- **~40-60 componentes** específicos de página
- **~25-35 services** distribuidos
- **~20-30 hooks** personalizados
- **3-5 componentes** compartidos globales

---

## ✅ Ventajas de esta Estructura

1. ✅ **Modular** - Cada página independiente
2. ✅ **Escalable** - Agrega páginas sin afectar otras
3. ✅ **Organizada** - Estructura consistente
4. ✅ **Mantenible** - Fácil encontrar código
5. ✅ **Elimina duplicación** - Componentes compartidos separados
6. ✅ **Web + Mobile** - Vistas separadas por plataforma
7. ✅ **TypeScript** - Types específicos por página

---

## 🎯 Próximos Pasos

1. Crear estructura de carpetas
2. Configurar path aliases en tsconfig
3. Migrar componentes actuales
4. Crear páginas una por una
5. Implementar routing

**Esta es tu estructura final definitiva!** 🚀
