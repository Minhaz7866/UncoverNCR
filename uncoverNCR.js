
// Slider Area :-

var slide = document.getElementsByClassName("card-cont")[0];

let dot1 = document.getElementsByClassName("dot")[0];
let dot2 = document.getElementsByClassName("dot")[1];
let dot3 = document.getElementsByClassName("dot")[2];

let dot=[dot1,dot2,dot3]

dot1.onclick = function (){
    slide.style.transform="translateX(34%)";
}
dot2.onclick = function (){
    slide.style.transform="translateX(0%)";
}
dot3.onclick = function (){
    slide.style.transform="translateX(-34%)";
}

// Slider Dots Area :-

if(slide.style.transform="translateX(0%)")
{
    dot2.style.background="rgb(241, 210, 13)"
}

// sidebar:-

let leftBar=document.getElementsByClassName("left-bar")[0];
let side=document.getElementsByClassName('slide')[0];
let cross=document.getElementsByClassName('cross')[0];

   let Top=document.getElementById('Top');
   let mid=document.getElementById('mid');
   let bot=document.getElementById('bot');

   side.onclick = function () {

    //    mid.style.visibility="hidden";
    //    Top.style.transform="rotateZ(44deg)";
    //    bot.style.transform="rotateZ(-45deg)";
    //    bot.style.margin="-13px 1px";
    //    side.style.marginTop="9px";
    //    Top.style.width="42px";
    //    bot.style.width="42px";
       leftBar.style.transform="translateX(0%)";
   } 
   
   cross.onclick=function(){
       
       leftBar.style.transform="translateX(-100%)";
    }


 
   
 