# Oppai Atelier — Sitio web

Sitio estático para Oppai Atelier (cosplays, props y figuras 3D 1:1).

## Cómo correrlo localmente

El sitio usa `fetch()` para leer `gallery/manifest.json`, así que **NO funciona abriendo el `.html` con doble click** (file://). Tenés que servirlo con un servidor local:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Después abrís `http://localhost:8000/Oppai%20Atelier.html`.

## Subirlo a GitHub Pages

1. Subí toda la carpeta a un repo de GitHub
2. Activá GitHub Pages en Settings → Pages → Source → `main` / root
3. Renombrá `Oppai Atelier.html` a `index.html` para que cargue en la URL raíz (o creá un `index.html` que redirija)

## Agregar imágenes a la galería

1. Poné el archivo en la subcarpeta correspondiente:
   - `gallery/cosplays/`
   - `gallery/props/`
   - `gallery/figuras/`
2. El nombre del archivo será el título que muestra la web (sin la extensión)
3. Editá `gallery/manifest.json` y agregá el nombre del archivo a la lista de la categoría

## Estructura

```
Oppai Atelier.html      ← entrada principal
styles.css
app.jsx                 ← root React
components/             ← UI partida en archivos JSX
assets/                 ← logo + foto hero + flyers
gallery/                ← imágenes de la galería
  manifest.json
  cosplays/
  props/
  figuras/
```
