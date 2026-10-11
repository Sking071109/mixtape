import Controles from "./Controles.jsx";
import Siguiente from "./Siguiente.jsx";
import {
    titulo,
    artista,
    album,
    duracion,
    anio,
    reproducciones,
    portada,
} from "../data/cancion.js";

function TarjetaCancion() {
    return (
        <article className="tarjeta">
            <img src={portada} alt="Portada del álbum" className="tarjeta-portada" />
            <h2 className="tarjeta-titulo">{titulo}</h2>
            <p className="tarjeta-artista">{artista}</p>
            <p className="tarjeta-detalle">Álbum: {album}</p>
            <p className="tarjeta-detalle">Duración: {duracion}</p>
            <p className="tarjeta-detalle">Año: {anio}</p>
            <p className="tarjeta-detalle">Reproducciones: {reproducciones}</p>
            <p className="tarjeta-detalle">Lanzada hace {2026 - anio} años</p>
            <Controles />
            <Siguiente />
        </article>
    );
}

export default TarjetaCancion;
