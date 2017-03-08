# Learn to Code JavaScript: Choose Your Own Adventure!

Brought to you by Galvanize. Learn more about the way we teach code at [galvanize.com](http://galvanize.com).

### Overview

In this course, we'll be going over the following!

- Basic syntax of JavaScript
- Variables and Functions
- Conditional statements (if, else if, else)
- Build a “Choose Your Own Adventure” application

While not required, reviewing our [HTML & CSS](https://github.com/GalvanizeOpenSource/Learn-To-Code-HTML-CSS) course can help!

### Setting Up Your Computer

For this workshop, you need to have the following:

- Install a text editor! We recommend [Atom.io](http://atom.io)
- Have an updated web browser! We recommend [Google Chrome](http://chrome.google.com)

### What IS JavaScript?

Making its first appearance in 1995, JavaScript was created by an engineer at Netscape to provide a user-friendly, lightweight programming language that can be easily adapted for the rise of the Internet. Now, with HTML and CSS, it is one of the core languages of the Internet and is growing quickly to accommodate beyond the client-side.

JavaScript allows web pages to do more than just “sit there." You can animate, calculate, etc. - you can do it all! 
It is a great programming bridge between “design” and “development” that allows for endless creativity.

Common confusion: JavaScript is **NOT** Java. They are largely different programming languages and should not be confused with one another.

### A Quick Mini-Tutorial

In order to go over some basic JavaScript concepts, let's follow a tutorial provided by the [JavaScript.com](http://chrome.google.com) team. 

It's only 8 lessons and takes less than 5 minutes.

https://www.javascript.com/try

### Dive a Little Deeper

Let's review some of the basic syntax of JavaScript.

- `var` - defines a variable (an object of some value)
- `;` - terminator, commonly found at the end of a code operation
- `"word"` - quotes create strings, which are a form of data 
- `function()` - performs some action or method 
- `{}` - block notation, contains code that can be initialized by a function
- `.` - dot notation, allows for the chaining of variables and functions

JavaScript is an [Object-Oriented Language](https://en.wikipedia.org/wiki/Object-oriented_programming), a common paradigm of coding that occurs in many other languages and can help you learn them as well.

### Variables

Variables are essentially containers for storing data, values, etc.
In JavaScript, you must declare them with `var` first, then define them with `=`.

Syntax:

```
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
```

What is the value of `total`? 

**Variables** can store a variety of data types:

- Strings - `“Hello, my name is Lee.”`
- Numbers - `40, 0.15`
- Boolean - `True` or `False`
- Null - literally nothing
- “” - undefined value
- Functions - here we go…!

#### Gut check!

What's the difference between `=`,`==`, and `===`? I see this all the time.


#####`=` is known as the  **assignment operator**
It sets variables equal to a specific value.
```javascript
var foo = 1
```
##### `==` is known as the **abstract equality comparison**
It compares two items to see if they are of equal value, but it ignores if they are the same exact _type_ of data.
```
“1” == 1 => True
Null == undefined => True
```
##### `===` is known as the **strict equality comparison**
It compares the value & type of the items to see if they are exactly the same. In the case of null vs undefined, null is more specifically typed than undefined, so they are not exactly the same value.
```
“1” === 1 => False
Null === undefined => False
```

### Functions

Functions are blocks of code that perform tasks for us.

In JavaScript, you follow the general syntax: 1) declare, 2) define, 3) call (invoke).

Syntax:
```javascript
var multiply = function(a,b){
return a * b
};
multiply(2,4);
```
~What is the value produced by this function?

###### More on the syntax of functions:
- **Parameters** - `(a,b,c)` - hypothetically what passes through the function
- **Arguments** - real values of the parameters the function affects
- **Block** - `{...}` - the function’s operational code
- **Return** command - the output of the function


### Conditional Statements

Remember [Choose Your Own Adventure](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure) books? 

Conditional statements work a lot like them and follow the basic format: *if*, *else*, *else if*...

###### If Statements

**if** - if what’s in the parameters is `True`, then a block of code will run.
If it’s `False`, the code will not run.

```javascript
if (hour < 18) {
	greeting = "Good day";
}
```
if statements by themselves default to `True`.


###### Else Statements

**else** - what if you wanted the code to do something else besides nothing if it’s False?

```javascript
if (hour < 18) {
	greeting = "Good day";
} else 
	{ greeting = “Go away.”;
}
```

###### Else if Statements

**else if** - What if another scenario comes up? 

Add an `else if` in between the `if` and `else` statements.
```javascript
if (hour < 18) 
{greeting = "Good day";} 
else if (hour < 9) 
{greeting = “OK day”;}
else {greeting = “Go away.”;}
```
_This code is actually broken. Can you figure out why?_

##### Recap of Conditional Rules

- **If** statements perform an action if the statement is True
- **Else** statements perform an action if the statement is False
- **Else if** statements perform an action if the first is False but the second is True
_Is there any other way to do this?_


## LET'S CODE

Time for us to make our *Choose Your Own Adventure* application (it's going to be very basic)!

1. Go to: https://github.com/GalvanizeOpenSource/Learn-To-Code-JavaScript-2/
2. Download the zip file of our code
3. Open the files in your text editor as one whole folder
	a. index.html
	b. styles.css
  	c. custom.js
	d. images/
4. Open the index.html file in your web browser

#### 4 Steps To Building This App

1. Start with an initial prompt
2. Create two possibilities for responding to that prompt
3. Connect everything to your HTML & CSS!
4. Test it out and see if it works

##### 1. Start with an initial prompt

We're already build one for you. The player needs to type in either 'TAKE GOLD' or 'DRINK POTION' to move onto the next phrase.

First thing we'll do is create a function that runs everything on click:

```javascript
function goldOrPotion() {
	// code of the function goes in here
}
```

Next step: we need to create a new variable called `response` that captures whatever the player types into the input field. That information be will evaluated later on.

```javascript
function goldOrPotion() {
    var response = document.getElementById("response").value;
    // more code to be typed in later on
}
```
Let's understand what's happening here. This function retrieves the value in the web page associated with the ID 'response'. That value is stored in JavaScript for the next move. 

So far, so good! *How can we check to see if this code worked?* 

Let's move onto the next phase.

##### 2. Create two possibilities for responding to that prompt

Right now, there are three outcomes:

-Player types (exactly) 'TAKE GOLD'
-Player types (exactly) 'DRINK POTION'
-Player types anything else

We need to create an *if, else if, else* conditional that does something for all three options to indicate to the player that their interactions worked. Here's the full code below.

```javascript
function goldOrPotion() {
    var response = document.getElementById("response").value;

    if (response === 'TAKE GOLD') {
      document.getElementById("gold").classList.toggle('hidden');
      document.getElementById("intro").classList.toggle('hidden');
    } else if (response == 'DRINK POTION') {
      document.getElementById("potion").classList.toggle('hidden');
      document.getElementById("intro").classList.toggle('hidden');
    } else { document.getElementById("error").innerHTML = "Sorry, I do not understand." }
}
```

Let's break it down:

```javascript
    if (response === 'TAKE GOLD') {
      document.getElementById("gold").classList.toggle('hidden');
      document.getElementById("intro").classList.toggle('hidden');
```

In other words, if the player typed 'TAKE GOLD', two things will happen:
-JavaScript will find an element with the ID 'gold' in the HTML and change the current setting of class 'hidden'
-JavaScript will find an element with the ID 'intro' in the HTML and channge the current setting of class 'hidden'

The 'intro' block is by default not hidden from the player - you get to see that in the HTML
The 'gold' block is by default hidden - the class 'hidden' and its attributes make it that way.

This will make one block of HTML appear and another block disappear, creating the illusion that you're advancing in the story. 

```javascript
    } else if (response == 'DRINK POTION') {
      document.getElementById("potion").classList.toggle('hidden');
      document.getElementById("intro").classList.toggle('hidden');
```

In the else if conditional scenario, the player typed 'DRINK POTION', then the 'intro' block would also disappear, but the 'potion' block would appear instead.

```javascript
    } else { document.getElementById("error").innerHTML = "Sorry, I do not understand." }
```

The else conditional scenario focuses on any other input that doesn't match the first posibilities. This adds a new value to the HTML page that says 'Sorry, I do not understand.' This last bit of code is helpful for knowing that the JavaScript does work, but it's looking for a particular answer.

_Question: is there a way to write this code to maintain its functionality but be even neater? What about other entries or making them less concerned about case sensitivity?_

##### 3. Connect everything to your HTML & CSS

Your HTML and CSS should have everything already set: IDs, classes, etc. Check to make sure the IDs and classes in particular correspond to the code in the JavaScript file. 

##### 4. Test it out and see if it works

Here's one last overview of what should be in your JavaScript file.

```javascript
function goldOrPotion() {
    var response = document.getElementById("response").value;

    if (response === 'TAKE GOLD') {
      document.getElementById("gold").classList.toggle('hidden');
      document.getElementById("intro").classList.toggle('hidden');
    } else if (response == 'DRINK POTION') {
      document.getElementById("potion").classList.toggle('hidden');
      document.getElementById("intro").classList.toggle('hidden');
    } else { document.getElementById("error").innerHTML = "Sorry, I do not understand." }
}
```
Click on the button. Did it work? If not, Inspect Element and see what went wrong.

### Play around in the sandbox!

- "I want to create different choices instead!"
- "I want to make it so that it's not case sensitive!"
- "What if I used buttons instead of a input prompt?"
- "I want the story to continue. How do I do that?"


## YOU DID IT, YOU'RE NOW A JAVASCRIPT CODER!

Want to learn more? Visit one of our nearby **Learn to Code** sessions or check out our other tutorials:

- [Learn to Code HTML & CSS](https://github.com/GalvanizeOpenSource/Learn-To-Code-HTML-CSS)
- [Learn to Code JavaScript: Build a Simple Game](https://github.com/GalvanizeOpenSource/Learn-To-Code-JavaScript)
- [Learn to Code Git and GitHub](https://github.com/GalvanizeOpenSource/Learn-To-Code-GitHub-Git)

You can also check out our evening courses at [galvanize.com/workshops](http://galvanize.com/workshops).

If you're ready for a full-fledged immersive program, Galvanize offers the following:

**Galvanize Web Development Immersive Program**

**Web Development Foundations in JavaScript**

To learn more, email our enrollment department at enrollment@galvanize.com.

## About the Author

**Lee Ngo** is an evangelist for Galvanize based in Seattle. Previously he worked for UP Global (now Techstars) and founded his own ed-tech company in Pittsburgh, PA. Lee believes in learning by doing, engaging and sharing, and he teaches code through a combination of visual communication, teamwork, and project-oriented learning.

You can email him at lee.ngo@galvanize.com for any further questions.
