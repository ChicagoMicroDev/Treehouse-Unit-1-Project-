/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Improvement to this code could include some sort of api call to provide random quotes of the day by various authors, If api call is unavailble we could use the quotes object array as a fallback.
const randomValue = () => Math.floor(Math.random() * 256);
let html = '';

let quotes = [
    {
      quote:"May the Force be with you.",
      source:"Star Wars",
      citation:"Jan Dodonna",
      year:"1977",
      tags: "Inspirational"
    },
    {
      quote:"There's no place like home.",
      source:"The Wizard of Oz",
      citation:"Dorothy",
      year:"1939",
      tags: "Motivation"
    },
    {
      quote:"I'm the king of the world!",
      source:"Titanic",
      citation:"Jack Dawson",
      year:"1997",
      tags: "Inspirational"
    },
    {
      quote:"My mama always said life was like a box of chocolates. You never know what you're gonna get.",
      source:"Forrest Gump",
      citation:"Forrest Gump",
      year:"1994",
      tags: "Humor"
    },
    {
      quote:"You're gonna need a bigger boat.",
      source:"Jaws",
      citation:"Roy Scheider",
      year:"1975",
      tags: "Humor"
    },
];
/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  const randomnum = Math.floor(Math.random() * quotes.length)
  return quotes[randomnum]
}
/***
 * `printQuote` function
***/
function printQuote(){
  const randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>`+" "+`<p class="source"> ${randomQuote.source} `;
    if(randomQuote.citation){
      html += `<span class="citation"> ${randomQuote.citation}</span>`
    }
    if(randomQuote.year){
      html +=  `<span class="year"> ${randomQuote.year}</span>`
    }
    if(randomQuote.tags){
      html += `<span class="tags"> ${randomQuote.tags}</span>`
    }
  
  html += "</p>"
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  document.getElementById('quote-box').innerHTML = html; 
}


setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);