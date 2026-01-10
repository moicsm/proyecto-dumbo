# 🐾 Fundación de Animales - Proyecto Dumbo

Aplicación híbrida (Web + Mobile) para fundación de animales rescatados.

## 📱 Descripción

Plataforma para:
- Mostrar catálogo de animales rescatados
- Aceptar donaciones con múltiples métodos de pago
- Sistema de apadrinamiento de mascotas
- Notificaciones push para padrinos
- Suscripciones recurrentes

## 🏗️ Arquitectura

Este es un **monorepo** que contiene:

```
proyecto-dumbo/
├── frontend-app/     # Ionic + React (Web + Mobile)
├── backend-api/      # NestJS API REST
├── database/         # Scripts SQL
└── docs/            # Documentación
```

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Ionic 7
- **UI Library**: React 18
- **Language**: TypeScript
- **Mobile**: Capacitor 5
- **State**: React Context API
- **HTTP Client**: Axios

### Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **ORM**: TypeORM
- **Auth**: JWT + Passport
- **Validation**: class-validator

### Base de Datos
- **Database**: PostgreSQL 15+

### Servicios Externos
- **Pagos**: Stripe, PayPal, Binance Pay
- **Notificaciones**: Firebase Cloud Messaging
- **Storage**: Cloudinary (imágenes)

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js v18+ (actualmente usando v22.13.0)
- npm v9+
- PostgreSQL 15+
- Git

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd proyecto-dumbo

# Instalar dependencias del frontend
cd frontend-app
npm install

# Volver a raíz e instalar dependencias del backend
cd ../backend-api
npm install
```

### Configuración

1. **Backend**: Crear archivo `.env` basado en `.env.example`
2. **Frontend**: Crear archivo `.env` basado en `.env.example`
3. **Base de datos**: Ejecutar migraciones

### Ejecutar en Desarrollo

```bash
# Terminal 1 - Backend
cd backend-api
npm run start:dev

# Terminal 2 - Frontend
cd frontend-app
npm start
```

## 📂 Estructura del Proyecto

Ver documentación detallada en cada subcarpeta:
- [Frontend](./frontend-app/README.md)
- [Backend](./backend-api/README.md)
- [Database](./database/README.md)

## 🔐 Seguridad

- ❌ **NUNCA** commitear archivos `.env`
- ❌ **NUNCA** subir claves de API o secretos
- ✅ Usar `.env.example` como plantillas
- ✅ Configurar secretos en el servidor de producción

## 📝 Documentación

- [Guía de Setup](./docs/setup.md)
- [API Documentation](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)
- [Seguridad](./docs/security.md)

## 👨‍💻 Desarrollo

Este proyecto está en desarrollo activo.

**Estado actual**: 🚧 En construcción

## 📄 Licencia

Proyecto privado - Todos los derechos reservados
