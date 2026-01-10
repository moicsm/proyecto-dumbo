# 🚀 Guía de Setup - Proyecto Fundación

## Requisitos Previos

- Node.js v18+ (recomendado v20+)
- npm v9+
- Git
- Editor de código (VS Code recomendado)

## Instalación Inicial

### 1. Clonar el repositorio

```bash
git clone <url-del-repo-privado>
cd proyecto-dumbo
```

### 2. Instalar dependencias del Frontend

```bash
cd frontend-app
npm install
```

### 3. Configurar variables de entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar .env con tus valores (por ahora, los valores por defecto están bien)
```

## Ejecutar en Desarrollo

### Frontend

```bash
cd frontend-app
npm start
```

La aplicación se abrirá en `http://localhost:8100`

### Ver en modo móvil

El navegador mostrará la vista mobile automáticamente. Puedes cambiar el tamaño de la ventana o usar DevTools para simular diferentes dispositivos.

## Estructura del Proyecto

```
proyecto-dumbo/
├── frontend-app/
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/          # Páginas de la app
│   │   ├── services/       # Servicios (API calls)
│   │   ├── data/           # Datos mock (temporal)
│   │   ├── models/         # Tipos TypeScript
│   │   ├── contexts/       # React Context (estado global)
│   │   └── hooks/          # Custom hooks
│   └── public/             # Archivos estáticos
├── database/               # Scripts SQL (futuramente)
└── docs/                   # Documentación
```

## Datos Mock

Por ahora, la aplicación usa datos hardcoded en `src/data/mockData.ts`.

Esto permite desarrollar el frontend sin necesidad del backend.

**Cuando conectemos el backend:**
- Solo cambiaremos `src/services/animalService.ts`
- El resto del código quedará igual

## Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Build para producción
npm run build

# Preview del build de producción
npm run preview

# Tests
npm test

# Linting
npm run lint
```

## Próximos Pasos

1. ✅ Setup completado
2. 🔄 Diseñar componentes y páginas
3. 🔄 Implementar navegación
4. ⏳ Conectar backend (después)
5. ⏳ Build para Android/iOS

## Problemas Comunes

### Puerto 8100 ocupado

```bash
# Cambiar puerto en vite.config.ts
server: {
  port: 8200
}
```

### Node modules desactualizados

```bash
rm -rf node_modules package-lock.json
npm install
```

## Recursos

- [Ionic Docs](https://ionicframework.com/docs)
- [React Docs](https://react.dev)
- [Capacitor Docs](https://capacitorjs.com/docs)
