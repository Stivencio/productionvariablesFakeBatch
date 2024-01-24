import { fakeEnergyConsumptions, fakeEstimatedDeviation, fakeProductionVariables } from "./helpers/FakeData/fakeProductionVariables";

const Inicio = 1577851261
const Fin = 1798689661
const Periodo = 'MONTH'
const _idUse = "65b1597baaa46bbde984d1bf"
const _idProductionVariables = ["65b159caaaa46bbde984d1c8","65b159deaaa46bbde984d1cc"]

fakeProductionVariables(Inicio, Fin, Periodo, _idProductionVariables)
fakeEnergyConsumptions(Inicio, Fin, Periodo, _idUse)
fakeEstimatedDeviation(Inicio, Fin, Periodo, _idUse)