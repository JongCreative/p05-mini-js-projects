/*_________________________________________________________________________________*/
/*      part 1 connecting to API and put in array
/*_________________________________________________________________________________*/

/* const jsonData = () => {
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

const innerContainerTimeline = document.querySelector('.innerContainer-timeline');
const wrapperTimeline = document.querySelector('.wrapper-timeline');
const projectID = document.querySelector('.project_id');
const projectName = document.querySelector('.project_name');
const projectDescription = document.querySelector('.project_description');
const projecImg = document.querySelector('.project_img');
const projectUrl = document.querySelector('.project_url');
const projectStart = document.querySelector('project_start');
const projectCompleted = document.querySelector('.project_completed');

const prev = document.querySelector('.btn-prev');
const pagination = document.querySelector('.btn-pagination');
const next = document.querySelector('.btn-next');


/*_________________________________________________________________________________*/
/*      part 3 create function with arrow ()=>{}
/*             fetch articles into empty timelineArticles[] array
/*             seperate each array option with <article></article> & set attributes
/*             display it by append/inserting <article> to .innerContainerTimeline as a child
/*_________________________________________________________________________________*/
console.log ('test1');

function getTimelineArticles() {
    console.log ('test2');

    var xhttp = new XMLHttpRequest();
    console.log ('test3');
    
    xhttp.open("GET", "jsonData.php", true);
    xhttp.onreadystatechange = function() {
    console.log ('test4');

        if (this.readyState == 4 && this.status == 200) {
            var timelineArticles = JSON.parse(this.responseText);
            console.log('test5');
            /* innerContainerTimeline.style.display ='none'; */
            wrapperTimeline = timelineArticles[0];
            console.log(DBPackage);
            projectID.innerHTML = wrapperTimeline[count][0];
            projectKey.innerHTML = wrapperTimeline[count][1];
            projectName.innerHTML = wrapperTimeline[count][2];
            projectDescription = wrapperTimeline[count][3];
            projecImg.innerHTML = wrapperTimeline[count][4];
            projectUrl.innerHTML = wrapperTimeline[count][5];
            projectStart.innerHTML = wrapperTimeline[count][6];
            projectCompleted.innerHTML = wrapperTimeline[count][7];

            ClickMe();

        } else if (this.status == 404) {
            console.log("Deze pagina bestaat niet!");
        }
    }
    xhttp.onerror = function () {
        console.log("there is a request error...")
    }
    xhttp.send();
};
getTimelineArticles();

/*_________________________________________________________________________________*/
/*      part 4 create function with arrow ()=>{}
/*             possible ifs & eliminate them
/*             connect each array option with <button> & set attributes
/*             display it by append/inserting <article> to <select> as a child
/*_________________________________________________________________________________*/



/*_________________________________________________________________________________*/
/*      part 5 addEventListeners.
/*_________________________________________________________________________________*/

const submitBtn = () => {
    prev.addEventListener('click', e => (prev.innerContainerTimeline = prev.value));
    next.addEventListener('click', e => (next.innerContainerTimeline = next.value));
};

submitBtn();

/*_________________________________________________________________________________*/
/*      part 6 counter.
/*_________________________________________________________________________________*/
function ClickMe () {
    if (count <= 3) {
        count += 1;
        } else {
            count = 0;
        }
    }