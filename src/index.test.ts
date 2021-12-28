import { sum } from './index'

describe('ADDING', () => {
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4)
    })
    test('sum of two and two is four', () => {
        expect(sum(2,2)).toBeGreaterThanOrEqual(4)
        expect(sum(2,2)).toBeLessThanOrEqual(4)
    })
})