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

- [✅] La app corre con `pnpm dev` sin pantalla de error.
- [✅] La consola del navegador (F12) no muestra avisos en rojo.
- [✅] Se ve tu nombre en el pie de página.
- [✅] La tarjeta muestra tu canción con portada, año, reproducciones y `Lanzada hace ... años`.
- [✅] Guardaste el proyecto (o lo subiste a tu GitHub): la próxima clase seguimos con él.
