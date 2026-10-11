import { siguienteTitulo, siguienteArtista } from "../data/cancion.js";

function Siguiente() {
    return (
        <p className="siguiente">
            Sigue: {siguienteTitulo} — {siguienteArtista}
        </p>
    );
}

export default Siguiente;
