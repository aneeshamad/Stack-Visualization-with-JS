

let number = 0;
var  memper = document.getElementById("stackBox");

function push() {
const newOne = document.createElement('div');
newOne .classList.add('stack-item');
memper.appendChild(newOne,memper.childNodes[0]);
number++;
document.getElementById("view").innerHTML=number;


}

 function size() {
  document.getElementById("view").innerHTML=number;
 }

 function isEmpty() {
  
    if (number==0)
    document.getElementById("view").innerHTML= "YES  it is empty";
    else
    document.getElementById("view").innerHTML= "NO there is  " +number +" item ";
 }

 function pop(){
   if (number!= 0){
     memper.removeChild(memper.childNodes[0]);
     number--;
     document.getElementById("view").innerHTML=number;
     
   }
   else
   document.getElementById("view").innerHTML=" No item to remove";
 }

 function New_stack() {
   memper .innerHTML='';
   number = 0;
   document.getElementById("view").innerHTML=number;
 }