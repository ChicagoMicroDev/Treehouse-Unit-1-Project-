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
let quotes = [
    {
      quote:"May the Force be with you.",
      source:"Star Wars",
      citation:"Jan Dodonna",
      year:"1977",
    },
    {
      quote:"There's no place like home.",
      source:"The Wizard of Oz",
      citation:"Dorothy",
      year:"1939",
    },
    {
      quote:"I'm the king of the world!",
      source:"Titanic",
      citation:"Jack Dawson",
      year:"1997",
    },
    {
      quote:"My mama always said life was like a box of chocolates. You never know what you're gonna get.",
      source:"Forrest Gump",
      citation:"Forrest Gump",
      year:"1994",
    },
    {
      quote:"You're gonna need a bigger boat.",
      source:"Jaws",
      citation:"Roy Scheider",
      year:"1975",
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
  
  const html = `<p class="quote">${randomQuote.quote}</p>`+ `<p class="source">${randomQuote.source}`;
    if(randomQuote == "citation" || randomQuote == "year")
    {
      html.concat(`<span class="citation"> </span>`)
      html.concat(`<span class="year"> </span>`)
      
    }
    html.concat("</p>")
    console.log(html)
    randomQuote.innerHTML = html;
    
    document.getElementById('quote-box').innerHTML = html; 

}
printQuote()


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);