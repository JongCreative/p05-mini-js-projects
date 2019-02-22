/*_________________________________________________________________________________*/
/*      part 1 connecting to API
/*             collect all DOM elements
/*_________________________________________________________________________________*/

// initialize API connection
const synth = window.speechSynthesis;

// DOM elements
const textForm = document.querySelector('.form-textToSpeech');
const textInput = document.querySelector('.text-input');
const voiceSelector = document.querySelector('.select-voice');
const rate = document.querySelector('.rate-speech');
const rateValue= document.querySelector('.rate-value');
const pitch= document.querySelector('.pitch-speech');
const pitchValue= document.querySelector('.pitch-value');``

// empty array to put all availale voices in
let voices = [];

/*_________________________________________________________________________________*/
/*      part 2 create function with arrow ()=>{}
/*             fetch voices into empty voices[] array
/*             seperate each array option with <option></option> & set attributes
/*             display it by append/inserting <option> to <select> as a child
/*_________________________________________________________________________________*/


// function to fetch API voices and display as dropdownlist
const getVoices = () => {
    //console.log('start - getVoices');

    voices =  synth.getVoices();
    //console.log('fetch - voices and put in the let voices array');
    
    //now we want to put each option in the select list.
    //first we create an element to put each array option in 
    voices.forEach(voice => {
        const option = document.createElement('option');
        //console.log('created - <option> element for each voice in the voices array');

        //<option>Google Nederlands(nl-NL)</option>
        //i will use textContent to render each voice option as <b>text only</b>. in stead of innerHTML <b>shown bold</b>
        option.textContent = voice.name + '('+ voice.lang +')';
        //set attribute inside the <option data-lang="nl-NL" data-name="Google Nederlands">
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelector.appendChild(option);
    });
};

/* put in array, without this array will be empty
* https://stackoverflow.com/questions/21513706/getting-the-list-of-voices-in-speechsynthesis-of-chrome-web-speech-api
* * */
getVoices();
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
};

/*_________________________________________________________________________________*/
/*      part 3 create function with arrow ()=>{}
/*             possible ifs & eliminate them
/*             seperate each array option with <option></option> & set attributes
/*             display it by append/inserting <option> to <select> as a child
/*_________________________________________________________________________________*/

//function to get it to speak
const speak = () => {
    console.log('start - speak');

    //check if already
    if(synth.speaking) {
        console.error('its already in the process of speaking..');
        return;
    }

    if(textInput.value !=='') {
        console.log('input text field')
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        speakText.onend = e => {
            console.log('Done speaking....');
        };

        speakText.onerror = e => {
            console.error('something went wrong');
        };

        const selectedVoice = voiceSelector.selectedOptions[0].getAttribute('data-name');
        voices.forEach(voice => {
          if(voice.name === selectedVoice) {
              speakText.voice = voice;
          }              
        });

            speakText.rate = rate.value;
            speakText.pitch = pitch.value;
            synth.speak(speakText);
    }
};
speak();

/*_________________________________________________________________________________*/
/*      part 4 addEventListeners.
/*_________________________________________________________________________________*/


const submitBtn = () => {
    textForm.addEventListener('submit', e => {
        e.preventDefault();
        speak();
        textInput.blur();
    })

    rate.addEventListener('change', e => (rate.textContent = rate.value));
    pitch.addEventListener('change', e => (pitch.textContent = pitch.value));
    voiceSelector.addEventListener ('change', e => speak());
};

submitBtn();