//console.log("hello world");
//alert("me");
//document.write("hi iam karhik");
//console api
console.log("hi");
console.error("error");
console.warn("warning");
//java script variables
var n1=5;
var n2=6;
console.log(n1+n2);
//document.write(n1+n2);
//data types
var num1 = 2;
var num2 = 3;
var str1 = "thisisastring";
var str2='thisalso string';


//objects
var marks = {
    ravi :34,
    karthik : "thisnsis karthik",
    harry : 55

}
console.log(marks);
//boolean values
var a =true;
var b =false;
console.log(a,b);
//console.log(b);
//var und =undefined;
var und;
console.log(und);
var n =null;
console.log(n);
var arr = [1,2,'karthik',3,4,5,6,7];
console.log(arr);
//operator in java script
var a= 3;
var b= 4;
console.log('vale add of a nad b',a+b);
console.log('vale sub of a nad b',a-b);
console.log('vale mul of a nad b',a*b);
console.log('vale divide of a nad b',a/b);

var a = 2;
a+=10;
console.log(a);
//comparison operators
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);

//logical operators
console.log(true && true);

console.log(true && false);
console.log(true || true);
console.log(true || fasle);
//logical not
console.log(!true);
console.log(!false);

//function of  java script
//dry= do not repeat yourself
function avg(a,b)
{
    return (a+b)/2;
}
c1=avg(2,3);
c2 = avg( 5,6);
console.log( c1,c2);
//conditions in java script
//single if statement
var age =3;
if(age >=  20)
{
    console.log('your not a kind')
}
//if-else statment
if( age >20)
{
    console.log('your adult');
} 
else if  ( age <19 && age > 10) {
    console.log('your young');
}
else if(age < 6  && age > 2) 
{
    console.log("your a kid")
}

//loops
var arr = [1,2,3,4,5,6,7]
// for ( var  i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
//  arr.forEach(function(element){
//      console.log(element);
//  })
//const e =0;
//e++;
// let j=0;
//  while(j<arr.length ){
//      console.log(arr[j]);
//      j++;
//  }

//  do{
//     console.log(arr[j]);
//     j++;
//  }while(j<arr.length);

//  for ( var  i=0;i<arr.length;i++)
//  {
//      if( i==2){
//          continue;
//      }
//      console.log(arr[i]);
//  }

 let myarr = ['karthik','camera', 34,null];
console.log(myarr.length);
myarr.unshift('visa');
//myarr.shift();
//myarr.push('kushal');
//myarr.pop();
console.log(myarr);

let str = 'karthik is a  good boy';
// console.log(str.length);
// console.log(str.indexOf('good'));
// console.log(str.slice(1,15));
console.log(str.replace("karthik","kushal"));

let mydate= new Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getDay());
console.log(mydate.getHours());

//dom manipulation
let elem = document.getElementById('click');
console.log(elem);
 let elemclass = document.getElementsByClassName('container');

 








































