function student(name) 
{
    console.log("she is "+ name);
    console.log(name+ " is a student");
    console.log(name+ " is a student in the class");
    
}
student("aarya")

function sum(a,b,c=3) { //c=3 is optional value
 return a+b+c;    
}
// sum(5,3)
result1 = sum(5,3);
result2 = sum(54,3);
result3 = sum(3); // 3+undefined+3 = NaN
result4 = sum(5,43);

console.log("the result is :" +result1);

console.log("the result is :" +result2);

console.log("the result is :" +result3);

console.log("the result is :" +result4);
