// Task 6.3

function sum1 (a){
  return function(b){
    return a+b;
  }
}
const sum2= sum1(55); 
const sum3= sum2(45); 
console.log(sum3);