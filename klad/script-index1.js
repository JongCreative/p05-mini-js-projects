/*_________________________________________________________________________________*/
/*      part 1 connecting to API and put in array
/*_________________________________________________________________________________*/

const jsonData = () => {
    fetch(
        'jsonData.php',
        {method: 'GET'}
    )
    
    .then(response => response.json() )
    .then(json => console.log(json) )
    .catch(error => console.error('error:', error) );
};

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
console.log ("test1");

const getTimelineArticles = () => {
    console.log ("test2");
    timelineArticles = jsonData();
    console.log ("test3");
    items.forEach(function(item){
        console.log ("test4");
        const article = document.createElement('article');

    /* to collect info from json and insert into child */

        innerContainerTimeline.appendChild(article);
    });
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


/*_________________________________________________________________________________*/
/*      part 6 counter.
/*_________________________________________________________________________________*/