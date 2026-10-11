# 🎧 Mixtape — Tu primera app en React

Los turnos en la Estación Umbral son largos y en el hangar solo se oye metal y soldadura. Nova quiere música mientras trabaja, así que la tripulación va a construir su propia app de música: **Mixtape**.

Este proyecto te acompaña **todo el Módulo 1**. Cada clase le agregamos piezas nuevas, así que guárdalo bien (idealmente en tu GitHub): la próxima clase arrancamos desde donde lo dejes hoy.

Hoy montamos la primera pieza: una tarjeta que muestra la canción que está sonando.

---

## 🛠️ Cómo arrancar el proyecto
# 🎧 Home Challenge — Mixtape, turno de noche

Nova pasó por el hangar, escuchó la canción de tu tarjeta y dejó tres comentarios:

- "No dice quién la armó."
- "Falta saber de cuándo es y cuánta gente la ha escuchado."
- "Esa canción es de otro. Pon la tuya."

Hoy no creas un proyecto nuevo: **sigues trabajando en el Mixtape que hiciste en clase**. La próxima clase lo usamos otra vez, así que lo que dejes hecho hoy es lo que tendrás mañana.

**Tiempo estimado:** entre 45 y 60 minutos.

---

## 🚀 Antes de empezar

1. Abre en VS Code la carpeta de tu proyecto de clase.
2. En la terminal, arranca el servidor:

```bash
pnpm dev
```

3. Abre la dirección que muestra la terminal (normalmente `http://localhost:5173`) y déjala abierta mientras trabajas. Cada vez que guardes un archivo, la página se actualiza sola.

Si la página sale en blanco o aparece una pantalla de error, lee el mensaje de Vite y abre la consola del navegador (F12). Casi siempre te dice el archivo y la línea del problema.

---

## 🎫 Tickets

### Ticket 1 — El pie de página

**Archivos:** `src/components/PiePagina.jsx` (nuevo) y `src/App.jsx`

Crea un componente nuevo que muestre quién hizo la app.

1. En `src/components/` crea el archivo `PiePagina.jsx`.
2. Escribe la función `PiePagina`. Adentro, guarda tu nombre en una variable y devuelve un `<footer>` con la clase `pie`:

```jsx
const autor = "Tu nombre";
```

El texto del `<footer>` debe decir: `Hecho por` + tu nombre + `· Estación Umbral`. Tu nombre tiene que salir de la variable, con llaves.

3. Expórtalo con `export default`.
4. En `App.jsx`, impórtalo y muéstralo dentro del `<main>`, justo debajo de `<TarjetaCancion />`.

**Pista:** copia la estructura de `Encabezado.jsx`. Es el mismo patrón: función, un solo elemento padre y `export default` al final.

**Listo cuando:** debajo de la tarjeta aparece tu nombre en letra pequeña.

---

### Ticket 2 — Más datos para la tarjeta

**Archivos:** `src/data/cancion.js` y `src/components/TarjetaCancion.jsx`

La tarjeta todavía no muestra el año ni las reproducciones.

1. En `cancion.js` agrega dos exports nombrados:

```js
export const anio = 2019;
export const reproducciones = 48200;
```

2. En `TarjetaCancion.jsx`, agrégalos al `import` y muéstralos debajo de la duración, cada uno en su propio párrafo con la clase `tarjeta-detalle`:

```jsx
<p className="tarjeta-detalle">Año: {anio}</p>
<p className="tarjeta-detalle">Reproducciones: {reproducciones}</p>
```

3. Agrega un tercer párrafo con una operación dentro de las llaves, que muestre cuántos años lleva publicada la canción: `Lanzada hace 7 años`. El 7 no se escribe a mano: sale de restar el año de la canción a 2026.

**Pista:** en clase hiciste algo parecido con `{combustible * 3}`. Dentro de las llaves puede ir una resta: `{2026 - anio}`.

**Listo cuando:** la tarjeta muestra el año, las reproducciones y `Lanzada hace 7 años`.

