import axios from 'axios';

export const get = async (spreadsheetId, sheetName) => {
    const params = `key=${process.env.GOOGLE_API_KEY}`;
    try {
        const { data } = await axios.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?${params}`
        );
        return data.values;
    } catch (error) {
        console.log(error.response);
    }
};
