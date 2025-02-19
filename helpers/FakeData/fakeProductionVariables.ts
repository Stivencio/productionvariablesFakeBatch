import * as fs from 'fs'
import { formatUnixDate } from "../formatUnixDate";
import { generateRandomValue } from "../generateRandomValue";
import { unixGeneratorDate } from "../unixGenerator";
import { Interval } from '../../types/IntervalT';

const MAX_FILE_SIZE_BYTES = 80000; // 85 KB

const writeJSONToFile = (filePath: string, data: any[]) => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, jsonData);
  console.log(`Data saved at: ${filePath}`);
};

const splitAndWriteJSONToFile = (filePath: string, data: any[]) => {
  const chunks = Math.ceil(Buffer.byteLength(JSON.stringify(data)) / MAX_FILE_SIZE_BYTES);
  const chunkSize = Math.ceil(data.length / chunks);
  let offset = 0;

  for (let i = 0; i < chunks; i++) {
      const chunkData = data.slice(offset, offset + chunkSize);
      writeJSONToFile(`${filePath}_${i + 1}.txt`, chunkData);
      offset += chunkSize;
  }
};

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
    const filePath = `./dataFake/production-variables-batch-production-variable/${interval}_${_id}.txt`;
    if (Buffer.byteLength(JSON.stringify(dataFakeArray)) > MAX_FILE_SIZE_BYTES) {
        splitAndWriteJSONToFile(filePath, dataFakeArray);
    } else {
        writeJSONToFile(filePath, dataFakeArray);
    }
  });
};

export const fakeEnergyConsumptions = (initialDate: number, finalDate: number, interval: Interval, _idUse:string, useEnergyFake: boolean) => {
    const response = unixGeneratorDate(initialDate, finalDate, interval)

    const inicio = response.fechasInicio
    const final = response.fechasFin
  
    const dataFakeArray = [];
    for (let i = 0; i < inicio.length; i++) {
      const objectREAL = {
        _id: `${_idUse}`,
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
      dataFakeArray.push(objectREAL);
      if (useEnergyFake) {
        dataFakeArray.push(objectESTIMATED, objectPROJECTED);
      }      
    }
    const filePath = `./dataFake/energy-consumptions-insertBatch/${interval}_${_idUse}.txt`;
    if (Buffer.byteLength(JSON.stringify(dataFakeArray)) > MAX_FILE_SIZE_BYTES) {
        splitAndWriteJSONToFile(filePath, dataFakeArray);
    } else {
        writeJSONToFile(filePath, dataFakeArray);
    }
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
  const filePath = `./dataFake/estimated-deviation/${interval}_${_idUse}.txt`;
  if (Buffer.byteLength(JSON.stringify(dataFakeArray)) > MAX_FILE_SIZE_BYTES) {
      splitAndWriteJSONToFile(filePath, dataFakeArray);
  } else {
      writeJSONToFile(filePath, dataFakeArray);
  }
}