---

### Ticket 3 — Tu canción

**Archivos:** `src/data/cancion.js`, `public/portadas/` y `src/index.css`

Ahora la tarjeta pasa a ser tuya.

1. Elige tu canción favorita. En `cancion.js`, cambia el valor de `titulo`, `artista`, `album`, `duracion`, `anio` y `reproducciones`. Si no sabes alguno, invéntalo.
2. Busca la portada del álbum, guárdala en la carpeta `public/portadas/` con un nombre sin espacios (por ejemplo `mi-cancion.jpg`) y cambia `portada` para que apunte a ella:

```js
export const portada = "/portadas/mi-cancion.jpg";
```

3. En `src/index.css`, busca la regla `.logo` y cambia el color a uno que te guste.

**Pista:** si la portada no aparece, revisa que el nombre del archivo sea exactamente igual en la carpeta y en `cancion.js`, con mayúsculas y extensión incluidas.

**Listo cuando:** la tarjeta muestra tu canción con su portada, y el logo tiene tu color.

---

### ⭐ Bonus — La siguiente canción

**Archivos:** `src/data/cancion.js`, `src/components/Siguiente.jsx` (nuevo) y `src/components/TarjetaCancion.jsx`

1. En `cancion.js` agrega los datos de la canción que sigue:

```js
export const siguienteTitulo = "Nombre de la canción";
export const siguienteArtista = "Nombre del artista";
```

2. Crea el componente `Siguiente.jsx`. Importa esos dos datos y devuelve un `<p>` con la clase `siguiente` que diga: `Sigue:` + título + `—` + artista.
3. Expórtalo, impórtalo en `TarjetaCancion.jsx` y muéstralo al final de la tarjeta, debajo de lo último que haya ahí.

---

## 🎨 Estilos que necesitas

Pega esto **al final de `src/index.css`**. Sin esto, el pie de página y la siguiente canción se ven sin estilo:

```css
/* ── Pie de página (tarea) ── */
.pie {
    text-align: center;
    color: #8aa4c2;
    font-size: 0.85rem;
}

/* ── Siguiente canción (bonus) ── */
.siguiente {
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid #1d3350;
    color: #8aa4c2;
    font-size: 0.9rem;
}
```

---

## ✅ Antes de terminar

- [ ] La app corre con `pnpm dev` sin pantalla de error.
- [ ] La consola del navegador (F12) no muestra avisos en rojo.
- [ ] Se ve tu nombre en el pie de página.
- [ ] La tarjeta muestra tu canción con portada, año, reproducciones y `Lanzada hace ... años`.
- [ ] Guardaste el proyecto (o lo subiste a tu GitHub): la próxima clase seguimos con él.
1. Descomprime el proyecto y ábrelo en VS Code.
2. Abre la terminal: menú **Terminal → New Terminal**.
3. Instala las dependencias (crea la carpeta `node_modules`):

```bash
pnpm install
```

4. Arranca el servidor:

```bash
pnpm dev
```

5. Abre la dirección que muestra la terminal, normalmente `http://localhost:5173` (Ctrl + clic).
6. Para apagarlo: **Ctrl + C** en la terminal.

> ⚠️ La primera vez vas a ver una pantalla de error. Es a propósito: arreglarla es el Ticket 1.

**Si algo falla:**

