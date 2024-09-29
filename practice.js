/**
 * Problem-01: You have an odd array (array with odd numbers). [1, 3, 5, 7, 9]. Now convert this array into an event array (array with even numbers). [2, 4, 6, 8, 10]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even number.
 * */ 
/**           system-1:map()         **/ 

const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = oddNumbers.map(num => num + 1);
console.log('Even Number is:',evenNumbers);

// system-2 : map()

const even = oddNumbers.map((nums) => {
  if (nums % 2 === 1){
    nums++;
  }
  return nums;
})
console.log(even);

/****:***::  for loop    ::****/ 

const odd = [1, 3, 5, 7, 9];
const evens = [];
function oddNumber(number){
    for (num of number){
        if(num % 2 === 1){
            num++;
           evens.push(num); 
        }
    }
    return even;
}
console.log(oddNumber(odd));


/**
 * Problem-02: You are give an array: [33, 50, 79, 78, 90, 101, 30]. Now return / get all the elements which are divisible by 10 using array.filter() method.
 * */ 

const number = [33, 50, 79, 78, 90, 101, 30];
// using filter:
const total = number.filter(num => num % 10 ===0);
console.log(total);
// using find:
const total2 = number.find(num => num % 10 ===0);
console.log(total2);


/**
 * Problem-03: You have an array of object:
 * const instructor = [
 * {name: 'Nodi', age: 28, position: 'Senior'},
 * {name: 'Akil', age: 26, position: 'Junior'},
 * {name: 'Shobuj', age: 30, position: 'Senior'},
 * ]
 * your task is to display the instructor names that has a position senior using filter. 
 * */ 

const instructor = [
     {name: 'Nodi', age: 28, position: 'Senior'},
     {name: 'Akil', age: 26, position: 'Junior'},
     {name: 'Shobuj', age: 30, position: 'Senior'},
     ]
     const position = instructor.filter(p => p.position === 'Senior');
     console.log(position);

    /**
     * Problem-04: 
     * const people = [
     * {name: 'Meena', age: 20},
     * {name: 'Rina', age: 15},
     * {name: 'Suchorita', age:22}
     * ];
     * 1) Follow above array of object . So, you have 3 object as array element. Can you find the total sum from here?
     * using for loop and array.reduce() method.
     * */ 
    
    const people = [
         {name: 'Meena', age: 20},
         {name: 'Rina', age: 15},
         {name: 'Suchorita', age:22},
        ];
// using reduce
        const sum = people.reduce((a, c) => a + c.age,0)
        console.log('Sum Output:', sum);

        // using for loop
        let totalAge = 0;
        for(let i=0; i < people.length; i++){
            totalAge += people[i].age;
        }
        console.log('For loop sum output:', totalAge);

