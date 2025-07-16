
function obtenerDiaDelPadre(year) {
    // Crear una fecha para el 1 de junio del año dado
    const junio = new Date(year, 5, 1); // Los meses en JavaScript van de 0 a 11, así que 5 es junio.

    // Obtener el día de la semana del 1 de junio (0 = domingo, 1 = lunes, ..., 6 = sábado)
    const primerDiaSemana = junio.getDay();

    // Calcular cuántos días faltan para el primer domingo de junio
    let diasParaPrimerDomingo = 0;
    if (primerDiaSemana === 0) {
        diasParaPrimerDomingo = 0; // Si el 1 de junio ya es domingo, no hace falta mover la fecha
    } else {
        diasParaPrimerDomingo = 7 - primerDiaSemana; // Si no es domingo, calculamos el próximo domingo
    }

    // Fecha del primer domingo de junio
    junio.setDate(junio.getDate() + diasParaPrimerDomingo);

    // El tercer domingo será 14 días después del primer domingo
    junio.setDate(junio.getDate() + 14);

    return junio;
}

// Ejemplo: Obtener el Día del Padre para el año 2024
const year = 2024;
const diaDelPadre = obtenerDiaDelPadre(year);

// Mostrar el resultado en la consola
console.log("El Día del Padre en ${year} es: ${diaDelPadre.toLocaleDateString()")