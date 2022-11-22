import { config } from 'dotenv';

import { get } from './src/api/client.js';
import { generateCSVString, writeCSVFile } from './src/helpers/csv.js';
config();

const CSV_NAMES = {
    ATTACKS: 'chaotic_attacks.csv',
    LOCATIONS: 'chaotic_locations.csv',
    CREATURES: 'chaotic_creatures.csv',
    MUGICS: 'chaotic_mugics.csv',
    EQUIPMENTS: 'chaotic_equipments.csv'
};

const spreadsheetId = process.env.SPREADSHEET_ID;

const SPREADSHEET_NAME = {
    ATTACKS: 'Attacks',
    LOCATIONS: 'Locations',
    CREATURES: 'Creatures',
    MUGICS: 'Mugics',
    EQUIPMENTS: 'Equipments'
};

const app = async () => {
    const allAttacks = await get(spreadsheetId, SPREADSHEET_NAME.ATTACKS);
    const allCreatures = await get(spreadsheetId, SPREADSHEET_NAME.CREATURES);
    const allEquipments = await get(spreadsheetId, SPREADSHEET_NAME.EQUIPMENTS);
    const allLocations = await get(spreadsheetId, SPREADSHEET_NAME.LOCATIONS);
    const allMugics = await get(spreadsheetId, SPREADSHEET_NAME.MUGICS);

    const attacksCSV = generateCSVString(allAttacks);
    const creaturesCSV = generateCSVString(allCreatures);
    const equipmentsCSV = generateCSVString(allEquipments);
    const locationsCSV = generateCSVString(allLocations);
    const mugicsCSV = generateCSVString(allMugics);

    writeCSVFile(CSV_NAMES.ATTACKS, attacksCSV);
    writeCSVFile(CSV_NAMES.CREATURES, creaturesCSV);
    writeCSVFile(CSV_NAMES.EQUIPMENTS, equipmentsCSV);
    writeCSVFile(CSV_NAMES.LOCATIONS, locationsCSV);
    writeCSVFile(CSV_NAMES.MUGICS, mugicsCSV);
};

app();
