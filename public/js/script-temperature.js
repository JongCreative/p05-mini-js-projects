/* console.log(new Date());
* const fullDate = new Date();
* console.log(fullDate.getHours());
*
* const hours = fullDate.getHours();
* const mins = fullDate.getMinutes();
* const secs = fullDate.getSeconds();

*  pull html element to js 
* document DOM refers to browser window,  
* because we want to change it we do .innerhtml
* console.log(document.getElementsByClassName('hour'));

/*change the value of this <span> tag to const hours
*
*document.getElementById('hour').innerHTML = hours;
*document.getElementById('minutes').innerHTML = mins;
*document.getElementById('seconds').innerHTML = secs;
*
* now it will change on every manual refresh
* but we want it to change by itself so we need to wrap everything in a function
*****/
// with setinterval useing milisec

 
/* 
function greeting(){
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
setInterval (greeting, 1000);

 */


function clock() {
    let fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minutes').innerHTML = ":" + mins;
    document.getElementById('seconds').innerHTML = ":" + secs;

    //all is working, but we at times have a lonely digit
    //if it is less than 10, we add a zero at the beginning
    if (hours < 10 ){
        hours = "0" + hours;
    }
    //we can do the same for minutes and seconds
    if (mins < 10 ){
        mins = "0" + mins;
    }
    if (secs < 10 ){
        secs = "0" + secs;
    }

}

setInterval (clock, 100);
