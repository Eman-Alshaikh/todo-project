'use strict';
 
 
alert('This is alert message');
 
var  inp = prompt('please Enter your name here : ');
 
 
var  gender = prompt('please Enter your gender here : you must enter "male" or "female"');
 
 
 
 
var  age = prompt('please Enter your age here : ');
console.log('Your age is : ',age);
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

