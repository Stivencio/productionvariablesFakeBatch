export const generateRandomValue = (min, max) => {
    if (min >= max) {
        throw new Error('El valor mínimo debe ser menor que el valor máximo');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}