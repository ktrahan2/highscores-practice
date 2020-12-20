export const averageClicks = (person) => {
    return parseFloat((person.score/person.clicks).toFixed(2))
};