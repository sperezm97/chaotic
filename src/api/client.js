import axios from 'axios';

axios.create({
});

export const get = async (spreadsheetId) => {
    const params = `key=${process.env.GOOGLE_API_KEY}`;
    try {
        const { data } = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?${params}`);
        return data.values;
    } catch (error) {
        console.log(error.response);
    }
};
