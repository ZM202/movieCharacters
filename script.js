// Students use the 4 images to create 2 objects and 
// 2 object constructors that will display the properties on the console log. 
// Requirements will be 2 strings, 1 boolean, 1 integer.

let celebrity = {
    name: 'Selena', 
    genderfemale: 'true', 
    age: 25, 
    status: 'deceased'};

let actionMovie = {
    name: 'BlackPanther', 
    genderfemale: 'false', 
    age: 31, 
    status: 'alive'};

console.log(celebrity);
console.log(actionMovie);


function movies (name, genderfemale, age, status){
    this.name = name;
    this.genderfemale = genderfemale;
    this.age = age;
    this.status = function (){
    console.log (`Is this person ${this.status}`);
    }
}
//Question>>> the console isn't showing the statement of Is this person alive or deceased for Line 26.>>

// Create and Initalize Method
// Object.create(movies);
// new movies (name, genderfemale, age, status);

//Question>>> the console is showing as the genderfemale is not defined. It is showing at the top as true/
//false.

let song = ["Selena", "true", 25, "deceased"];
let text = "";
for (i = 0; i < song.length; i++){
    text +=song[i] + "\n";
}
console.log(text);


