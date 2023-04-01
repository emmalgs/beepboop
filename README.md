# The Beep Boop Machine

#### By _**Emma Gerigscott**_

#### _A webpage that transforms a number into Mr.Rogers nonsense!_

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

A webpage that takes a user's input number and outputs a range of robot noises plus a little Mr.Roger's catch phrase. This was used to practice loops, if else statements and arrays in JavaScript. 

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the directory_
* _Open index.html in your browser_

## Known Bugs

* _The typewriter feature does not timeout correctly and starts going faster and faster unless you refresh the page_

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023 Emma Gerigscott

### TDD

Describe: beepBooper();

Test: "It should return an array counting up from 0 to inputted number"
Code: beepBooper(5);
Expected Output: [0, 1, 2, 3, 4, 5];

Test: "It should replace numbers containing a 1 with "beep" and return the updated array"
Code: beepBooper(5);
Expected Output: [0, "beep", 2, 3, 4, 5];

Test: "It should replace multiple numbers containing a 1 with "Beep!" and return the updated array"
Code: beepBooper(11);
Expected Output: [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!, "Beep!"];

Test: "It should replace numbers containing a 2 with "Boop!" and return the updated array"
Code: beepBooper(11);
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!, "Beep!"];

Test: "It should replace multiple numbers containing a 2 with "Boop!" and return the updated array, following heirarchy rules"
Code: beepBooper(12);
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!, "Beep!", "Boop!"];

Test: "It should replace numbers containing a 3 with "Won't you be my neightbor?" and return the updated array, following heirarchy rules"
Code: beepBooper(13);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neightbor?", 4, 5, 6, 7, 8, 9, "Beep!, "Beep!", "Boop!", "Won't you be my neighbor?"];

Test: "It should ignore any extra white space"
Code: beepBooper("          15   ");
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neightbor?", 4, 5, 6, 7, 8, 9, "Beep!, "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!"];


Describe: inputChecker();

Test: "It should return false if value is a string"
Code: inputChecker("show me my beepbooper!");
Expected Output: false;

Test: "It should return false if value is empty"
Code: inputChecker(" ");
Expected Output: false;

Test: "It should return the trimmed input value as a string"
Code: inputChecker("   18   ");
Expected Output: "18";

Test: "It should remove any punctuation from input value"
Code: inputChecker("   !18,.'\   ");
Expected Output: "18";

Test: "It should remove anything that is not a digit from the input"
Code: inputChecker("slab of butter 25");
Expected Output: "25";

Test: "It should not let the user enter a number greater than 1000, because that's just too much"
Code: inputChecker("19020983019");
Expected Output: false;