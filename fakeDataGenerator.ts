import * as fs from 'fs'
import { formatUnixDate } from "./helpers/formatUnixDate";
import { generateRandomValue } from "./helpers/generateRandomValue";
import { unixGeneratorDate } from "./helpers/unixGenerator";

function fakeDataGenerator(inicio, final, _id) {
  const dataFakeArray = [];
    for (let i = 0; i < inicio.length; i++) {
    const objectREAL = {
      _id: `${_id}_REAL`,
      insertDate: formatUnixDate(inicio[i]),
      startDate: inicio[i],
      endDate: final[i],
      value: generateRandomValue(0,200),
      measureType: "REAL",
      timestamp: inicio[i]
    };
    const objectPROJECTED = {
      _id: `${_id}_PROJECTED`,
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

// Recibe fecha de inicio y fin en formato unix y el intérvalo de tiempo
const response = unixGeneratorDate(1704067200, 1735497599, 'WEEK')

const inicio = response.fechasInicio
const final = response.fechasFin
const fakeData = fakeDataGenerator(inicio, final, '65a6bfd3de7cb55de5b345c8')
const jsonData = JSON.stringify(fakeData, null, 2)
const filePath = './dataFake/exportedFakeData.txt'
fs.writeFileSync(filePath,jsonData)
console.log(`FakeData guardada en: ${filePath}`)


