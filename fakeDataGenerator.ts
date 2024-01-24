import { fakeEnergyConsumptions, fakeEstimatedDeviation, fakeProductionVariables } from "./helpers/FakeData/fakeProductionVariables";

const Inicio = 1609470000
const Fin = 1669867261
const Periodo = 'MONTH'
const _idUse = "65a9971c11281d2399669b2e"
const _idProductionVariables = ["65b0b3240b79ffb51a1e82b3","65b0b3490b79ffb51a1e82b9"]

fakeProductionVariables(Inicio, Fin, Periodo, _idProductionVariables)
fakeEnergyConsumptions(Inicio, Fin, Periodo, _idUse)
fakeEstimatedDeviation(Inicio, Fin, Periodo, _idUse)