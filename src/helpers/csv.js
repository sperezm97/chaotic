import fs from 'fs';

const removeBreakLinesInText = (line) => {
    return line.replace(/(\r\n|\n|\r)/gm, '');
};

export const generateCSVString = (values) => {
    let csv = '';

    if (values == null || values?.length <= 0) {
        throw new Error('there is not data here.');
    }

    for (const value of values) {
        const singleRow = removeBreakLinesInText(value.join('|')) + '\r\n';
        csv += singleRow;
    }

    return csv;
};

export const writeCSVFile = (filename, csvString) => {
    try {
        fs.writeFileSync(filename, csvString);
    } catch (error) {
        console.log('writting', error);
    }
};
