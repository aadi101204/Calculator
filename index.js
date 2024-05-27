var operators=['+','-','*','/'];
var firstoperand=null;
var secondoperand=null;
var operator=null;
var equal=null;
var dot=null;

var lastoperation=null;
var flag=true;

var box=null;

var numbers=[1,2,3,4,5,6,7,8,9,0];
var lastbuttonpressed=null;

var result=null;

var keycombination=null;
//function press is for arithmetic operations add,subtract,divide and multiply
function press(button){
    operator=document.getElementsByClassName("operator");
    firstoperand=document.getElementsByClassName("history");
    box=document.getElementsByClassName("box");
    equal=document.getElementById("equal");
    dot=document.getElementById("dot");

    lastbuttonpressed=button;

    if(!operators.includes(button) && button!=equal){
        if(flag){
            if(button==dot){
                box="0"+dot;}
            else{
                box.innertext=button
            }
            flag=false;
        }
        else{
            if(box.innertext.length==1 && box.innertext==0){
                if(button==dot){
                    box.innertext=box.innertext+button;
                }
                return;
            }
            if(box.innertext.includes(dot) & button==dot){
                return;
            }
            if(box.innertext.length==20)
                return
            else{
                box.innertext=box.innertext+button;
            }
        }
    }
    if(button==equal)
        return;
    else{
        //case 1: history has a number 
        if(numbers.includes(box))
    }
}