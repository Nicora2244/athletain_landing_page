# Handoff: division de planes (/planes)

Rama: `Nicora2244/Division-de-planes` (sale de `main`). **Todavia no hay PR.**
Ultima actualizacion: 2026-10-05.

> Archivo temporal para continuar el trabajo desde otro PC. Borrarlo antes de abrir el PR a `main`.

## Como retomar

```bash
git fetch origin
git checkout Nicora2244/Division-de-planes
npm install
npm run dev -- --port 5180
# abrir http://localhost:5180/planes
```

## Contexto

En retroalimentacion dijeron que los planes de scout se sentian escondidos: la pagina `/planes`
usaba pestanas (Atleta / Caza talentos) que abrian en Atleta. Se probaron varias opciones con el
equipo y se decidio:

1. **Hero:** dos tarjetas "Soy atleta" / "Soy caza talentos" que bajan a los planes de cada uno.
2. **Planes:** apilados, sin pestanas. Atletas arriba (claro), scouts abajo (azul oscuro).
3. **Comparativa de funciones:** "por plan" — una tarjeta por plan con "Todo lo de X, mas:" y solo
   lo que ese plan agrega.

Despues se actualizaron los planes con el documento "athletain planes go to market.docx"
(Go to market, version 1): ahora son 3 planes por publico.

| Atleta | Precio | Scout | Precio |
|---|---|---|---|
| Athlete Starter | Gratis | Scout Pro | $100.000 COP / mes (primer mes gratis) |
| Athlete Pro | $20.000 COP / mes | Scout Elite | $300.000 COP / mes |
| Athlete Elite | $120.000 COP / mes | Scout Enterprise | Contactenos |

## Estado

Hecho y commiteado en esta rama:

- Diseno nuevo de `/planes` (hero con tarjetas, planes apilados, comparativa por plan).
- Planes, precios y funciones del documento.
- Paleta de marca como variables CSS en `src/index.css` (`--color-primary-*`, `--color-secondary-*`,
  `--color-tertiary-*`, `--color-neutral-*`), usadas en las partes nuevas de `/planes`.
- `npx tsc -b`, lint de `src/pages/Planes` y `vite build` pasan.

Archivos clave:

- `src/pages/Planes/plansData.ts` — **unica fuente** de planes, precios, funciones y avisos.
- `src/pages/Planes/plansAudience.ts` — tipo de publico e ids de seccion (`planes-atleta`, `planes-scout`).
- `src/pages/Planes/componentsPlanes/PlansHeroSection.tsx` — tarjetas del hero (el texto "desde" esta aqui, no en `plansData.ts`).
- `src/pages/Planes/componentsPlanes/PlansPricingSection.tsx` — tarjetas de precio.
- `src/pages/Planes/componentsPlanes/PlansCompareSection.tsx` — "que incluye cada plan".
- `src/pages/Planes/Planes.css` — estilos.

## Pendiente

### 1. Colores (prioridad) — "no cuadran"

Nicolas reviso el resultado y dijo que **los colores no cuadran**; hay que revisarlos. Todavia no
se definio que exactamente esta mal, asi que lo primero es preguntarle que ve mal.

Lo que se hizo, para tener de donde partir:

- La paleta de referencia es la imagen "Color Main.png" (Primary 100-500: `#81a2e6 #4274d9 #2351ac
  #16336d #0d1e41`; Secondary: `#ffb4a6 #fe694e #f22601 #bc1d01 #861501`; Tertiary: `#d7dff2
  #aebfe4 #7692d1 #3f66bd #2c4884`; Neutral 100 `#ffffff`, 200 `#e3e0e0`, 1000 `#070c11`).
- Solo se pasaron a la paleta las partes nuevas: tarjetas del hero, bloques de scout y la seccion
  "que incluye". Bloque scout: degradado primary-400 -> primary-500; botones y checks en
  secondary-200 con texto primary-500; etiquetas en secondary-100.
- **El resto de la pagina no usa la paleta** (hero original, tarjetas de atleta, boton "Acceder"
  `#9baed5`, fondo `#f1f3f8`, FAQ, formulario de contacto `#1e3d79`). Es posible que el desajuste
  venga de mezclar colores viejos con los de la paleta.

### 2. Confirmar con el equipo

- **Frases cortas de cada tarjeta de precio.** No estan en el documento; se adaptaron o escribieron:
  "Ser visto y empezar a medir", "Analizar y maximizar", "Rendimiento y proteccion juridica",
  "Descubrimiento y analisis", "Prediccion y priorizacion", "Integracion para clubes y academias".
- **Textos de las tarjetas del hero:** "Hazte visible y mide tu rendimiento", "Descubre y prioriza
  talento con datos", "Empieza gratis", "Desde $100.000 COP / mes · primer mes gratis".
- **Scout / Entrenador.** El documento propone dividir o renombrar el perfil; es una propuesta sin
  definir. Se dejo "caza talentos".
- **Scout Enterprise.** No se muestra como "Todo lo de Scout Elite, mas" porque el documento no lo
  dice. Confirmar si incluye lo de Elite. "Asesoria juridica" va sin cantidad, igual que el documento.
- **Athlete Pro** se muestra como "Todo lo de Athlete Starter, mas"; el documento lista sus
  funciones completas, pero contienen las de Starter.
- **Avisos publicados:** el de nutricion (atletas) y el de datos de sueno y alimentacion no visibles
  (scouts). Confirmar redaccion.
- **Notas internas del documento que NO se publicaron:** los "Pendiente: definir..." y las
  recomendaciones de lanzamiento.

### 3. Otros

- **Tildes y enes.** Todo el sitio escribe sin tildes ni ene ("nutricion", "sueno"); se siguio esa
  convencion. Recomendado corregirlo en todo el sitio en un cambio aparte.
- **Seccion "Encuentra el plan que impulsara tu carrera"** (`PlansDetailsSection.tsx`) y la foto del
  hero siguen hablandole solo al atleta.
- **Movil.** No se pudo revisar visualmente en ancho de telefono; el CSS tiene las reglas para apilar.
  Con 3 planes, entre 860px y 980px la grilla queda en 2 columnas y sobra una tarjeta sola.
- **Lint.** `npx eslint .` reporta un error en `src/components/Navbar/Navbar.tsx` (setState dentro
  de un effect). Ya existia y no es de este cambio.
- **Botones "Acceder" / "Contactenos"** de las tarjetas de precio no tienen accion (ya era asi).
- Abrir el PR a `main` cuando lo anterior este resuelto, y borrar este archivo.
