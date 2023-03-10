var dogs = ["Daisy", "Sadie", "Winston"];
console.log(dogs);

var numberOfToys = [4, 3, 8];
console.log(numberOfToys);


var trainedDogs = [true, true, false];
console.log(trainedDogs);

// This array method removes the last element in the array each time it is used.
// This will remove the element "Winston" from the array.
dogs.pop();
console.log(dogs);

// This array method removes the first element in the array each time it is used.
//This will remove the element 4 from the array
numberOfToys.shift();
console.log(numberOfToys);

// The push method adds one or more elements to the end of an array and returns the new length of the array.
// This will add a true element to the end of the array.
trainedDogs.push(true);
console.log(trainedDogs);

// Index positions correspond to the elements in an array. 
// The first element in an array is in index position 0 and it goes
// up numerically by 1 from there. (0,1,2,3)

var friends = ["Nick", "Sira", "Megan"];

// Nick is in index position 0, Megan is in position 2

console.log(friends[1]);
// This command will pull up Sira