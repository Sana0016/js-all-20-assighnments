


// =============chapter14-16==================//
// ==================question_01-02================//

// var array = [];

// =====================question_3==============//

// var string = ["one", "two", "three", "four", "five"]

// =====================question_4==============//

// var numbers = [21, 23, 85, 43, 3]


// =====================question_5==============//

// var boolean = [true, false]

// =====================question_6==============//

// var mixed = ["string", 32, true, ["nested"]]
// =====================question_7==============//

// var degree = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M", "Phil", "PhD"]
// document.write("<h1> Qualification </h1>")

// for (i = 0; i < degree.length; i++) {
//     document.write(" -- " + degree[i], " </br>")
// }

// =====================question_8==============//

// var student = ["hajra", "mehreen", "afreen"];
// var score = [980, 942, 933];
// var marks = 1200;

// document.write("<h1> Marks </h1>")

// for (i = 0; i < student.length; i++) {

//     var percentage = (score[i] / marks) * 100;
//         document.write("</br></br> The score of " + student[i] + " is " + score[i] + " and the percentage is " + percentage)
    
// =====================question_9==============//


// var color = [" crimson " , " black " , " purple ", " magenta "]


// =====================question_9(1)==============//

// var addcolor = prompt("What color do you want to add in beginning of array?")
// color.unshift(addcolor);
// alert(color);

// =====================question_9(2)==============//

// var addcolor2 = prompt("What color do you want to add in end of array?")
// color.push(addcolor2);

// alert(color);


// =====================question_9(3)==============//


// var addcolor3 = prompt("Now tell us What  colors do you want to add in beginning of array?")

// color.unshift(addcolor3);

// var addcolor4 = prompt("Now tell us What  colors do you want to add in beginning of array?")

// color.unshift(addcolor4);

// alert(color);

// =====================question_9(4)==============//

// color.shift();
// alert(color);

// =====================question_9(5)==============//


// color.pop();
// alert(color);

// =====================question_9(6)==============//


// var index = +prompt("in which index you want to add color")
// var add = prompt("what color do you want to add")
// color.splice(index, 0 , add)
// alert(color)

// =====================question_9(7)==============//


// var index2 = +prompt("in which index you want to delete color?")
// var dlt = +prompt("how many color you wants to delete?")
// color.splice(index2 , dlt)
// alert(color)

//=====================question_10==============//



// var score = [32 , 12 , 98 , 73 , 90];
// document.write("Score of students : " + score);
// score.sort();
// document.write("<br> Score of students after sorting : " + score);


// =====================question_11==============//

// var cities = [" karachi " , " lahore ", " islamabad ", " quetta ", " peshawar ", "multan " ];
// document.write("<br><br><br> Cities list : " + cities);
// var selected = cities.slice(0 , 3 );
// document.write("<br> Selected cities list : " + selected);


// =====================question_12==============//
// var arr = ["This", " is ", " my ", " cat "];
// document.write("<br><br> <h1> Array : </h1>" + arr);
// var join = arr.join(" ");
// document.write("<br><br> <h1> String : </h1>" + join);


// =====================question_13==============//
// var arr1 = [" Microsoft ", " Apple ", " Google "];
// var out = "Out";
// document.write("<br><br> <h1> Array : </h1>" + arr1)

// for(i = 0 ; i < arr1.length ; i++){

//     document.write("<h1>" +  out + "</h1>" + arr1[i])

// }


// =====================question_14==============//

// var arr2 = ["keyboard","mouse","printer","monitor"]

// document.write("<br><br> <h1> Array 2 : </h1>" + arr2)

// for(i = arr2.length-1 ; i >= 0 ; i--){
//     document.write("<h1>" +  out + "</h1>" + arr2[i])
// }


// =====================question_15==============//

// var outlet = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

// document.write("<br><br> <h2> Our franchise provides <br> electronics of these brands : </h2>" )

// for( var i = 0 ; i < outlet.length ; i++){

//     document.write("<p>" + outlet[i] + "</p>")
// }