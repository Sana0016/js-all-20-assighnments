// ================chapter 9-11============================//
// ====================Question_01========================//

// var myCity = prompt("ENTER YOUR CITY");
// var userCity = myCity;
// if(userCity=== "karachi"){
//     alert("Welcome to a city of lights")
// }else{
//     alert("city not found")
// }


// ====================Question_02========================//
// var gender = prompt("Enter your gender");
// var user_gender = gender;
// if(user_gender==="female"){
//     alert("Good Morning Maam!");
// }else if(user_gender==="male");{
//     alert("Good Morning Sir!");
// }

// ====================Question_03========================//
// var traffic = prompt ("Enter a traffic signnal light")
// var traffic_light = traffic;
// if(traffic_light==="green"){
//     alert("Move Now!");
// }else if(traffic==="red"){
//     alert("Must Stop!");
// }else if(traffic_light==="yellow");{
//     alert("Read To Move!");
// }
// ====================Question_04========================//
// var fuel = prompt("Show your car fuel");
// var car_fuel = fuel;
// if(car_fuel < 0.25){
//     alert("Please refill the fuil in your car");
// }else if(car_fuel>=0.25);{
// alert("your car fuel is full");
// }
// ====================Question_05========================//

// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// } 
// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 
// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// } 
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
// if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }  
//  if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// }


// ====================Question_06========================//
//var totalmarks = 1400;
// var obtainedmarks = +prompt("Enter your obtained marks")
// var percentage = (obtainedmarks / totalmarks) * 100;

// if(obtainedmarks > 0 && obtainedmarks <= 1400){
//     if(percentage >= 80 ){
//         document.write("</br></br><h1>Mark Sheet </h1>")
//         document.write("</br>Total marks : " + totalmarks)
//         document.write("</br>Marks obtained : " + obtainedmarks)
//         document.write("</br>Percentage : " + percentage + "%")
//         document.write("</br>Grade : A-one")
//         document.write("</br>Remarks : Excellent")

//         }
//         else if(percentage >= 70 ){
//         document.write("</br>Total marks : " + totalmarks)
//         document.write("</br>Marks obtained : " + obtainedmarks)
//         document.write("</br>Percentage : " + percentage + "%")
//         document.write("</br>Grade : A")
//         document.write("</br>Remarks : Good")

//         }
//         else if(percentage >= 60 ){
//         document.write("</br>Total marks : " + totalmarks)
//         document.write("</br>Marks obtained : " + obtainedmarks)
//         document.write("</br>Percentage : " + percentage + "%")
//         document.write("</br>Grade : B")
//         document.write("</br>Remarks : You need to improve")

//         }
//         else if(percentage < 60 ){
//         document.write("</br>Total marks : " + totalmarks)
//         document.write("</br>Marks obtained : " + obtainedmarks)
//         document.write("</br>Percentage : " + percentage + "%")
//         document.write("</br>Grade : Fail")
//         document.write("</br>Remarks : Sorry")

//         }
// }
// else{
//     document.write("</br>Please enter valid input")
// }

//============================= Question_07====================//

// var num = 5;
// var usernum = +prompt("Guess a secret number between 1 to 10");

// if(usernum === num){

//     alert("Congratulations! You guessed it right");

// }
// else if(usernum === num + 1 || usernum === num - 1){
// alert("Close enough to the correct answer")
// }
// else(
//     alert("Try again!")
// )

//============================= Question_08====================//

// var usernum = +prompt("Enter a number to check if it is divisible by 3 or not");

// if(usernum % 3 === 0){
// alert(usernum + " is divisible by 3")
// }
// else{
//     alert(usernum + " is not divisible by 3")
// }

//============================= Question_09====================//

// var usernum = +prompt("Enter a number to check if it is even or odd");


// if(usernum % 2 === 0){
// alert(usernum + " is even number")
// }
// else{
//     alert(usernum + " is odd number")
// }

//============================= Question_10====================//


// var userinput = +prompt("Enter weather in your city")
// if ( userinput >= 30) {
//     alert("It is too hot outside.")

// }
// else if (userinput > 20 && userinput <= 30) {
//     alert("The Weather today is Normal.")

// }
// else if (userinput > 10 && userinput <= 20) {
//     alert("Today’s Weather is cool.")

// }
// else if (userinput <= 10) {
//     alert("OMG! Today’s weather is so Cool.")

// }


//============================= Question_11====================//

// var firstnumber = +prompt("Enter first number");
// var secondnumber = +prompt("Enter second number");
// var result = prompt("Enter operator")

// if(result === "+"){
//   alert("the sum of " + firstnumber + " + "  + secondnumber + " = " + (firstnumber + secondnumber) )
// }
// else if(result === "-"){
//   alert("the subraction of " + firstnumber + " - "  + secondnumber + " = " + (firstnumber - secondnumber) )
// }
// else if(result === "*"){
//   alert("the multiplication of " + firstnumber + " X "  + secondnumber + " = " + (firstnumber * secondnumber) )
// }
// else if(result === "/"){
//   alert("the division of " + firstnumber + " / "  + secondnumber + " = " + (firstnumber / secondnumber) )
// }
// else if(result === "%"){
//   alert("the modulus of " + firstnumber + " % "  + secondnumber + " = " + (firstnumber % secondnumber) )
// }
// else{
//     alert("Invalid operator")
// }