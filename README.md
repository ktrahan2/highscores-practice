HighScoreApp: 



First, set up a React app in a github repo that you can share with Cobalt engineering; if this is troublesome, please let us know where you got stuck and provide an alternative way of assessing your code.

Then,

Create a React component called HighScoreApp that consists of:

<!-- 1. a button, which adjusts the users score by a number between -100 and 100 when clicked -->

<!-- 2. display of the current score -->

<!-- 3. an input field, labeled 'Name', where the user can type their name -->

<!-- 4. a submit button that will make a POST request (to dummy endpoint here) to save their score, name, and number of times they clicked to reach that score -->

<!-- **Caveat: the user can only click a maximum of 10 times before submitting their score; once they submit their score, the click counter gets reset to 0. -->


Continue with additional requirements:

1. Style the page; for inspiration you can visit: cobalt.io

<!-- 2. Add messaging to let the user know how many clicks they have left, and if they have reached the maximum number of 10 clicks. -->

<!-- 3. Add a dummied data fetch, assuming that the API service will send you the proper data as an array of objects.  The results will NOT be sorted.

Example:

[{name: "Jane Doe", totalPoints: 157, clicks: 5},

{name: "Lily Allen", totalPoints: 234, clicks: 8},

{name: "John Smith", totalPoints: 390, clicks: 10}] -->

<!-- 4.  Display a leaderboard table of the top 10 total points scores, showing:: name, score, number of clicks, average points per click. -->

<!-- 5. Create a real-time update of the table, so that if the person playing achieves a score that puts them in the leaderboard, show their position in the table (they still need to click `Send it!` button to save their score), and adjust other positions accordingly (knocking the lowest score out of the display) -->

6. Write a couple unit tests, and note why you chose to cover these particular areas of code. 


Option: Developer's choice 

If you like - rather than limit the number of clicks to 10 and prevent additional button clicks, reset the points counter to 0 on every 10th click of the button. Provide a brief explanation in comments what are the pros and cons of each restriction, in terms of usability and user experience.


Bonus:

- Give the user the option to toggle the table display between the top 10 total points, or the top 10 avg points per click. Add whatever UI elements/messaging are necessary to accomplish this.

- What API parameters would you request be made available, to optimize data processing on the front end?  Assume those parameters are made available to you, and incorporate them into your code. 