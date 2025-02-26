import { fakeEnergyConsumptions, fakeEstimatedDeviation, fakeProductionVariables } from "./helpers/FakeData/fakeProductionVariables";

const Inicio = 1672531261
const Fin = 1685577661
const Periodo = '15 MINUTES'
const _idUse = "67b62cb8e6f335a1f3282c91"
const _idProductionVariables = ["67b62de6e6f335a1f3282c96","67b62e0de6f335a1f3282ca0"]
const useEnergyFake = false

fakeProductionVariables(Inicio, Fin, Periodo, _idProductionVariables)
fakeEnergyConsumptions(Inicio, Fin, Periodo, _idUse, useEnergyFake)
fakeEstimatedDeviation(Inicio, Fin, Periodo, _idUse)