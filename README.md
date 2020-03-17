# correctEmailTypos.js

## What is it?
correctEmailTypos.js is a simple JavaScript function that gives you an easy, tested way to automatically fix your users' typoed email addresses. It's a JS implementation of [a similar library written in Ruby](https://github.com/charliepark/fat_fingers).

As an example: A user with the email `joe@gmail.com` accidentally enters in `joe@gmal.cmo`, this script will fix it.

A few notes:
* It has zero dependencies! It's really just a bunch of thoughtful string transformations.
* It's is in proper ES6 syntax!
* It's small! 2.65Kb!
* It's well-tested!

Note: This function is concerned with incorrectly-entered data (TLDs, email provider names), *not* with evaluating whether a particular domain is valid, or whether a particular email address is legitimate. (That is, it's focused on fixing the part that comes after the "@" in the email address, for the major email providers.) It works really well for helping you — and your users — when they accidentally type something in incorrectly.


## How do I use it?

When you're processing an email that a user has submitted — before you send it over the wire to your API endpoint — apply the `correctEmailTypos()` function.

So you'd do something kind of like this:

```js
  import correctEmailTypos from './correctEmailTypos';

  const handleEmailUpdate = (event) => {
    const { value: dirtyEmail } = event.target;
    const cleanedEmail = correctEmailTypos(dirtyEmail);
    // now you can send cleanedEmail to your endpoint / database / state container / whatever
  };
```

## I'm an internet old and am not sure where the code is?

Hello, fellow old! I know your pain. If you want to actually *read* the JavaScript, look in [/src/correctEmailTypos.js](https://github.com/charliepark/correct_email_typos/blob/master/src/correctEmailTypos.js). (Psst. You can also just copy that code into whatever directory your project keeps its JS. This script has zero dependencies on its own. The whole `npm run build` and `npm test` business (and Webpack, and Babel, etc.) is for the testing suite.)

If you just want the minified JS, look in [/dist/correctEmailTypos.js](https://github.com/charliepark/correct_email_typos/blob/master/dist/correctEmailTypos.js).


## How do I run the test suite?

1. Clone this repo to your local machine, `cd` into the directory, and run `npm install`.
2. Run `npm test`
3. Should all be green!

If you want to view the actual tests, look in [/src/correctEmailTypos.test.js](https://github.com/charliepark/correct_email_typos/blob/master/src/correctEmailTypos.test.js). The tests actually give you a good sense of what kinds of typos this corrects.

# Is that it?

That's it!

Shoutout to [benrugg](https://github.com/benrugg) and the other [contributors](https://github.com/charliepark/fat_fingers/graphs/contributors) to the original Ruby gem.
