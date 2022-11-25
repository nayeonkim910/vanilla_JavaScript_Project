const age = parseInt(prompt("How old are you"));

if(isNaN(age)|| age<0){
    console.log("Please write a Positive number");
}else if(age<18){
    console.log("you are too young");
}else if(age >=18 && age <=50){
    console.log("you are not kids. anymore");
}else if(age >50 && age<=80){
    console.log("you should excercise");
}
else{
    console.log("You can drink");
}