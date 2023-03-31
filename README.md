TDD

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