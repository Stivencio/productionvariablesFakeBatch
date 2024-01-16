type Interval = 'anual' | 'mensual' | 'semanal' | 'diario' | 'hora' | 'minutos'

export const unixGeneratorDate = (initialDate: number, finalDate: any, interval: Interval) => {
    const fechas: any = []

    switch (interval) {
        case 'semanal':
            let currentDate = initialDate;
            while (currentDate <= finalDate) {
                fechas.push(currentDate);
                currentDate += 604800; // 1 semana en segundos (7 días * 24 horas * 60 minutos * 60 segundos)
              }
              break;
        // Agregar otros intervalos aquí

        default:
            throw new Error(`Intervalo no soportado: ${interval}`);
    }
    return {
        fechas,
        longitud: fechas.length
    }
}