

let number = 0;
var  memper = document.getElementById("stackBox");
var colors= ['MediumSpringSteelBlue	',  'SteelBlue', 'lime', 'MediumSpringSteelBlue	', 'orange',   'silver', 
'teal', 'orange', 'yellow','SteelBlue', 'lime', 'orange'];

    function push() {
    if (number !=10 )  { 
        const newOne = document.createElement('div');
        newOne .classList.add('stack-item');
        memper.insertBefore(newOne,memper.childNodes[0]);
        number++;
        newOne.textContent = " itme "+ number ;
        newOne.style.backgroundColor = colors[number];
        document.getElementById("view").innerHTML=number;
        document.getElementById("view").style.color=colors[number];
    }
    else 
        document.getElementById("view").innerHTML= "The stack  is full" ;
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
    
    function peek() {
    
        let temp = memper.childNodes[0];
        memper .innerHTML='';
        memper.appendChild(temp,memper);
        document.getElementById("view").innerHTML=" The Peek item is  ";
        number=1;
    }

    function swap() {
     if(number >1){
        let temp = memper.childNodes[1];
        memper.replaceChild(memper.childNodes[0],memper.childNodes[1]);
        memper.insertBefore(temp,memper.childNodes[0]);
        document.getElementById("view").innerHTML=" The two top item is swaped "
        }
     else 
        document.getElementById("view").innerHTML=" No enough item to swap "
    }