import * as fs from 'fs'
import { formatUnixDate } from "../formatUnixDate";
import { generateRandomValue } from "../generateRandomValue";
import { unixGeneratorDate } from "../unixGenerator";
import { Interval } from '../../types/IntervalT';

export const fakeProductionVariables = (initialDate: number, finalDate: number, interval: Interval, _ids: string[]) => {
  _ids.forEach(_id => {
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
        value: generateRandomValue(0, 200),
        measureType: "REAL",
        timestamp: inicio[i]
      };
      const objectPROJECTED = {
        _id: `${_id}_PROJECTED`,
        insertDate: formatUnixDate(inicio[i]),
        startDate: inicio[i],
        endDate: final[i],
        value: generateRandomValue(1000, 2000),
        measureType: "PROJECTED",
        timestamp: inicio[i]
      };
    
      dataFakeArray.push(objectREAL, objectPROJECTED);
    }
    const jsonData = JSON.stringify(dataFakeArray, null, 2)
    const filePath = `./dataFake/exportedFakeData_${_id}.txt`
    fs.writeFileSync(filePath, jsonData)
    console.log(`FakeData for ${_id} saved at: ${filePath}`)
  });
};