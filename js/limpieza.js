const fs = require('fs');
const path = require('path');

function limpiarProyecciones() {
    const rutaJs = path.join('js', 'movies.js');
    console.log(`[${new Date().toISOString()}] Iniciando limpieza de proyecciones...`);

    if (!fs.existsSync(rutaJs)) {
        console.error(`Error: No se encuentra el archivo en ${rutaJs}`);
        return;
    }

    let contenido = fs.readFileSync(rutaJs, 'utf8');

    // Extraemos la parte del array y el prefijo (ej. "const movies = ")
    const inicioArray = contenido.indexOf('[');
    const finArray = contenido.lastIndexOf(']') + 1;

    if (inicioArray === -1 || finArray === 0) {
        console.error("Error: No se pudo localizar el array de películas en el archivo.");
        return;
    }

    const prefijo = contenido.substring(0, inicioArray);
    const textoArray = contenido.substring(inicioArray, finArray);

    let movies;
    try {
        // Como estamos en Node.js, evaluamos el texto de forma segura para cargar el array de objetos
        movies = eval(`(${textoArray})`);
    } catch (e) {
        console.error("Error al parsear el array de movies.js con Node.js:", e.message);
        return;
    }

    const ahora = new Date();
    let totalEliminadas = 0;

    movies.forEach(movie => {
        if (!movie.screenings) return;

        const screeningsValidos = [];
        const sesionesBorradas = [];

        movie.screenings.forEach(screening => {
            const fechaHoraStr = `${screening.date}T${screening.time}:00`;
            const fechaScreening = new Date(fechaHoraStr);

            if (fechaScreening >= ahora) {
                screeningsValidos.append ? screeningsValidos.push(screening) : screeningsValidos.push(screening);
            } else {
                totalEliminadas++;
                sesionesBorradas.push(`Cine: ${screening.cinema} | Fecha/Hora: ${screening.date} ${screening.time}`);
            }
        });

        if (sesionesBorradas.length > 0) {
            console.log(`\nSe ha borrado la sesión de la peli: **${movie.title || 'Desconocida'}**`);
            console.log("Se han borrado estas sesiones:");
            sesionesBorradas.forEach(s => console.log(`   - ${s}`));
        }

        movie.screenings = screeningsValidos;
    });

    // Reconstruimos el archivo manteniendo el formato original exacto
    const nuevoJson = JSON.stringify(movies, null, 4);
    const contenidoFinal = prefijo + nuevoJson;

    fs.writeFileSync(rutaJs, contenidoFinal, 'utf8');
    console.log(`\n--- Limpieza completada con éxito ---`);
    console.log(`Se han eliminado un total de ${totalEliminadas} proyecciones pasadas en js/movies.js.`);
}

limpiarProyecciones();