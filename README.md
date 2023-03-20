# a_random_quote_generator-v1
Treehouse Unit 1 Project
Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

 11 steps
Review your resources
Know what to do and how to get help when you have questions about getting started or implementing individual project requirements.

The “Project Resources” section on the right-hand side of this page contains links to optional project resources that can help you complete the project:
Project Study Guide - A list of links to relevant Treehouse videos, Practice Sessions, project Warm Ups, and other resources.
Project Warm-Ups - Code exercises that help prepare you for writing the code for this project.
Practice Sessions - Mini-workshops with guided practice opportunities for techniques relevant to the project.
Project Walkthrough - An optional step-by-step description of how to accomplish each phase of the project.
Your friendly Slack team is a helpful, growing community of student developers of all levels, all working together to root for each other and support one another on this journey. This is a great place to find friendly guidance and support. The “Get Help” button just below the “Project Resources” section will lead directly to your Slack team.
Google is a developer’s best friend. Even the pros use it every day to check on any number of things. So get as much practice with it as you can and Google every question that you think of.
Getting started with the project files
If you haven’t already, download the project starter files, unzip them, add them to your project folder and push them to your GitHub repo.
Open the project in your text editor, open the script.js file, load the index.html file in Chrome, and open the Chrome DevTools console.
If you have trouble with any of the above steps, be sure to reach out to your Slack team.
Create an Array of objects to store the data for your quotes
A data structure is necessary to store and organize the quotes in your app. A basic array of objects is a lightweight way to store information.

In your js/script.js file:

Create a variable named quotes and set it equal to an empty array.
Add a minimum of five empty objects to your quotes array.
Add data to your quote objects
The objects in the quotes array store the individual properties of the quotes.

Add the following properties to each quote object:
quote - string - the actual quote
source - string - the person or character who said it
Add a citation property to at least one quote object. The value should be a string holding a reference to the source of the quote, like the book, movie, or song where the quote originates.
Add a year property to at least one quote object. The value should be a string or number representing the year the quote originated.
Pause development and test your code
Frequently testing your code can catch bugs as they arise, and avoid the undesirable experience of writing dozens of lines of code, just to discover that your code contains multiple bugs that need to be tracked down and fixed.

Project Warm Up: Logging values can help you better understand your code, the state of your app, and ensure that the code you've written is doing what you think it’s doing. For some helpful practice, check out the project Warm Up Logging Values and Types.
Below your array of quote objects, use the console.log() method to log the quotes array to the console. You can click on those objects in the console to open them and inspect their contents.
Delete or comment out your log statements as you no longer need them; they can quickly accumulate and clutter up your code and the console, making things harder to manage.
If you’re having issues with your code, opening your project or the console, or seeing errors in the console, be sure to review your resources. Check out the Study Guide, Practice Sessions, Warm Ups, and Walkthrough as needed, and reach out in Slack.
Create the getRandomQuote function
The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.

Project Warm Up: Dealing with functions, arrays, and random numbers can be confusing at first. For some helpful practice, check out the project Warm Up Random Array Index.
Create a function named getRandomQuote.
In the function body, create a variable to store a random number ranging from zero to the index of the last item in the quotes array.
Lastly, the function should return a random quote object using the random number variable above and bracket notation on the quotes array.
Pause development and test your code
Use console.log() inside of the getRandomQuotes function to log out the random number and the random quote object from the quotes array.
Call the getRandomQuote() function immediately after the function definition to run the code inside, including the new log statements.
If you’re having issues with your code or feel stuck, check out the Study Guide, Practice Sessions, Warm-Ups, and Walkthrough as needed, and reach out in Slack.
Create the printQuote function
The app should display a new quote each time the user clicks the "Show another quote" button using a printQuote function.

Create a function named printQuote.

You will program the printQuote function to perform three tasks: call the getRandomQuote function, use the returned quote object to build a string of HTML and quote properties, then use that string to display a random quote in the browser.

In the body of the printQuote function, create a variable to store a random quote object from the getRandomQuote() function.

Create another variable to store the HTML string. Set it equal to a string containing two <p> elements. Use this code snippet as a guide for what the HTML string should look like at this point:

