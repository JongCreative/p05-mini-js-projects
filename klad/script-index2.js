/*_________________________________________________________________________________*/
/*      part 1 connecting to API and put in array
/*_________________________________________________________________________________*/

/* let jsonData = () => {
    fetch(
        'jsonData.php',
        {method: 'GET'}
    )
    
    .then(response => response.json() )
    .then(json => console.log(json) )
    .catch(error => console.error('error:', error) );
}; */

/*_________________________________________________________________________________*/
/*      part 2 collect all DOM elements
/*_________________________________________________________________________________*/

// DOM elements

const innerContainerTimeline = document.querySelector(".innerContainer-timeline");
const wrapperTimeline = document.querySelector(".wrapper-timeline");
const year = document.querySelector(".timeline-year");
const title = document.querySelector(".timeline-title");
const text = document.querySelector(".timeline-text");
const prev = document.querySelector(".btn-prev");
const pagination = document.querySelector(".btn-pagination");
const next = document.querySelector(".btn-next");

// empty array to put all availale timelineArticles in
let timelineArticles = [];

/*_________________________________________________________________________________*/
/*      part 3 create function with arrow ()=>{}
/*             fetch articles into empty timelineArticles[] array
/*             seperate each array option with <article></article> & set attributes
/*             display it by append/inserting <article> to .innerContainerTimeline as a child
/*_________________________________________________________________________________*/


// function to fetch API voices and display as dropdownlist
const timelineArticles = () => {
    console.log('start - getVoices');

    data =  jsonData();
    console.log('fetch - data and put in the let voices array');
    //console.log(timelineArticles);
    
    //now we want to put each option in the select list.
    //first we create an element to put each array option in 
    data.forEach(timelineArticles => {
        console.log('start for each loop timelineArticles');

        const option = document.createElement('section');
        console.log('created - <option> element for each voice in the voices array');

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
timelineArticles();
/* if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
};
 */
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