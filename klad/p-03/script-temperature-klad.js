/* everytime i enter something, it needs to trigger something, an action needs to take place
* when i type in a number, it needs to take this numnber and convert it into fahrenheit and kelvin
* and then show it in the respective input fields.
* fahrenheit value in the fahrenheit input box, same for kelvin
* all needs to happen simultaneously, when i enter something in the celcius box it should show right away
* or as i delete something in the celcius box
*****/
/*
* first i need to pull the input field from html into JS
* when someone clicks/type in celcius/fahrenheit/kelvin, something is happening
* 
 */

 //so we can refer to them as variable, to select something specific we something called query selector, 
 //get me the input inside the #celsius
 const celciusInput = document.querySelector('.wrapper-celcius > input');
 const fahrenheitInput = document.querySelector('.wrapper-fahrenheit > input');
 const kelvinInput = document.querySelector('.wrapper-kelvin > input');

/*console.log(celciusInput);
* now we need to have something that listens to the specific event, eventhandler or eventlisteners
* when someboy clicks on something, scrolls the page, hoover the mouse over, presses the key on the keyboard
*
* in this case we need to listen to any changes in the input field
 */

/* 
*censiusInput.  we use the build-in method that is build in into DOM addEventlistener() this needs 2 arguments,
* first one: what type of event 'click', second one would be a function() en then what should happen.

celciusInput.addEventListener('click', function() {
    console.log("hello");
    console.log("hi");

});

* everytime someone clicks on the input element it triggers those two statements console.log("helloe & hi")
 */



//celciusInput.addEventListener('input', function() {
    //console.log(celciusInput.value);
//    const cTemp = parseFloat(celciusInput.value);
//    const fTemp = (cTemp * (9/5))+32;
//    const kTemp = cTemp +273.15;
    /*console.log(kTemp);
    * const cTemp = celciusInput.value;
    * output will be 100273.15, because js thinks it is a string,
    * cTemp is actually a string, to confirm this console.log(typeof cTemp); will show data type as string
    * were trying to add a string to a decimal nr aka floatnumber, if you do it with an interget console.log(fTemp) js was just being nice because.
    * now you need to change cTemp to make sure that cTemp is a decimal number. with parsefloat, 
    * */

//    fahrenheitInput.value = fTemp;
//    kelvinInput.value = kTemp;
    /*now everything is implementen for the function celsius .
    * however nothing will happen when putting anything in the other inputfields

    so we will put the actual function in a seperate function, and give it a name so we can pass the name multiple times
    */
//});

//almost there!, we created all functions and now we need to round the nrs to the nearest 100th place
function roundNum(num){
    return Math.round(num*100)/100;
}
// 3.141686847365414536
// we multiply it by 100, we get 314.16blablabla
// math.round will round it to 314
// but we need 2 decimal so we need to move back with /100 , makes 3.14
//and add roundNum() to all outputs

function celciusToFahrenheitAndKelvin() {
    console.log(celciusInput.value);
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5))+32;
    const kTemp = cTemp +273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
    console.log(fahrenheitInput.value);
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndFahrenheit() {
    console.log(kelvinInput.value);
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp - 273) +32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}

//last step! wrap this in a function
function main() {
    celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin); //now it will still work, now add the same formula for fahrenheit and kelvin
    fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}
main();

//at the moment there are many decimals, we need to round it down to the nearest 100th place. we put in on top of all functions