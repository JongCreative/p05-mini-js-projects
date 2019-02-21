/*_________________________________________________________________________________*/
/*      part 1 connecting to API
/*             collect all DOM elements
/*_________________________________________________________________________________*/

console.log('connect');

// DOM elements
const innerContainerTimeline = document.querySelector('.innerContainer-timeline');
const wrapperTimeline = document.querySelector('.wrapper-timeline');
const year = document.querySelector('.timeline-year');
const title = document.querySelector('.timeline-title');
const text = document.querySelector('.timeline-text');
const prev = document.querySelector('.btn-prev');
const pagination = document.querySelector('.btn-pagination');
const next = document.querySelector('.btn-next');

// empty array to put all availale timeline articles in
let timelineArticles = [];

/*_________________________________________________________________________________*/
/*      part 2 create function with arrow ()=>{}
/*             fetch articles into empty timelineArticles[] array
/*             seperate each array option with <article></article> & set attributes
/*             display it by append/inserting <article> to .innerContainerTimeline as a child
/*_________________________________________________________________________________*/

const getTimelineArticles = () => {
    timelineArticles = json.parse(this.getTimelineArticles);

    timelineArticles.forEach(timelineArticle => {
        const article = document.createElement('article');

    /* to collect info from json and insert into child */

        innerContainerTimeline.appendChild(article);
    });
};

/*_________________________________________________________________________________*/
/*      part 3 create function with arrow ()=>{}
/*             possible ifs & eliminate them
/*             connect each array option with <button> & set attributes
/*             display it by append/inserting <article> to <select> as a child
/*_________________________________________________________________________________*/



/*_________________________________________________________________________________*/
/*      part 4 addEventListeners.
/*_________________________________________________________________________________*/


/*_________________________________________________________________________________*/
/*      part 5 counter.
/*_________________________________________________________________________________*/