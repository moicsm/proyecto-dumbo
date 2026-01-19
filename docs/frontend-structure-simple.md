# 🎯 Estructura React Recomendada 2024-2025 (Simplificada)

## Basada en las mejores prácticas actuales de la comunidad

Según las fuentes más recientes, aquí está la estructura más simple y efectiva:

---

## 📁 ESTRUCTURA RECOMENDADA (Por tipo de archivo + Colocalización)

```
src/
├── app/                    # 🎯 Configuración raíz de la app
│   ├── App.tsx
│   ├── App.css
│   └── router.tsx          # O routes.tsx
│
├── components/             # 🧩 Componentes UI reutilizables
│   ├── ui/                 # Componentes básicos de UI
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── Badge/
│   │
│   └── layout/             # Componentes de estructura
│       ├── Header/
│       ├── Footer/
│       ├── Sidebar/
│       └── Container/
│
├── pages/                  # 📄 Páginas/Vistas (1 archivo = 1 ruta)
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   └── components/     # Componentes SOLO de esta página
│   │       ├── HeroSection.tsx
│   │       └── StatsSection.tsx
│   │
│   ├── Animals/
│   │   ├── Animals.tsx
│   │   ├── Animals.css
│   │   └── components/
│   │       ├── AnimalCard.tsx
│   │       ├── AnimalGrid.tsx
│   │       └── AnimalFilters.tsx
│   │
│   ├── Adoptions/
│   ├── Donations/
│   └── Contact/
│
├── hooks/                  # 🪝 Custom hooks compartidos
│   ├── usePlatform.ts
│   ├── useAuth.ts
│   ├── useFetch.ts
│   └── useLocalStorage.ts
│
├── services/               # 🔌 API calls y servicios externos
│   ├── api.ts              # Configuración axios/fetch
│   ├── animalService.ts
│   ├── donationService.ts
│   └── authService.ts
│
├── types/                  # 📐 TypeScript types/interfaces
│   ├── animal.ts
│   ├── donation.ts
│   ├── user.ts
│   └── common.ts
│
├── utils/                  # 🛠️ Funciones helper puras
│   ├── formatters.ts       # formatDate, formatCurrency
│   ├── validators.ts       # validations
│   └── constants.ts        # Constantes globales
│
├── context/                # 🌐 React Context para estado global
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
│
├── styles/                 # 🎨 Estilos globales
│   ├── global.css
│   ├── variables.css
│   └── theme.css
│
├── assets/                 # 📦 Archivos estáticos
│   ├── images/
│   ├── icons/
│   └── fonts/
│
└── main.tsx               # ⚡ Entry point
```

---

## ✨ PRINCIPIOS CLAVE

### 1. **Colocalización** (Co-location)
> "Pon los archivos cerca de donde se usan"

- Componentes usados solo en 1 página → Van en `pages/X/components/`
- Componentes reutilizables → Van en `components/`
- CSS junto al componente → `Component.tsx` + `Component.css`

### 2. **Carpetas por Tipo** (Para tu caso)
- Simple y directo
- Fácil de encontrar cosas
- Menos anidación innecesaria
- Perfecto para equipos pequeños/medianos

### 3. **Separación Clara**
```
components/  → UI (qué se ve)
services/    → API (datos externos)
utils/       → Funciones (lógica pura)
hooks/       → React hooks (lógica con estado)
pages/       → Rutas (composición)
```

---

## 📋 EJEMPLO PRÁCTICO: Página de Animales

```
src/pages/Animals/
├── Animals.tsx              # Página principal
├── Animals.css              # Estilos de la página
│
└── components/              # Solo usados aquí
    ├── AnimalCard.tsx       # Card individual
    ├── AnimalGrid.tsx       # Grid de cards
    ├── AnimalFilters.tsx    # Filtros laterales
    └── AnimalDetail.tsx     # Modal de detalle
```

