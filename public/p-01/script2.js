/* we want to create function that plays sound upon keydown
*
* where are we going to load it on = window (browser)
* what are we looking for, something to happen = eventlistener
* what is the event that we're looking for is called = keydown
* when this happen we are going to run the function called e = function(e)
* the function will give us the event = {}

*/
function playSound(e) {
    /*console.log(e.keyCode);
    * is there an audio element on the page that has data-key"65"?(same as if class="key key-65")
    * we want to select 1 audio element so we use the data selector ('audio[data-key=65')
    * to make it dynamic and more readable we will use the `` backtick and ${} cs template string instead
    */
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //we also want the wrapper-key to be animated
    const key = document.querySelector(`.wrapper-key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    //at the moment all keys are listed even those not linked to a sound element, null, so we need to filter this
    if (!audio) return; // if no audio form the function from running
    audio.currentTime = 0; // rewind when activated
    audio.play(); // this will play once, untill the fragment ends
    //console.log(key); // now the article is being target
    key.classList.add('playing'); // class from css will be added, and changed once
    //we can listen on each key for when te transition-end event happens
};

function removeTransition(e){
    //console.log(e);
    if(e.propertyName !== 'transform') return; // skip this function if it is not a transfor in css
    //console.log(e.propertyName);
    //console.log(this);
    this.classList.remove('playing');
}

    const keys = document.querySelectorAll('.wrapper-key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);