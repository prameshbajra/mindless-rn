const generateRandomNumber = (min, max, exclude) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue)) - minValue;
    if (exclude === randomNumber) {
        return generateRandomNumber(minValue, maxValue, exclude);
    }
    return randomNumber;
}


export {
    generateRandomNumber
}