**Animals.tsx:**
```tsx
import { AnimalCard } from './components/AnimalCard';
import { AnimalGrid } from './components/AnimalGrid';
import { Button } from '@/components/ui/Button';  // Componente compartido
import { animalService } from '@/services/animalService';  // Servicio
import { Animal } from '@/types/animal';  // Type
```

---

## 🎯 CUÁNDO USAR CADA CARPETA

| Carpeta | Cuando usarla |
|---------|---------------|
| `components/ui/` | Botones, inputs, cards genéricos que se usan en TODA la app |
| `components/layout/` | Header, Footer, Sidebar que estructuran las páginas |
| `pages/X/` | 1 página = 1 carpeta |
| `pages/X/components/` | Componentes usados SOLO en esa página |
| `hooks/` | Custom hooks que se reusan en 2+ lugares |
| `services/` | Llamadas a API, localStorage, etc |
| `utils/` | Funciones puras sin dependencias de React |
| `types/` | Interfaces TypeScript compartidas |

---

## 💡 VENTAJAS de esta estructura

✅ **Simple** - No necesitas entender "features" o "domains"  
✅ **Escalable** - Puedes tener 50 páginas sin problema  
✅ **Familiar** - La mayoría de devs la entienden inmediatamente  
✅ **Flexible** - Fácil mover componentes entre shared/page-specific  
✅ **DX** - Developer Experience excelente con imports absolutos  

---

## ⚙️ CONFIGURACIÓN IMPORTANTE

### tsconfig.json - Path Aliases
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["src/components/*"],
      "@/pages/*": ["src/pages/*"],
      "@/hooks/*": ["src/hooks/*"],
      "@/services/*": ["src/services/*"],
      "@/utils/*": ["src/utils/*"],
      "@/types/*": ["src/types/*"],
      "@/assets/*": ["src/assets/*"]
    }
  }
}
```

### Imports limpios:
```tsx
// ❌ Antes
import { Button } from '../../../components/ui/Button';

// ✅ Después
import { Button } from '@/components/ui/Button';
```

---

## 📦 PATRÓN DE CARPETA POR COMPONENTE

Cada componente tiene TODO lo relacionado:

```
Button/
├── Button.tsx              # Componente
├── Button.css              # Estilos
├── Button.test.tsx         # Tests
├── Button.stories.tsx      # Storybook (opcional)
└── index.ts                # Barrel export
```

**index.ts:**
```ts
export { Button } from './Button';
export type { ButtonProps } from './Button';
```

**Importar:**
```tsx
import { Button } from '@/components/ui/Button';
```

---

## 🚀 PRÓXIMOS PASOS PARA TU PROYECTO

### Fase 1: Limpieza (1-2 horas)
- [ ] Eliminar carpetas duplicadas (AppHeader, AppFooter)
- [ ] Consolidar en Header/ y Footer/ únicos
- [ ] Mover ExploreContainer si no se usa

### Fase 2: Reorganizar (2-3 horas)
- [ ] Crear `components/ui/` y mover componentes genéricos
- [ ] Crear `components/layout/` para Header/Footer
- [ ] Crear carpetas de páginas: `pages/Home/`, `pages/Animals/`

### Fase 3: Configurar (30 min)
- [ ] Agregar path aliases en tsconfig.json
- [ ] Actualizar imports a `@/components/*`

### Fase 4: Types y Services (1 hora)
- [ ] Mover modelos a `types/`
- [ ] Organizar servicios en `services/`

---

## 🎓 REFERENCIAS

- [React Official Docs - File Structure](https://react.dev/learn/thinking-in-react#step-1-break-the-ui-into-a-component-hierarchy)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)
- [Web Dev Simplified - React Folder Structure](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)

---

## ❓ CONCLUSIÓN

Esta estructura es:
- ✅ Más simple que "feature-based"
- ✅ Probada por miles de proyectos
- ✅ Recomendada por la comunidad 2024-2025
- ✅ Perfecta para tu proyecto de fundación

**¿Te gusta más esta estructura?** Es mucho más práctica y directa.
