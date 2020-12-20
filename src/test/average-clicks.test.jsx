import { averageClicks } from '../utils/averageScore'

test('returns average points per click', () => {
    expect(averageClicks({ score: 300, clicks: 2 })).toBe(150),
    expect(averageClicks({ score: 336, clicks: 7})).toBe(48)
})
