# The GIFter
By Alexander Svanholm, Anne Gregersen & Frederik Ditlev

### What is the Program?

The user is given the option to search and find gifs from the giphy.com library. When looking up a term to search for, the program GIFts you with a series of GIF images. Originally, the user was supposed to write in words associated with another word. Words like beach, ice cream, and sun would go with summer, and snow, icicles, and fireplace could go with winter, for instance. This idea was ruined a little by the user’s ability to search for completely unrelated terms, such as typing “Easter bunny” when tasked with thinking about Christmas. As we didn’t know of any way to constrain the user to a specific section of search terms which would be deemed “acceptable,” we opted for, instead, to attempt to further understand the nature of APIs, as well as HTML and CSS coding.

The code and the program itself are both very simple. The complexity arrives when dealing with the HTML and CSS. The program simply looks up the term to search for on giphy.com and returns a series of images depending on what you typed. The styling of the search field, as well as the background, was done with CSS. The code for that was taken from an online source and modified to suit our needs, and also to help us better understand CSS. As no one in the group was truly comfortable with CSS, we preferred handling code which we knew would work, and then working further on from there.

Besides finding GIFs based on keywords, we wanted the user to interact even more with the program. We decided to implement a horizontal range slider as well so that the user could control the amount of GIFs showed on-screen. We created a custom range slider with CSS, set the minimum value of the slider to 1 (as we wanted the program to always show at least one image when a keyword has been entered), set the maximum value of the slider to 100 (100 GIFs to be shown) and set the default value of the slider to 50. **Go crazy! GIPHY allows for all keys to have a maximum of 10k requests a day.**

#### Screenshot of mini_ex8:
![alt text](mini_ex8.PNG "Let’s hunt down some giiiiiiiifs")

#### Click to [get GIFted:](https://rawgit.com/ubiquitousman/mini-ex/master/mini_ex8/p5/the_gifter/index.html)
#
#### Code Collaboration:

This project was the collaborative effort of [Alexander Svanholm](https://github.com/ubiquitousman/mini-ex), [Anne Gregersen](https://github.com/AnnesFlashBack/Mini-Exercises), and [Frederik Ditlev](https://github.com/Mightydeeze/mini_ex/tree/mini_ex_main). Since we are the only three members of our study group, we did not really have the options to switch up who we were working with, so we just stuck with the members of the study group.

We encountered a lot of frustrations with this exercise, especially because we were making use of a lot of HTML and CSS code; something the group didn’t have a lot of collective experience with. This meant that some simple errors were very hard to fix. Most things would take a really long time to understand, and on top of everything we were also working with APIs - something that is not inherently easy either.
In the end, be it either from the difficulty of working with code we’d never seen before, or from the frustrations we experienced from issues we didn’t understand, we ended up making a rather simple program. It could have been more complex, certainly, but given our lack of knowledge with our chosen tools, this is close to the best we could do.

#### Individual Analysis:
**Insert text here**

(individual)Can you describe and reflect your process of making this mini exercise in terms of acquiring, processing, using and representing data? How much do you understand this provided data? How do platform providers sort the data and give you the selected data?

(individual)Try to formulate a question in relation to web APIs or querying processes that you want to investigate further when you have more time.

## Our code:
#### Index file:
https://github.com/ubiquitousman/mini-ex/blob/master/mini_ex8/p5/the_gifter/index.html
#### Sketch file:
https://github.com/ubiquitousman/mini-ex/blob/master/mini_ex8/p5/the_gifter/sketch.js
#### Styling (CSS):
https://github.com/ubiquitousman/mini-ex/blob/master/mini_ex8/p5/the_gifter/style.css  

### Best regards
#### Alexander Svanholm, Anne Gregersen & Frederik Ditlev
