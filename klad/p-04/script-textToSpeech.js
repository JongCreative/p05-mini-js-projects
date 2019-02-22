//console.log("hello");
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

/*______________________________________________________________________*/
/*  part 1 connecting to speech synthesis API and get all DOM elements.
/*_____________________________________________________________________*/

/* * *
* init
* window.speechSynthesis);
* console.log(window.speechSynthesis);
* * */

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
/*      part 2 connecting to API and put options in select-list.
/*_____________________________________________________________________*/

//create a function to read into API .. function getVoices (){} or the better way const getVoices = () => {}
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

// will run when we click on button or on selection.
// however we need to make sure it is not already speaking when we click it. overlappen
const speak = () => {
    //check if speaking
    if(synth.speaking){
        console.error('its already in the process of speaking..');
        return;
    }
    //make sure not empty string, its not equal to nothing we want to take the value
    if(textInput.value !=='') {
        //Get speak text, SpeechSynthesisUtterance is predefined by JS and Utterance means speak(to say)
        // we want it to speak out what is inside the inputfield so we get the .value of textInput
        const speakText = new SpeechSynthesisUtterance(textInput.value)
        //this will run then done speaking
        speakText.onend = e => {
            console.log('Done speaking....');
        }

        //When the text can not be spoken, error
        speakText.onerror = e => {
            console.error('something went wrong');
        }

        //what voice does it need to speak
        //we are going to use the data attributes set earlier to select the option when clicking on it, just from the list, not from the api!!
        const selectedVoice = voiceSelector.selectedOptions[0].getAttributes('data-name');{
        
        //now we need to loop through the voices(global array) and if the current voice.name/iteration is equal to what is selected
        voices.forEach(voice => {
          if(voice.name === selectedVoice) {
              //speakText is the person, then we set the speakers.voice to the voice selected.
              speakText.voice = voice;
          }              
        });

        //set pitch and rate
        // = whatever the variable const rateValue is (we set the slider as a variable in the beginning)
        // whatever the value of the slider is, put it in the speakText.rate
        speakText.rateSpeech = rateValue.value;
        speakText.pitchSpeech = pitchValue.value;

        //speak
        synth.speak(speakText);

        //
    }
};


//EVEN LISTENERS - whenever button is pressed run the speakText

// textform submit
textForm.addEventListener('submit', btnPressed => {
    //prevent it from submitting it as a file
    btnPressed.preventDefault();
    //what it needs to do is speak!
    speak();
    textInput.blur();
})

//rate value change
rateSpeech.addEventListener('change', btnPressed => rateValue.textContent = rateValue.value)
//rate value change
pitchSpeech.addEventListener('change', btnPressed => pitcheValue.textContent = pitchValue.value)

//voice select change
voiceSelector.addEventListener ('change', btnPressed => speak());
}






/*_____________________________________________________________________
                TEST


const fruits = [{1:'banana',2: 'mango',3:'strawberry'},
             {1:'banana2',2: 'mango2',3:'strawberry2'}];
            
fruits.forEach(fruit => {
  console.log(fruit);
});
// [banana, mango, strawberry]
// [banana2, mango2, strawberry2]


const fruits2 = [
    { name:'banana', price:649 },
    { name:'mango', price:576 },
    { name:'strawberry', price:489 }
  ];

const names = fruits2.map(fruit2 => fruit2.name);
console.log(names);
// [banana, mango, strawberry]

_____________________________________________________________________*/