<p class="quote"> A random quote </p>
<p class="source"> quote source </p>
The first <p> element should have a class equal to “quote”, and the random quote object’s .quote property nested between the opening and closing <p> tags.
The second <p> element should have a class equal to “source”, and the random quote object’s .source property nested between the tags.
Important Notes:
Do not include the second closing </p> tag for now – you will add it at the end of this step.
You can use template literals here if you’re comfortable with that approach. But if you use traditional strings instead, be sure to wrap the strings in single quotes, so that the HTML classes can use their recommended double quotes.
Create two separate if statements below the variables. You will need to add decision-making to this function:

Project Warm Up: Using conditionals to test if objects or elements exist before trying to do something with them is a common developer task. For some helpful practice, check out the project Warm Up Conditional String.
If the random quote object has a citation property, concatenate a <span> element with the class "citation" to the HTML string.
If the random quote object has a year property, concatenate a <span> element with the class "year" to the HTML string.
Use the following code snippet as a guide for what the HTML string should look like with the added "citation" and "year" <span> elements (like earlier, omit the second closing </p> tag for now):

<p class="quote"> A random quote </p>
<p class="source"> quote source
  <span class="citation"> quote citation </span>
  <span class="year"> quote year </span>
</p>
Below the if statements, complete the string by concatenating a closing </p> tag to the HTML string. This is the closing tag for the second paragraph with the class source.

Lastly, set the printQuote function to change the HTML string by using the innerHTML property.

Use the following code snippet, along with the variable storing the string you’ve assembled, to update your project’s HTML with a random quote:

document.getElementById('quote-box').innerHTML = yourStringHere; 
Note: You'll learn all about document.getElementById() and .innerHTML in an upcoming course, in this project it's going to help you select the 'quote-box' div and update its HTML content with the random quote markup.
Pause development and test your code
Your app should now display a new quote every time the user clicks the "Show another quote" button. At the bottom of the js/script.js file, we’ve included a line of code that calls the printQuote function each time the user clicks that button. You’ll learn more about handling events like a button click in subsequent units.

If you want to double-check any of the values in this section, log them out in the printQuote function so that any time the button is clicked, the log statements will be printed to the console.
If you’re running into trouble, check out the Study Guide, Practice Sessions, Warm-Ups, and Walkthrough as needed, and reach out to your team on Slack.
Finishing the project
The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.

Code comments - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code.
Code readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation are consistent.
Cross-browser consistency - To pass, your project only needs to work in Chrome. But it’s common for developers to test their projects in multiple browsers to know how they will perform out in the wild.
Quality Assurance Testing - This is the keystone step in the development process.
Open and run your app.
Open the Chrome DevTools console.
Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.
Before submitting the project
Before you submit your project, check off each item in the project submissions checklist below.

 I have read all of the project instructions, including the “How you’ll be graded” section for this project.

 I understand what is needed to receive a Meets or Exceeds Expectations grade, and asked for clarification about grading requirements on Slack if necessary.

 My GitHub repo for this project contains only this project, only files needed to make this project run, and a README.md file providing details about my project.

 I wrote all of my own code for this project. Any code included in my project that I did not write myself is appropriately attributed to its source.

 I have completed all of the project requirements and believe the project is ready to receive meets or exceeds expectation grade.

 I have received a preliminary review of my project in Slack to catch anything I might have missed.

 I understand that in order to receive an Exceeds Expectations grade, I must complete all extra credit items.

 I understand that what I submit is what will get reviewed and that when I submit my project, any changes I make after the submission won't be seen by my reviewer.

Extra Credit
To get an "exceeds" rating, complete all of the steps below:

 3 steps
Additional quote object property
Printed quotes display an additional property that adds context. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize a quote.

Add at least one extra property to at least one quote object.
Add the new property to the HTML string similarly to how you added the “year” and “citation” properties.
Random background colors
When a new quote prints to the page, the background color changes to a random color.

Create a function that updates the background color to a random color.
Auto-refreshed quotes
The quote on the page automatically updates at regular intervals.

Create a timing function with the setInterval() method to print a new quote to the page at regular intervals, like every 10 to 20 seconds.
NOTE: Getting an "Exceed Expectations" grade.

See the rubric in the "How You'll Be Graded" tab above for details on what you need to receive an "Exceed Expectations" grade.
Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
Always mention in the comments of your submission or any resubmission, what grade you are going for. Some students want their project to be rejected if they do not meet all Exceeds Expectations Requirements, others will try for all the "exceeds" requirement but do not mind if they pass with a Meets Expectations grade. Leaving a comment in your submission will help the reviewer understand which grade you are specifically going for
