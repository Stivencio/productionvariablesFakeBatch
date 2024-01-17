import * as fs from 'fs'
import { formatUnixDate } from "./helpers/formatUnixDate";
import { generateRandomValue } from "./helpers/generateRandomValue";
import { unixGeneratorDate } from "./helpers/unixGenerator";

function fakeDataGenerator(inicio, final) {
  const dataFakeArray = [];
    for (let i = 0; i < inicio.length; i++) {
    const objectREAL = {
      _id: "id_REAL",
      insertDate: formatUnixDate(inicio[i]),
      startDate: inicio[i],
      endDate: final[i],
      value: generateRandomValue(0,200),
      measureType: "REAL",
      timestamp: inicio[i]
    };
    const objectPROJECTED = {
      _id: "id_PROJECTED",
      insertDate: formatUnixDate(inicio[i]),
      startDate: inicio[i],
      endDate: final[i],
      value: generateRandomValue(1000,2000),
      measureType: "PROJECTED",
      timestamp: inicio[i]
    };
    
    dataFakeArray.push(objectREAL, objectPROJECTED);
  }
  
  return dataFakeArray;
}
// Unix de primer timestamp
const responseStart = unixGeneratorDate(1704067200, 1734912000, 'semanal')
// Unix de segundo timestamp
const responseEnd = unixGeneratorDate(1704652799, 1735497599, 'semanal')


const inicio = responseStart.fechas
const final = responseEnd.fechas
const fakeData = fakeDataGenerator(inicio, final)
const jsonData = JSON.stringify(fakeData, null, 2)
const filePath = './dataFake/exportedFakeData.txt'
fs.writeFileSync(filePath,jsonData)
console.log(`FakeData guardada en: ${filePath}`)


