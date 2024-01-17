import { Interval } from "../types/IntervalT";

export const unixGeneratorDate = (initialDate: number, finalDate: any, interval: Interval) => {
    const fechasInicio: number[] = []
    const fechasFin: number[] = []

    switch (interval) {
        case 'WEEK':
            let currentDate = initialDate;
            while (currentDate <= finalDate) {
                fechasInicio.push(currentDate);
                fechasFin.push(currentDate + 604799); // Fin de la semana (1 semana en segundos - 1 segundo)
                currentDate += 604800; // 1 semana en segundos (7 días * 24 horas * 60 minutos * 60 segundos)
              }
              break;
        // Agregar otros intervalos aquí
        default:
            throw new Error(`Intervalo no soportado: ${interval}`);
    }
    return {
        fechasInicio,
        fechasFin,
        longitud: fechasInicio.length
    }
}