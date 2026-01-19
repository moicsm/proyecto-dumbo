# 📱 Header y Footer - Proyecto Dumbo

## ✅ Completado: Versión Web/Desktop

### 📁 Archivos Creados:

#### Header (Navbar)
- `src/components/Header/Header.tsx`
- `src/components/Header/Header.css`
- `src/components/Header/index.ts`

**Características:**
- Logo de Proyecto Dumbo (🐘) con tagline
- Navegación horizontal: Inicio, Adopciones, Donar, Sobre Nosotros
- Botón CTA "Apadrinar" destacado
- Sticky header (se queda fijo al hacer scroll)
- Efectos hover en navegación
- **Se oculta en móvil** (display: none en max-width: 768px)

#### Footer
- `src/components/Footer/Footer.tsx`
- `src/components/Footer/Footer.css`
- `src/components/Footer/index.ts`

**Características:**
- 4 columnas: Marca, Enlaces Rápidos, Ayuda, Contacto
- Redes sociales (Facebook, Instagram, Twitter)
- Información de contacto
- Botón "Donar Ahora" destacado
- Copyright y mensaje con corazón
- **Se oculta en móvil** (display: none en max-width: 768px)

---

## 🎯 Detección de Plataforma

Ambos componentes usan el hook `usePlatform()`:

```tsx
const { isDesktop } = usePlatform();

// Solo renderizar en desktop
if (!isDesktop) return null;
```

**Doble protección:**
1. JavaScript: `return null` si no es desktop
2. CSS: `display: none` en media query mobile

---

## 📲 Próximos Pasos: Versión Mobile

### Para Mobile/Tablet implementaremos:

**En lugar de Header:**
- Tabs de navegación inferior (IonTabs)
- O menú hamburguesa lateral (IonMenu)

**En lugar de Footer:**
- Footer minimalista o ninguno
- Info importante en el menú

---

## 🎨 Secciones de la App

Basándome en Proyecto Dumbo, estas son las secciones:

### Principales:
- 🏠 **Inicio** - Landing con hero y animales destacados
- 🐾 **Adopciones** - Catálogo completo de animales
- 💰 **Donar** - Página de donaciones
- ℹ️ **Sobre Nosotros** - Historia de la fundación

### Secundarias:
- ❤️ **Apadrinar** - Sistema de apadrinamiento
- 🎯 **Cómo Ayudar** - Opciones de colaboración
- 🏆 **Casos de Éxito** - Historias de adopciones
- 🙋 **Voluntariado** - Unirse como voluntario
- ❓ **FAQ** - Preguntas frecuentes

---

## 🔧 Cómo Funciona

### App.tsx actualizado:
```tsx
<IonApp>
  <IonReactRouter>
    <Header />  {/* Solo en desktop */}
    
    <IonRouterOutlet>
      {/* Rutas aquí */}
    </IonRouterOutlet>
    
    <Footer />  {/* Solo en desktop */}
  </IonReactRouter>
</IonApp>
```

### Behavior:
- **Desktop (>768px)**: Header arriba + Footer abajo
- **Mobile/Tablet (≤768px)**: Sin Header/Footer, usaremos tabs o menú

---

## 📊 Diseño Responsive

### Desktop (>1024px):
- Header completo con navegación horizontal
- Footer con 4 columnas

### Tablet (769-1024px):
- Header simplificado
- Footer con 2 columnas

### Mobile (≤768px):
- Header oculto → Usar tabs bottom
- Footer oculto → Info en menú

---

## ✨ Próximo: Navegación Mobile

Cuando estés listo, crearemos:

1. **IonTabs** para navegación inferior en mobile
2. **IonMenu** (opcional) para menú lateral
3. Adaptar Home y otras páginas para vista mobile

**¿Procedemos con la navegación mobile?** 📱
