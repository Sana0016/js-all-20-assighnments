// =============chapter_05======================//
// ===================Question_01====================//
var sum = 3;
sum += 5;
console.log(sum);
// ==================question_02================//

var sum = 3;
sum -= 5;
console.log(sum);
var sum = 3;
sum *= 5;
console.log(sum);
var sum = 3;
sum /= 5;
console.log(sum);


// ==================question_03================//

var value;
document.write(`the value of variable after decleration </br>`);
value = 5;
document.write(`value after declaration is "5" </br>`);
value += 1;
document.write(`value after increment is "6" </br>`);
value += 7;
document.write(`the value after add 7 is "13" </br>`);
value -= 1;
document.write(`the value after decrement is "12" </br>`);
value /= 3;
document.write(`outpt : the reminder is '0' </br>`)




// ==================question_04================//
var ticket = 600;
 ticket *= 5;
 document.write(`Total cost to buy 5 tickets to a movie i `+ (ticket) +`PKR </br>`);




// ==================question_05================//

for (var i = 1 ; i<= 10 ; i++){
    document.write('4 x ' + i + ' = ' + 4*i);
    document.write('</br>')
}




// ==================question_06================//

var celcius = 32;
var farheniet = -32;
 farheniet = (celcius* 9/5) + 32;
document.write(`</br></br>F <sup>0</sup>`+farheniet +"</br> </br>");
celcius = (farheniet - 32)* 5/9;
document.write(`C <sup>0</sup>`+celcius +"</br>");




// ==================question_07================//

var item01 = 670;
var item02 = 100;
var quantity01 = 3;
var quantity02 = 7;
var shipping = 100;
var total = (670*3) + (100*7) + 100;
document.write(`price of item 1 is` + " "+ (item01)+"</br>");
document.write(`quantity of item 1 is` + " "+ (quantity01)+"</br>");
document.write(`price of item 2 is` + " "+ (item02)+"</br>");
document.write(`quantity of item 2 is` + " "+ (quantity02)+"</br>");
document.write(`shipping charges` + " "+ (shipping)+"</br>");
document.write(`Total cost of your order`+ " "+ (total)+"</br></br>");


// ==================question_08================//
var total_marks = 980;
var obtain_marks = 804;
var percentage = 82.77684274940980;
document.write(`Toatl marks` + (total_marks)+"</br>");
document.write(`Obtained marks` + (obtain_marks)+"</br>");
document.write(`Your percentage` + (percentage) + "%"+ "</br>");

// ==================question_09================//
var US_$ = 1;
US_$ += 104.34;
var Saudi_riyal = 1;
Saudi_riyal += 27;
total = US_$ + Saudi_riyal;
document.write(`<h1>TOTAL CURRENCY OF PAKISTAN</h1> Total currency in PAKISTAN :` +" "+(total)+"</br>" );
// ==================question_10================//
var sum;
sum = 4* (5/9)+13-4;
console.log(sum);





// ==================question_11================//
var current_year = 2024;
var birthYear = 2002;
var age = 22;
document.write(`<h1>AGE CALCULATE</h1>Current age ` + (current_year)+"</br>");
document.write(`Birth year` + (birthYear)+"</br>");
document.write(` Your age is` + " "+ (age) + "</br>");
// ==================question_12================//

var radius = 20;
var circumference = 2 * (3.142) * radius;
var area = 3.142 * radius * 2;
document.write(`<h1>THE GEOMATERIZER</h1>`)
document.write(`Radius of circle`+ " "+(radius) + "</br>");
document.write(circumference + " " + "</br>");
document.write(area+ " " + "</br>");









// ==================question_13================//
var fvrt_snake = "chocolate";
var age = 22;
var max_age = 60;
var amount = 3;
var total = (22 + 60) * 3;
document.write(`<h1>Th e lifetime supply calculate</h1>faviourate snake chocolate:`+"</br>");
document.write(`Current age :` + (age)+"</br>");
document.write(` estimate maximum age :` + " "+ (max_age) + "</br>");
document.write(`amount of snake per day`+ " " + (amount) + "</br>");
document.write(`you will need`+" " + (total) + " " +`to last you until a life the ripe old age` + "</br>");
