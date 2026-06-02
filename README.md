# Athletain — Landing Page

Landing page de Athletain: la plataforma que conecta talento deportivo con cazatalentos
mediante métricas e inteligencia artificial.

Construida con **React + TypeScript + Vite** y desplegada en **GitHub Pages**.

## Requisitos

- Node.js 18+ y npm

## Desarrollo

```bash
npm install     # instala dependencias
npm run dev     # levanta el servidor de desarrollo (http://localhost:5173)
```

## Scripts disponibles

| Script            | Descripción                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Servidor de desarrollo con recarga en caliente.  |
| `npm run build`   | Compila TypeScript y genera el build de producción en `dist/`. |
| `npm run preview` | Sirve localmente el build de producción.         |
| `npm run lint`    | Ejecuta ESLint sobre el proyecto.                |

## Estructura

```
src/
  components/      # Navbar y Footer compartidos
  pages/
    Home/          # Página de inicio
    Quienes_Somos/ # Sobre nosotros
    Planes/        # Planes y precios
  assets/          # Imágenes y fuentes
```

## Despliegue

El sitio se despliega automáticamente en GitHub Pages mediante el workflow
`.github/workflows/deploy.yml` al hacer push a la rama `main`.
