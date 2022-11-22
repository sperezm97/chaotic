import {
    afterEach,
    beforeEach,
    describe,
    expect,
    jest,
    test
} from '@jest/globals';
import { writeCSVFile, generateCSVString } from './csv.js';

describe('csv module', () => {
    describe('writeCSVFile function', () => {
        const log = console.log;

        beforeEach(() => {
            console.log = jest.fn();
        });

        afterEach(() => {
            console.log = log;
        });

        test('should invoke writeCSVFile without params', () => {
            writeCSVFile();
            expect(console.log).toHaveBeenCalledTimes(1);
        });
    });

    describe('generateCSVString function', () => {
        test('should invoke generateCSVString without params', () => {
            expect(generateCSVString).toThrowError('there is not data here.');
        });

        test('should invoke generateCSVString with params', () => {
            // eslint-disable-next-line prettier/prettier
            expect(generateCSVString([['R', 'G'], [5]])).toEqual(`R|G\r\n5\r\n`);
        });
    });
});
