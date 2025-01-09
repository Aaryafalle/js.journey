let object = {
    name : "Aarya",
    std :10,
    rollno : 23
}

// for in loop
for (const key in object) {
    console.log(key, ":", object[key]);
}

//for of loop
for (const c of "Aarya") {
    console.log(c);   
}
//while loop
let i=0;
while(i<10){
    console.log(i);
    i++;
}