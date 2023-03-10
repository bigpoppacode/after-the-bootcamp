---
title: 'Functions The First Frontier'
subTitle: 'An Introduction to Functions in JavaScript'
excerpt: 'I want to be the best. I want to be the best simple and plain, thats what drives me - Kobe Bryant'
featureImage: '/img/functions.png'
date: '10/28/21'
order: 0
---

![function](/img/mamba.gif)

# Explanation
## Why Should I care about this I just want to know REACT

* JavaScript Functions are incredibly versatile and in javascript they are what's known as
first class citizens meaning they can be passed around like any other object.
* Functions are literally objects in JS the same way Arrays are as you learned yesterday.
* We will be using Functions everyday in JavaScript so you will learn more and more about them daily through repitition.

## Setup

make a file `functions.js`

Test that a console.log will appear in Terminal when you run the file.

```
$ node functions.js
```
## What is a function?

```javascript
// 2 ways of creating functions

// function declaration
 	function one () {
   	  return 'one'
 	}
 	one()

 // function expression
 	const two = () => {
   	  return 2
 	}
 	const shotenedTwo = () => 2

```
## Describe why we use functions

Using functions is another application of DRY. Don't Repeat Yourself. With a function, you can store code that can be used conveniently as many times as you wish, without having to rewrite the code each time.

# Demonstration
## Defining a function

```javascript
const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};
```

Always use **`const`** to declare your functions. It would be a strange day when a function would need to be reassigned.

The code will not run yet. The function needs to be **invoked**.

## Invoke a function

Use one line of code to run multiple lines of code

```javascript
printBoo();
```

Simply use the name of the variable and use **parentheses** to invoke the function.

If the parentheses are not included, the function will not run.

The invocation comes **after** the function definition. If you write it beforehand, it will be trying to invoke something that doesn't yet exist according to the interpreter.

This will work:

```javascript
const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};

printBoo();
```

VS

This will not:

```javascript
printBoo();

const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};
```

# Imitation
## Code Along

* Write a function `printSum` that will console.log the result of 10 + 10

**Extra Reps**

* Write a function `printTriangle` that will print these pound signs to the console (there are 5 console.logs inside the function):

	```
	#
	##
	###
	####
	#####
	```

* Make it so that `printTriangle` will print the pound signs using a for loop (there is a for loop and only 1 console.log inside the function).  

* Make it so that when you can invoke the function with the number of pound signs to print (not just hardcoded to print 5)

## Properly name a function

The variable you use for a function should contain a **verb**. Functions **do** something, most often:

* getting data
* setting data
* checking data
* printing data

If the purpose of your function is to check data, for example, use the verb `check` in the variable name.

Example function that contains a conditional:

```javascript
const checkInputLength = (input) => {
	if (input.length > 10) {
		console.log('input length is greater than 10');
	} else {
		console.log('input length is not greater than 10');
	}
};
```

1. A Function name should always start with a verb
1. A function if possible should be pure meaning it shouldn't effect anything outside of itself
1. If it does effect something outside of itself you should let the resder of the function know that by the name for example we could have a function that checks if something is or isn't something
1. we could also have a function that changes something or **Mutates** something like when you are playing a video game and you score a point, the function that updates the score could be called updateScore or setScore or changeScore
1. Functions should try to do **only one thing** If a function, called `checkInputLength`, does more than just check input, then it is a poor function.

```javascript
	// function that mutates
	const ricMershon = {
	age: 21
	}
	const scottDraper = {
	age: 25
	}

	const increaseAge = (person) => {
	  person.age += 1
	  console.log (`Horray it's your ${person.age} birthday`)
	}

```

Takeaway: Think about appropriate **verbs** to use in your function variable names. The verbs should indicate the **one thing** that the function does.

## Write an arrow function with a parameter

The preceding function, `checkInputLength` had a **parameter** called `input`.

Functions can receive input that modify their behavior a bit.  This input is called a **parameter**.

In the below example, the parameter is arbitrarily called `name`. We can call our parameters whatever we want - whatever makes semantic sense.

Using **concatenation** I can put the input into a string:

```javascript
const sayName = (name) => {
	console.log('Hello! My name is ' + name);
}
```

When we _invoke_ the function, we can specify the value of the parameter, this is called an **argument**:

```javascript
sayName("Frodo");
```

We can continue to invoke the function with whatever **arguments** we want:

```javascript
sayName("Merry");
sayName("Pippin");
sayName("Sam");
```

Each time, the output of the function will change to reflect the argument.

### Argument vs Parameter

The **argument** is the input, the **parameter** is how the input is represented in the function.

```javascript
const func = (PARAMETER) => {
	// some code
}

