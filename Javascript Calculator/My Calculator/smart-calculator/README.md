# Smart Calculator
> #### Made by [SR TAMIM](https://sr-tamim.vercel.app)


This is a standard calculator made by SR TAMIM using HTML5, CSS3 &amp; Vanilla JavaScript

- **You can do standard math operations** (add, subtract, multiply, divide)
- **Get the squared value of any number** (write the number &amp; click on `x²` button)
- **Find out the square root √ of any positive number** (write any positive number &amp; click on `√x` button)
- **Use your keyboard to calculate** (Backspace for `AC`, Delete for `Del` &amp; other `number` buttons)
- **Get your last calculated answer** (Click on `ANS` button)
- **Operate the calculator in dark or light mode**

### Visit the amazing calculator now. [Click here](https://tamim9.github.io/smart-calculator/) 
#### or visit `https://tamim9.github.io/smart-calculator/`

----

My target was to make a smart calculator only using vanilla JavaScript. Until [this commit](https://github.com/tamim9/smart-calculator/tree/3080e73ef6a2aae1f59c4b3108c79ad576be0c3b) this calculator was fully working only on vanilla JavaScript.

I always tried to fix the fractional calculation issue (like 0.1 + 0.2 = 0.30000000000000004). I've implemented many changes and spent lots of hours sitting next to my pc for solving that calculation issue. My first try to solve the issue was on [April 14, 2021](https://github.com/tamim9/smart-calculator/commit/5a1b375ddf4b6a5afc219ad5fed5cb2658401cc5). I spent my valuable time in solving that issue last on [5 & 6 March, 2022](https://github.com/tamim9/smart-calculator/commits/main). All these hard works & my precious time didn't paid off because the issue didn't totally wiped off. I had managed to solve the issue in multiplication & division but there were still issues in addition & subtraction. See the code of how I tried to solve the issue using vanilla JavaScript, [here](https://github.com/tamim9/smart-calculator/commit/61cf1c17f1f3a1350fce487685a16b8e835d998c#diff-4dccfa52287c300a49229f1c3769921fc11bf8f42b2250fd5caa5aee45eb4163R270)

At last, I gave up & search in google for any permanent solution. I found [mathjs](https://mathjs.org/) library & implemented it on this calculator on [March 7, 2022](https://github.com/tamim9/smart-calculator/commit/186801a503b46789b0c6ed0ffb2557c672504829). Finally, I hope the calculation issue has been solved.

[Check out](https://tamim9.github.io/smart-calculator) the **Smart Calculator** now & write down [here](https://github.com/tamim9/smart-calculator/issues/new) if you find any bugs or issues.

###### Thanks a lot by [SR TAMIM](https://sr-tamim.vercel.app)
