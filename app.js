'use strict';
const person = [];
 
alert('This is alert message');
 
var  inp = prompt('please Enter your name here : ');
person[0]= console.log(inp);
 
var  gender = prompt('please Enter your gender here : you must enter "male" or "female"');
 
person[1]= console.log(gender);
 
 
var  age = prompt('please Enter your age here : ');
console.log('Your age is : ',age);
person[2]= console.log(age);
    if (age<=0)
    {
        alert('the age must be bigger than 0 ');  
    }
    confirm("Do you want to skip the welcoming message?");
 
    if (gender=="male")
{
 var x= 'welcome  MR    ' + inp + ' ! How are you today?';
alert(x);
}
else if (gender=="female")
{
    var y= 'welcome  MRs    ' + inp + ' ! How are you today?';
    alert(y);
}
else
{
    var z= 'welcome    ' + inp + ' ! How are you today?';
    alert(z);  
 
     
}

// eman
//Eman
let proceed = prompt("do you want to answer another 3 questions? answer with yes or no ");
if (proceed=="yes")
{
 
    var  lastName = prompt('please Enter your last name here : ');
     person[3]= console.log(lastName);

     var  luckyNum= prompt('please Enter your lucky digit number : ');
     person[4]= console.log(luckyNum);

     var  birthday = prompt('please Enter your birthday   : ');
     person[5]= console.log(birthday);

}
 else if  (proceed=="no") 
 {
     
alert('ok thank you ');
 }
 else if  (proceed==" ")
 {
    console.log("invalid answer");
 }
  
 