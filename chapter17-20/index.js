// =============chapter17-20==================//
// ==================question_01================//


// var array = [[],[],[]];

// ==================question_02================//

// var array1 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

// ==================question_03================//
// document.write("<h4> Counting </h4>")
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>")
// }
// document.write("<br><br>")

// ==================question_04================//

// var table = +prompt("Enter a number to show its multiplication table ")

// for(i = 1 ; i <= 10 ; i++ ){

//  document.write(table + " X " + i + " = " + table*i + "<br>")
// }

// ==================question_05================//


//  var tableof = +prompt("Enter a number to show its multiplication table ");
//  var endto = +prompt("Enter the length of table");

//  document.write("<h4> Table to desired length </h4>")
//  for(var i = 1 ; i <= endto ; i++){

//     document.write(tableof + " X " + i + " = " + tableof*i + "<br>")
//  }

// ==================question_06================//

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>")
// }

// document.write("<br><br>")

// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }

// document.write("<br><br>")


// ==================question_6(1)================//

// document.write("<h5> Counting : </h5>")

// for (var i = 1; i <= 15; i++) {
//     document.write(i + "<br>")
// }


// ==================question_6(2)================//

// document.write("<br><br>")
// document.write("<h5> Reverse Counting : </h5>")
// for (var i = 10; i >= 1; i--) {
//     document.write(i + "<br>")
// }

// ==================question_6(3)================//

// document.write("<h5> Even Numbers: </h5>")

// for (var i = 0; i <= 20; i++) {

//     if (i % 2 === 0) {
//         document.write("  " + i + "  ")
//     }
// }
// document.write("<br><br>")


// ==================question_6(4)================//

// document.write("<h5> Odd Numbers: </h5>")

// for (var i = 1; i <= 20; i++) {

//     if (i % 2 !== 0) {
//         document.write("  " + i + "  ")
//     }
// }
// document.write("<br><br>")


// ==================question_6(5)================//

// document.write("<h5> Series: </h5>")

// for (var i = 2; i <= 20; i++) {

//     if (i % 2 === 0) {
//         document.write("  " + i + "K  ")
//     }
// }
// document.write("<br><br>")
// ==================question_7================//


// var dessert = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userinput = prompt("What do you want to order from our bakery?")
// var flag = false;

// for (var i = 0; i < dessert.length; i++) {

//     if (userinput === dessert[i]) {
//         flag = true;
//         alert(userinput + " is available at index " + i)
//         break;
//     }

// }
// if(!flag){
//     alert(userinput + " is not available ")
// }


// document.write("<br><br>")

// ==================question_8================//


// var a = [24, 53, 78, 91, 12];
// var largest = a[0];

// document.write("<h5> maximum number of this array </h5>" + a) 
// for(i = 0 ; i < a.length ; i++){
 
//     if(a[i] > largest){
//          largest = a[i]
//     }
// }

// document.write("<br>The largest number is : " + largest)



// document.write("<br><br>")

// ==================question_9================//


// var b = [24, 53, 78, 91, 12];
// var largest = a[0];

// document.write("<h5> smallest number of this array </h5>" + a) 
// for(i = 0 ; i < b.length ; i++){
 
//     if(a[i] < largest){
//          largest = a[i]
//     }
// }

// document.write("<br>The smallest number is : " + largest)

// document.write("<br><br>")


// ==================question_10================//


// for(var i = 1 ; i <= 20 ; i++){
//     document.write((i * 5) + " ")
       
//}