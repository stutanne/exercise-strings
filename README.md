# exercise-strings
## Goal
The goal of this exercise is to reinforce your ability to work effectively with strings (and give you expiernece with unit testing plus throw in a little work with node, modules and the command line).

You are provided with the stub of a file that implements a module. Since this is a pettern you will encounter in many modern javascript libraries I think it is a good starting point

Your challenge is to write code that lets you pass each of the unit tests provided. That's it. 

## Strategy
You will be running the unit tests in the `exercise-strings-test-spec.js` file and then writing code in `exercise-strings.js` to make each test case pass (while not breaking previously passed test cases). 


Start by simply getting the first test case to pass. After that, tackle them in order, enabling the next test case to run in addition to the ones you previously passed. Try to avoid letting previously passed tests fail. Your initial run through may be sloppy but don't worry about that (no one is looking!)... just get the tests passing. Once you have passed all of the tests consider how you could optimize or otherwise improve your code. Look at readability, neatness, organization, efficiency and anything else that you think should be considered.

## Setup
The very first step is to clone this project repository to your computer. ** TODO: NEED INSTRUCTIONS ON CLONING/FORKING FROM GITHUB **


This code requires node and jasmine-node in order to run the tests. To install node on a Mac I recommend using the [homebrew package manager](http://brew.sh/). Once homebrew is installed here's how to get node: ** TODO: WINDOWS INSTALL INSTRUCTIONS FOR NODE **

1. Open up the terminal app and type `brew install node` (that's it... node is installed)
	
To verify your node install run this from the command line:

	$ node -v

If all is well you should see the node version number output to the screen.

Installing jasmine-node is a little different as it uses node's built-in package manager, npm. With node successfully installed (meaning you also have npm) run the following to get this module installed:

	$ npm install -g jasmine-node 

## Run

Once the dependencies are installed and you are ready to go your first step should be to try the first unit test. It should fail because you haven't written any code yet. To do this execute the test spec from within the project directory and from the command line with:

    $ jasmine-node exercise-strings-test.spec.js
	
You will see a failure message. This is good as it means everything is working as expected. Now go into `exercise-strings.js` and write code that will allow that first test to pass. Rerun the unit test and when you see a success message, you've passed the first test. Congratulations!

Moving on, you should enable the next test and try to get it to pass (along with your previous test... don't break the tests you've already passed). To enable a test simply rename the function in the spec file from `xit()` to `it()`. Any test with the function name of `it()` will be run by jasmine.

Once you have all tests passing try to optimize your code as described in the Strategy section. There are many different ways of varying complexity, clarity and cleverness to get these tests to pass so keep this in mind as you refactor.

## Curious?
Want to dig into the code behind what you are doing here? Check these links out.

### Modules
**TL;DR:** (Just want a quick summary? Here you go.)

* [Stack Overflow - The purpose of module.exports](http://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it)

**Implementation**

* [The module Object - nodejs.org](https://nodejs.org/api/modules.html#modules_module_exports)

**Deep Dive**

* [Modules - Eloquent Javascript](http://eloquentjavascript.net/10_modules.html)
* [The Module Pattern - Essential JS Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
* [Mastering the Module Pattern](http://toddmotto.com/mastering-the-module-pattern/)

**Gory Details** (i.e. light reading for a slow Friday night at home)

* [Node Docs - Modules](https://nodejs.org/api/modules.html)

---

### Strings
**Deep Dive**

* [MDN - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


<!---
"For a moment, nothing happened. Then, after a second or so, nothing continued to happen." ― Douglas Adams, The Hitchhiker's Guide to the Galaxy
-->


