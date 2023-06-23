const format  = require('./script.js');

describe('Format Function Unit Tests', () => {
    it('should format a complete phone number correctly', () => {
        expect(format('1234567890')).toBe('(123) 456-7890');
    })
    it('should format a partial phone number correctly', () => {
        expect(format('1234')).toBe('(123) 4');
    })
    it('should format a partial phone number correctly 2', () => {
        expect(format('123456')).toBe('(123) 456');
    })
    it('should handle empty string', () => {
        expect(format('')).toBe('');
    })
});