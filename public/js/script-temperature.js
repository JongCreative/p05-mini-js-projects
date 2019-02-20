const celciusInput = document.querySelector('.wrapper-celcius > input');
const fahrenheitInput = document.querySelector('.wrapper-fahrenheit > input');
const kelvinInput = document.querySelector('.wrapper-kelvin > input');
console.log(celciusInput);

function roundNum(num){
    return Math.round(num*100)/100;
}

function celciusToFahrenheitAndKelvin() {
    //console.log(celciusInput.value);
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5))+32;
    const kTemp = cTemp +273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
    //console.log(fahrenheitInput.value);
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndFahrenheit() {
    //console.log(kelvinInput.value);
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp - 273) +32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}

function main() {
    celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin); 
    fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}

main();