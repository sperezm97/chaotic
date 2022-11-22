import { get } from './client.js';
import { jest, test } from '@jest/globals';

describe('Client module', () => {
    describe('Get method', () => {
        const log = console.log;
        beforeEach(() => {
            console.log = jest.fn();
        });

        afterEach(() => {
            console.log = log;
        });

        test('should return a value', async () => {
            const data = await get(process.env.SPREADSHEET_ID, 'Attacks');
            expect(data).toBeDefined();
        });

        test('should catch error exception', async () => {
            await get(process.env.SPREADSHEET_ID, '');
            expect(console.log).toHaveBeenCalledTimes(1);
        });
    });
});
