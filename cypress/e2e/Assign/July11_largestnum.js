//Find the Largest Number in an Array
let numbers = [3, 5, 7, 9, 10,21]
let largest =numbers[0];
for (let i=0; i<numbers.length; i++)
{
    if (numbers[i] > largest)
    {
        largest = numbers[i];
        }    }

console.log("largest number is: " + largest);
