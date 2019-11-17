// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
// Console.log the length of the array.

const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
  console.log(cars.length);

// concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];

const totalCars = cars.concat(moreCars); 
  console.log(totalCars);

// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];
  let x = moreCars.indexOf("Honda");
   console.log(x);
  
// Use the lastIndexOf method to console.log the index of Ford.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];

const totalCars = cars.concat(moreCars); 
  let x = totalCars.lastIndexOf('Ford');
  console.log(x);

// join
// Use the join method to convert the array totalCars into a string called stringOfCars.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];

const totalCars = cars.concat(moreCars); 
  let stringOfCars = totalCars.join();
  console.log(stringOfCars);

// split
// Use the split method to convert stringOfCars back intro an array called totalCars.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];

const totalCars = cars.concat(moreCars); 
  let stringOfCars = totalCars.join();
  console.log(stringOfCars);
  
const total = stringOfCars.split();  

// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];
const totalCars = cars.concat(moreCars); 

let carsInReverse = totalCars.reverse();
  console.log(totalCars);

// sort
// Use the sort method to put the array carsInReverse into alphabetical order.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];
const totalCars = cars.concat(moreCars); 

let carsInReverse = totalCars.reverse();
totalCars.sort();
  console.log(carsInReverse);

// Based on the types of cars you used, predict which item in the array should be at index 0.
          //MY PREDICTION IS "CADILLAC."
// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf('yourPrediction'));
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];
const totalCars = cars.concat(moreCars); 

let carsInReverse = totalCars.reverse();
totalCars.sort();
  alert(carsInReverse.indexOf('Cadillac'));

// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];
const totalCars = cars.concat(moreCars); 

let carsInReverse = totalCars.reverse();

let removedCars = carsInReverse.slice(1,6);
console.log(removedCars);

// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];
const totalCars = cars.concat(moreCars); 

let carsInReverse = totalCars.reverse();

let splicedCars = carsInReverse.splice(2,3, "Honda", "Ford");
console.log(carsInReverse);

// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];
const totalCars = cars.concat(moreCars); 

let carsInReverse = totalCars.reverse();

let splicedCars = carsInReverse.splice(2,3, "Honda", "Ford");
let pushCars = carsInReverse.push('GM','VW');
console.log(carsInReverse);

// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];
const totalCars = cars.concat(moreCars); 

let carsInReverse = totalCars.reverse();
let poppedCar = carsInReverse.pop();

console.log(carsInReverse);

// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];
const totalCars = cars.concat(moreCars); 

let carsInReverse = totalCars.reverse();
let poppedCar = carsInReverse.pop();

console.log(poppedCar);

// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
const cars = ['Ford', 'Cadillac', 'Chevy', 'VW'];
const moreCars = ['GM', 'Lincoln', 'Tesla', 'Honda'];
const totalCars = cars.concat(moreCars); 

let carsInReverse = totalCars.reverse();
let unShiftCars = carsInReverse.unshift('BMW', 'Hyundai')

console.log(carsInReverse);


// forEach
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
const numbers = [23, 45, 0, 2];
numbers.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item + 2;
}

console.log(numbers);
