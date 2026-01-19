# 🔗 Conectar con GitHub

## Si ya creaste el repositorio en GitHub:

1. Copia la URL de tu repositorio (algo como: https://github.com/tu-usuario/proyecto-dumbo.git)

2. En tu terminal (en la carpeta Proyecto-dumbo), ejecuta:

```bash
# Agregar el remote (reemplaza con TU URL)
git remote add origin https://github.com/TU-USUARIO/proyecto-dumbo.git

# Renombrar la rama a 'main' (estándar actual)
git branch -M main

# Subir el código
git push -u origin main
```

## ¿Primera vez usando GitHub desde esta computadora?

Git te pedirá autenticación. Tienes dos opciones:

### Opción 1: GitHub Desktop (Más fácil)
- Descarga GitHub Desktop: https://desktop.github.com/
- Inicia sesión
- Sube el repo desde ahí

### Opción 2: Personal Access Token (Recomendado)

1. Ve a GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Generate new token (classic)
3. Dale permisos: `repo` (todos)
4. Copia el token generado
5. Cuando Git pida password, usa el TOKEN (no tu contraseña)

## Verificar que funcionó

```bash
git remote -v
```

Deberías ver:
```
origin  https://github.com/tu-usuario/proyecto-dumbo.git (fetch)
origin  https://github.com/tu-usuario/proyecto-dumbo.git (push)
```

## Subir cambios futuros

```bash
# Ver qué cambió
git status

# Agregar cambios
git add .

# Commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push
```

## Comandos útiles

```bash
# Ver historial de commits
git log --oneline

# Ver estado actual
git status

# Ver ramas
git branch

# Crear nueva rama (para features)
git checkout -b nombre-de-rama

# Cambiar de rama
git checkout main
```
