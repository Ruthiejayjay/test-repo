function theLordSays(){
const prophet=' the lord says';
let yourName=document.querySelector('#name').value;
let age=document.querySelector('#age').value;
let gender=document.querySelector('#gender').value;
const male='male';
const female='female';

if (age>=21 & age<=60 & gender===male) {
  alert(yourName+' '+prophet + ' '+ 'pay $25')
}
else{
  if(age>=21 & age<=60 & gender===female){
    alert(yourName+' '+prophet+ ' '+ 'pay $15')
  }
}
if (age==5 & age<=20 & gender===female) {
  alert(yourName+' '+prophet + ' '+ 'pay $5');
  
} else {
  if (age==5 & age<=20 & gender===male) {
    alert(yourName+' '+prophet + ' '+ 'pay $10');
    
}
}
if (age<5 & gender===male) {
  alert(yourName+' '+prophet + ' '+ 'pay $2.5')}
else{
  if (age<5 & gender===female) {
    alert(yourName+' '+prophet + ' '+ 'pay $1.5')}
}
if (age>60 & gender===male) {
  alert(yourName+' '+prophet+ ' '+ 'pay $7')
} else {
  if (age>60 & gender===female) {
    alert( yourName+' '+prophet + ' '+ 'pay $5')
}

}
}