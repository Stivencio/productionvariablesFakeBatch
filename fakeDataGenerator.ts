import { formatUnixDate } from "./helpers/formatUnixDate";
import { generateRandomValue } from "./helpers/generateRandomValue";
import { unixGeneratorDate } from "./helpers/unixGenerator";

function fakeDataGenerator(inicio, final) {
  console.log('inicio: ', inicio)
  console.log('final: ', final)

  const dataFakeArray = [];
    for (let i = 0; i < inicio.length; i++) {
    const objectREAL = {
      _id: "id_REAL",
      insertDate: formatUnixDate(inicio[i]),
      startDate: inicio[i],
      endDate: final[i],
      value: generateRandomValue(),
      measureType: "REAL",
      timestamp: inicio[i]
    };
    const objectPROJECTED = {
      _id: "id_PROJECTED",
      insertDate: formatUnixDate(inicio[i]),
      startDate: inicio[i],
      endDate: final[i],
      value: generateRandomValue(),
      measureType: "PROJECTED",
      timestamp: inicio[i]
    };
    
    dataFakeArray.push(objectREAL, objectPROJECTED);
  }
  
  return dataFakeArray;
}

const responseStart = unixGeneratorDate(1704067200, 1734912000, 'semanal')
const inicio = responseStart.fechas
const largo = responseStart.longitud

const responseEnd = unixGeneratorDate(1704652799, 1735497599, 'semanal')
const final = responseEnd.fechas

console.log(fakeDataGenerator(inicio, final))


