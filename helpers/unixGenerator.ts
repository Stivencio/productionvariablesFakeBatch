import { Interval } from "../types/IntervalT";

export const unixGeneratorDate = (initialDate: number, finalDate: any, interval: Interval) => {
    const fechasInicio: number[] = []
    const fechasFin: number[] = []

    switch (interval) {
        case 'YEAR':
            let currentDateYear = initialDate;
            while (currentDateYear <= finalDate) {
                // Obtener el último día del año
                const lastDayOfYear = new Date(new Date(currentDateYear * 1000).getFullYear() + 1, 0, 0);
                fechasInicio.push(currentDateYear);
                fechasFin.push(lastDayOfYear.getTime() / 1000 + 86399); // Fin del día (último segundo del día)

                // Mover al primer día del próximo año
                currentDateYear = new Date(new Date(currentDateYear * 1000).getFullYear() + 1, 0, 1).getTime() / 1000;
            }
            break;
        case 'MONTH':
            let currentDateMonth = initialDate;
            while (currentDateMonth <= finalDate) {
                // Obtener el último día del mes
                const lastDayOfMonth = new Date(new Date(currentDateMonth * 1000).getFullYear(), new Date(currentDateMonth * 1000).getMonth() + 1, 0);
                fechasInicio.push(currentDateMonth);
                fechasFin.push(lastDayOfMonth.getTime() / 1000 + 86399); // Fin del día (último segundo del día)
                
                // Mover al primer día del próximo mes
                currentDateMonth = new Date(new Date(currentDateMonth * 1000).getFullYear(), new Date(currentDateMonth * 1000).getMonth() + 1, 1).getTime() / 1000;
            }
            break;
        case 'WEEK':
            let currentDateWeek = initialDate;
            while (currentDateWeek <= finalDate) {
                fechasInicio.push(currentDateWeek);
                fechasFin.push(currentDateWeek + 604799); // Fin de la semana (1 semana en segundos - 1 segundo)
                currentDateWeek += 604800; // 1 semana en segundos (7 días * 24 horas * 60 minutos * 60 segundos)
              }
            break;
        case 'DAY':
                let currentDateDay = initialDate;
                while (currentDateDay <= finalDate) {
                fechasInicio.push(currentDateDay);
                fechasFin.push(currentDateDay + 86399); // Fin del día (último segundo del día)
                currentDateDay += 86400; // 1 día en segundos (24 horas * 60 minutos * 60 segundos)
                }
            break;        
        case 'HOUR':
            let currentDateHour = initialDate;
            while (currentDateHour <= finalDate) {
            fechasInicio.push(currentDateHour);
            fechasFin.push(currentDateHour + 3599); // Fin de la hora (3600 - 1)
            currentDateHour += 3600; // 1 hora en segundos (60 minutos * 60 segundos)
            }
            break;         
        case '15 MINUTES':
            let currentDateQuarterHour = initialDate;
            while (currentDateQuarterHour <= finalDate) {
            fechasInicio.push(currentDateQuarterHour);
            fechasFin.push(currentDateQuarterHour + 899); // Fin de los 15 minutos (900 - 1)
            currentDateQuarterHour += 900; // 15 minutos en segundos (15 minutos * 60 segundos)
            }
            break;       
        case '1 MINUTE':
            let currentDateMinute = initialDate;
            while (currentDateMinute <= finalDate) {
            fechasInicio.push(currentDateMinute);
            fechasFin.push(currentDateMinute + 59); // Fin del minuto (60 - 1)
            currentDateMinute += 60; // 1 minuto en segundos (1 minutos * 60 segundos)
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