function clock() {
    let fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minutes').innerHTML = ":" + mins;
    document.getElementById('seconds').innerHTML = ":" + secs;

    if (hours < 10 ){
        hours = "0" + hours;
    }
    if (mins < 10 ){
        mins = "0" + mins;
    }
    if (secs < 10 ){
        secs = "0" + secs;
    }

}

setInterval (clock, 100);
//or else elseif