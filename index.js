import { config } from "dotenv";
config()

import {get} from './src/api/client.js'
import {generateCSVString,writeCSVFile } from './src/helpers/csv.js'

const CSV_NAMES = {
    ATTACKS: 'chaotic_attacks.csv',
    LOCATIONS: 'chaotic_locations.csv',
    CREATURES: 'chaotic_creatures.csv',
    MUGICS:  'chaotic_mugics.csv',
    EQUIPMENTS:  'chaotic_equipments.csv',
}

const SPREADSHEET = {
    ATTACKS: process.env.SPREADSHEET_ATTACKS,
    LOCATIONS: process.env.SPREADSHEET_LOCATIONS,
    CREATURES: process.env.SPREADSHEET_CREATURES,
    MUGICS: process.env.SPREADSHEET_MUGICS,
    EQUIPMENTS: process.env.SPREADSHEET_EQUIPMENTS,
}

const app = async () => {

    const allAttacks = await get(SPREADSHEET.ATTACKS)
    const allCreatures = await get(SPREADSHEET.CREATURES)
    const allEquipments = await get(SPREADSHEET.EQUIPMENTS)
    const allLocations = await get(SPREADSHEET.LOCATIONS)
    const allMugics = await get(SPREADSHEET.MUGICS)
    
    const attacksCSV = generateCSVString(allAttacks)
    const creaturesCSV = generateCSVString(allCreatures)
    const equipmentsCSV = generateCSVString(allEquipments)
    const locationsCSV = generateCSVString(allLocations)
    const mugicsCSV = generateCSVString(allMugics)

    writeCSVFile(CSV_NAMES.ATTACKS, attacksCSV)
    writeCSVFile(CSV_NAMES.CREATURES, creaturesCSV)
    writeCSVFile(CSV_NAMES.EQUIPMENTS, equipmentsCSV)
    writeCSVFile(CSV_NAMES.LOCATIONS, locationsCSV)
    writeCSVFile(CSV_NAMES.MUGICS, mugicsCSV)

}

app()