func(ARGUMENT);
```


## Write an arrow function with multiple parameters

A function can take any number of parameters.

```javascript
const calculateArea = (num1, num2) => {
	console.log(num1 * num2);
}
```

When you invoke the function, you generally want to supply the right number of arguments.

```javascript
calculateArea(4, 4)

```
> => 16


## How does this work? Aka (The Execution Context Interview Question Answer)

```javascript
let myNum = 2;

const square = (num) => {
	return num * num
}

```
so in our code we have now created a variable myNum on line 1  that is equal to 2 and then created
a variable called sqaure that is equal to the function we created.

JavaScript does 3 super awesome things that makes it a great very first programming language, and that makes
it elegant enough to be used by developers with decades of experience.

We will go over those things as we go through this course but what pertains to us is the awesome feature of the
JavaScript being single threaded and reading code line by line and executing code only when you ask it to.

So in JS when it comes to what's running in our code we are never too confused if we remember JS goes line by
line and 1 at a time.

And we keep track of this in what's called our Execution Context
![js engine 1](https://media.git.generalassemb.ly/user/15881/files/d4842a00-3df3-11ea-909c-33a0a198c451)

So when the JS Engine looks at our code it will start at the top and perform each operation line by line

![js engine 2](https://media.git.generalassemb.ly/user/15881/files/d77f1a80-3df3-11ea-90dd-edd3b3f119ef)

```javascript
let myNum = 2;

const square = (num) => {
	return num * num
}
const ans = square(myNum)

```

![js engine 3 updated](https://media.git.generalassemb.ly/user/15881/files/db12a180-3df3-11ea-8acb-33e15c196cf3)

So as you can see when we call a function we go ahead and add it to the stack of things that we want JS to
do. Once JS has finished that task it goes back to the main code on the next line and runs again.

So once square has completed running it will give us a value and assign it to ans


```javascript
let myNum = 2;

const square = (num) => {
	return num * num
}
const ans = square(myNum)
console.log("Hello World")

```
 what order will this happen


```javascript
let myNum = 2;

const square = (num) => {
	return num * num
}
console.log("Hello World")
const ans = square(myNum)

```
what about this?

## Break a problem down into steps

Write a function that will **return** true if a word is a Palindrome, or will **return** false if not.

* Problem solve one step at a time
* Each step might require research

Work in layers, one layer at a time. Don't jump ahead until each piece has been tested and works.

Determine if each step will require research, and research it.

* reverse the word (how?)
* check if the word is the same as the reverse (how?)
* return true or false


```javascript
	// --- Examples:
	//   palindrome("racecar") === true
	//   palindrome("abcdefghijklmnop") === false

```

# Practice

## Exercises

* Write a function called square that takes in a number and squares it and then assign the result to variable called ans
	```javascript
		square(5); // 25
	```
* Write a function called `minusOne` that takes a parameter `num`. Assuming the argument is a number, print the argument -1.

	```javascript
	minusOne(10);        // 9
	minusOne(100);       // 99
	minusOne(Infinity);  // Infinity
	```

* Write a function `makeSentence` that takes **three** parameters and **concatenates** them into a fully formed sentence.

	```javascript
	makeSentence('I', 'want', 'chimichangas');
	```

	> => 'Oh boy, do I want chimichangas or what?'

**Extra**

* Write a function called `getLastElement` that takes a parameter `arr`.
* Invoke the function with an **array** as the argument.
* The function should print the **last element** within the array.

	```javascript
	getLastElement([1, 2, 3, 4, 5, 6]);       // 6
	getLastElement(['a', 'b', 'c']);          // 'c'
	getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]
	```

	_Hint:_ `arr[arr.length - 1]`


**Extra**

* Write a function `divideThreeNums` that takes **three** parameters and prints the third parameter divided by the result of the second parameter divided by the first.

	```javascript
	divideThreeNums(10, 5, 2)   // 4
	divideThreeNums(30, 2, 9)   // 135
	```


### Exercises ( aka example whiteboard questions for junior devs)

* Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then
return the capitalized string.
```javascript
	// --- Examples
	//   capitalize('a short sentence') --> 'A Short Sentence'
	//   capitalize('a lazy fox') --> 'A Lazy Fox'
	//   capitalize('look, it is working!') --> 'Look, It Is Working!'
```

* Write a function that takes three parameters (numbers), sums them, converts the sum into a string and returns the string (eg. `"123"`)
	* Use your google-fu to research converting a number into a string
	* Invoke the function a couple of times with different arguments each time

* Experiment
	* What happens if you supply more arguments than there are parameters?
	* What happens if you supply fewer arguments than there are parameters?
