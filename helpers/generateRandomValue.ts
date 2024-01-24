export const generateRandomValue = (min: number, max: number, decimalPlaces: number = 0) => {
    if (min >= max) {
        throw new Error('El valor mínimo debe ser menor que el valor máximo');
    }

    const randomDecimal = Math.random() * (max - min) + min;
    const factor = Math.pow(10, decimalPlaces);
    const roundedRandom = Math.round(randomDecimal * factor) / factor;

    return roundedRandom;
}