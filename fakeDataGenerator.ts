import { fakeEnergyConsumptions, fakeEstimatedDeviation, fakeProductionVariables } from "./helpers/FakeData/fakeProductionVariables";

const Inicio = 1713571200
const Fin = 1713657600
const Periodo = '15 MINUTES'
const _idUse = "65fc7819da56a3e6ad784e30"
const _idProductionVariables = ["65fc78a7da56a3e6ad784e41","65fc78afda56a3e6ad784e45"]

fakeProductionVariables(Inicio, Fin, Periodo, _idProductionVariables)
fakeEnergyConsumptions(Inicio, Fin, Periodo, _idUse)
fakeEstimatedDeviation(Inicio, Fin, Periodo, _idUse)