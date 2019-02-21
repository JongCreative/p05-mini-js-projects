const synth = window.speechSynthesis;

const textForm = document.querySelector('.form-textToSpeech');
const textInput = document.querySelector('.text-input');
const voiceSelector = document.querySelector('.select-voice');
const rate = document.querySelector('.rate-speech');
const rateValue= document.querySelector('.rate-value');
const pitch= document.querySelector('.pitch-speech');
const pitchValue= document.querySelector('.pitch-value');

let voices = [];

/*_____________________________________________________________________*/
/*      part 1 connecting to API and put options in select-list.
/*_____________________________________________________________________*/

const getVoices = () => {
    console.log('const getVoices');
    voices =  synth.getVoices();
    console.log(voices);
    voices.forEach(voice => {
        const option = document.createElement('option');
        console.log('const option');
        option.textContent = voice.name + '('+ voice.lang +')';
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelector.appendChild(option);
    });
};
getVoices();
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
};
console.log('hallo');

const speak = () => {
  // Check if speaking
  if (synth.speaking) {
    console.error('Already speaking...');
    return;
  }
  if (textInput.value !== '') {
    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput.value);

    // Speak end
    speakText.onend = e => {
      console.log('Done speaking...');
      body.style.background = '#141414';
    };

    // Speak error
    speakText.onerror = e => {
      console.error('Something went wrong');
    };

    // Selected voice
    const selectedVoice = voiceSelector.selectedOptions[0].getAttribute(
      'data-name'
    );

    // Loop through voices
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    // Set pitch and rate
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;
    // Speak
    synth.speak(speakText);
  }
};

// EVENT LISTENERS

// Text form submit
textForm.addEventListener('submit', e => {
  e.preventDefault();
  speak();
  textInput.blur();
});

// Rate value change
rate.addEventListener('change', e => (rateValue.textContent = rate.value));

// Pitch value change
pitch.addEventListener('change', e => (pitchValue.textContent = pitch.value));

// Voice select change
voiceSelector.addEventListener('change', e => speak());