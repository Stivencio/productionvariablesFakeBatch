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
        value: generateRandomValue(100, 400),
        measureType: "PROJECTED",
        timestamp: inicio[i]
      };
    
      dataFakeArray.push(objectREAL, objectPROJECTED);
    }
    const jsonData = JSON.stringify(dataFakeArray, null, 2)
    const filePath = `./dataFake/production-variables-batch-production-variable/${interval}_${_id}.txt`
    fs.writeFileSync(filePath, jsonData)
    console.log(`ProductionVariables for ${_id} saved at: ${filePath}`)
  });
};

export const fakeEnergyConsumptions = (initialDate: number, finalDate: number, interval: Interval, _idUse:string) => {
    const response = unixGeneratorDate(initialDate, finalDate, interval)

    const inicio = response.fechasInicio
    const final = response.fechasFin
  
    const dataFakeArray = [];
    for (let i = 0; i < inicio.length; i++) {
      const objectREAL = {
        _id: `${_idUse}_REAL`,
        insertDate: formatUnixDate(inicio[i]),
        startDate: inicio[i],
        endDate: final[i],
        value: generateRandomValue(1000, 120000),
        measureType: "REAL",
        timestamp: inicio[i],
        measureValue: "kWh",
        approved: true
      };
      const objectESTIMATED = {
        _id: `${_idUse}_ESTIMATED`,
        insertDate: formatUnixDate(inicio[i]),
        startDate: inicio[i],
        endDate: final[i],
        value: generateRandomValue(1000, 140000, 4),
        measureType: "ESTIMATED",
        timestamp: inicio[i],
        measureValue: "kWh",
        approved: true
      };
      const objectPROJECTED = {
        _id: `${_idUse}_PROJECTED`,
        insertDate: formatUnixDate(inicio[i]),
        startDate: inicio[i],
        endDate: final[i],
        value: generateRandomValue(1000, 140000, 4),
        measureType: "PROJECTED",
        timestamp: inicio[i],
        measureValue: "kWh",
        approved: true
      };
    
      dataFakeArray.push(objectREAL, objectESTIMATED, objectPROJECTED);
    }
    const jsonData = JSON.stringify(dataFakeArray, null, 2)
    const filePath = `./dataFake/energy-consumptions-insertBatch/${interval}_${_idUse}.txt`
    fs.writeFileSync(filePath, jsonData)
    console.log(`EnergyConsumptions for ${_idUse} saved at: ${filePath}`)

}

export const fakeEstimatedDeviation = (initialDate: number, finalDate: number, interval: Interval, _idUse:string) => {
  const response = unixGeneratorDate(initialDate, finalDate, interval)

  const inicio = response.fechasInicio
  const final = response.fechasFin

  const dataFakeArray = [];
  for (let i = 0; i < inicio.length; i++) {
    const objectDeviation = {
      _id: `${_idUse}`,
      insertDate: formatUnixDate(inicio[i]),
      startDate: inicio[i],
      endDate: final[i],
      maximum: generateRandomValue(50, 150),
      minimum: generateRandomValue(-50, 50),
    }
  
    dataFakeArray.push(objectDeviation);
  }
  const jsonData = JSON.stringify(dataFakeArray, null, 2)
  const filePath = `./dataFake/estimated-deviation/${interval}_${_idUse}.txt`
  fs.writeFileSync(filePath, jsonData)
  console.log(`fakeEstimatedDeviation for ${_idUse} saved at: ${filePath}`)

}