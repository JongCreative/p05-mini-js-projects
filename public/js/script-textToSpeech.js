//console.log("hello");
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
//https://www.youtube.com/watch?v=ZORXxxP49G8

/*init
* access the speech api
* window.speechSynthesis);
* console.log(window.speechSynthesis);
*/

//init speechSynt API
const synth = window.speechSynthesis;
//console.log(synth);

//DOM Elements
const textForm = document.querySelector('.form-textToSpeech');
const textInput = document.querySelector('.text-input');
const voiceSelector = document.querySelector('.select-voice');
const rateSpeech = document.querySelector('.rate-speech');
const rateValue= document.querySelector('.rate-value');
const pitchSpeech= document.querySelector('.pitch-speech');
const pitchValue= document.querySelector('.pitch-value');
//console.log(rateValue);

//Init voices array, we need to fetch the voices
let voices = [];

/*_____________________________________________________________________*/
/*      part 1 connecting to API and put options in select-list.
/*_____________________________________________________________________*/

//const getVoices (){} will read into the API
const getVoices = () => {
    voices =  synth.getVoices();
    //console.log(voices);

    //loop (old:for/better:foreach) through voices and create an option for each one in the select-voice class
    
    voices.forEach(voice => {
        //create option (DOM)element
        const option = document.createElement('option');
        //fill option with voice and language
        option.textContent = voice.name + '('+ voice.lang +')';

        //set needed option attributes
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);

        //append options to the selectlist
        //we take each itteration and take the option
        voiceSelector.appendChild(option);

        //now all options are available in the selectlist class="select-voice" , coming from synth.voices, yay!
        //now we'll on work getting it to speak
    });
}
//getVoices();
//why empty array https://stackoverflow.com/questions/21513706/getting-the-list-of-voices-in-speechsynthesis-of-chrome-web-speech-api

getVoices();
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
}
// now array will be available


/*_____________________________________________________________________*/
/*      part 2 speak it!!.
/*_____________________________________________________________________*/

