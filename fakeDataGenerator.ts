import * as fs from 'fs'
import { formatUnixDate } from "./helpers/formatUnixDate";
import { generateRandomValue } from "./helpers/generateRandomValue";
import { unixGeneratorDate } from "./helpers/unixGenerator";
import { Interval } from './types/IntervalT';

function fakeDataGenerator(initialDate: number, finalDate: number, interval:Interval, _id: string) {
  
  const response = unixGeneratorDate(initialDate, finalDate, interval)

  const inicio = response.fechasInicio
  const final = response.fechasFin
  
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
  const jsonData = JSON.stringify(dataFakeArray, null, 2)
  const filePath = './dataFake/exportedFakeData.txt'
  fs.writeFileSync(filePath,jsonData)
  console.log(`FakeData guardada en: ${filePath}`)
}


fakeDataGenerator(1704067200, 1735497599, 'WEEK', '65a6bfd3de7cb55de5b345c8' )
