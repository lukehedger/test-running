module.exports = {
    testEnvironment: 'node',
    transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx']
   };