- **La página sale en blanco:** abre la consola del navegador (F12 → Console) y lee el error.
- **El puerto 5173 está ocupado:** Vite toma otro solo. Usa la dirección que muestra la terminal.
- **`node -v` muestra una versión menor a 20.19:** descarga la versión LTS desde [nodejs.org](https://nodejs.org).

---

## 🗂️ Estructura del proyecto

```
mixtape/
├── public/
│   └── portadas/               ← imágenes de las portadas
├── src/
│   ├── components/
│   │   ├── Encabezado.jsx      ← 🎫 Ticket 2
│   │   └── TarjetaCancion.jsx  ← 🎫 Ticket 1 y 3
│   ├── data/
│   │   └── cancion.js          ← los datos de la canción
│   ├── App.jsx                 ← 🎫 Ticket 2
│   ├── index.css               ← estilos (ya listos, no los toques)
│   └── main.jsx                ← monta la app (no se toca)
└── index.html
```

---

## 🎫 Tickets

### Ticket 1 — Reparar la tarjeta

**Archivo:** `src/components/TarjetaCancion.jsx`

La tarjeta tiene **3 errores de JSX**. Arréglalos uno por uno.

**Pistas:**

- Lee la pantalla de error de Vite: te dice el archivo y qué etiqueta está fallando.
- Cuando la pantalla de error desaparezca, abre la consola (F12). Si hay un aviso en rojo, ahí hay otro error.
- Repasa las reglas de JSX de la clase: cómo se cierran las etiquetas, cómo se escribe `class` y cómo se muestra el valor de una variable.

**Listo cuando:** la tarjeta muestra la portada, el título **"Luces del Hangar"** (no la palabra "titulo") y la consola no tiene avisos.

---

### Ticket 2 — Conectar el encabezado

**Archivos:** `src/components/Encabezado.jsx` y `src/App.jsx`

El componente `Encabezado` ya está escrito, pero tiene dos problemas y nadie lo está usando.

1. En `Encabezado.jsx`, envuelve el `h1` y el `p` en un `<header className="encabezado">`.
2. Agrega `export default Encabezado;` al final del archivo.
3. En `App.jsx`, impórtalo:

```jsx
import Encabezado from "./components/Encabezado.jsx";
```

4. Muéstralo dentro del `<main>`, justo arriba de `<TarjetaCancion />`.

**Listo cuando:** arriba de la tarjeta aparece el logo **Mixtape** con su frase.

---

### Ticket 3 — Los datos, desde afuera

**Archivos:** `src/components/TarjetaCancion.jsx` y `src/data/cancion.js`

La tarjeta tiene los datos escritos adentro, pero ya existen en `src/data/cancion.js` como exports nombrados.

1. En `TarjetaCancion.jsx`, borra las tres constantes (`titulo`, `artista` y `portada`).
2. Impórtalas al principio del archivo:

```jsx
import { titulo, artista, portada } from "../data/cancion.js";
```

Los `../` son porque `TarjetaCancion.jsx` está dentro de `components/`: primero sales a `src/` y desde ahí entras a `data/`.

3. En `cancion.js` hay dos datos más que la tarjeta no muestra: `album` y `duracion`. Agrégalos al `import` y muéstralos debajo del artista, cada uno en su párrafo:

```jsx
<p className="tarjeta-detalle">Álbum: {album}</p>
<p className="tarjeta-detalle">Duración: {duracion}</p>
```

**Listo cuando:** la tarjeta se ve igual que antes, más el álbum y la duración, y `TarjetaCancion.jsx` ya no tiene datos escritos a mano.

---

### ⭐ Bonus — Los controles del reproductor

Crea un componente nuevo: `src/components/Controles.jsx`.

- Una función `Controles` que devuelva este JSX:

```jsx
<div className="controles">
    <button className="boton-control">⏮</button>
    <button className="boton-control">▶</button>
    <button className="boton-control">⏭</button>
</div>
```

- Expórtalo por defecto, impórtalo en `TarjetaCancion.jsx` y muéstralo al final de la tarjeta, después de la duración.

Los estilos ya están en `index.css`. Los botones todavía no hacen nada: en la lección 3 les damos vida.

---

## ✅ Antes de terminar

- [✅] La app corre con `pnpm dev` sin pantalla de error.
- [✅] La consola (F12) no muestra avisos en rojo.
- [✅] Se ven el encabezado y la tarjeta con título, artista, álbum y duración.
- [✅] Guardaste el proyecto (o lo subiste a tu GitHub): lo necesitas la próxima clase.
