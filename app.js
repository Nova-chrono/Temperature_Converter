// 1. Fahrenheit to Celsius converter

function convertFahrToCelsius(temperature) {
    const validTemperature = Number(temperature);
    const isInputArray = Array.isArray(temperature);
    const inputType = isInputArray ? 'Array' : typeof temperature;
    
    if (isNaN(validTemperature)) {
        return `${temperature} is not a valid number but a/an ${inputType}`;
    }

    const newTemperature = (validTemperature - 32) * (5 / 9);
    return Number(newTemperature.toFixed(4));

}


const result = convertFahrToCelsius([1, 2, 3]);
console.log(result);

