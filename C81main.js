can= document.getElementById("mycanvas");
ctx= can.getContext("2d");
MouseEvent = "empty";
width = 3;
color= "red";

var ow= screen.width; 
var oh= screen.height;
var nw= ow-70;
var nh= oh-300;
if(ow<992){
    document.getElementById("mycanvas").width=nw
    document.getElementById("mycanvas").height=nh
    document.body.style.overflow ="hidden";
}
can.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    width=document.getElementById("widthchanger").value;
    color=document.getElementById("colorchanger").value;
    lpx=e.touches[0].clientX-can.offsetLeft;
    lpy=e.touches[0].clientY-can.offsetTop;
    
}

can.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    cpx=e.touches[0].clientX-can.offsetLeft;
    cpy=e.touches[0].clientY-can.offsetTop;
    
        ctx.beginPath()
        ctx.lineWidth= width;
        ctx.strokeStyle= color;
        ctx.moveTo(lpx,lpy)
        ctx.lineTo(cpx,cpy)
        ctx.stroke()
    
    
    lpy=cpy;
    lpx=cpx;

}
can.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    MouseEvent= "mouseLeave";
}
can.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    MouseEvent="mouseUp";
}


can.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    width=document.getElementById("widthchanger").value;
    color=document.getElementById("colorchanger").value;
    lpx=e.clientX-can.offsetLeft;
    lpy=e.clientY-can.offsetTop;
    MouseEvent="mouseDown"

}

can.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    cpx=e.clientX-can.offsetLeft;
    cpy=e.clientY-can.offsetTop;
    if(MouseEvent=="mouseDown"){
        ctx.beginPath()
        ctx.lineWidth= width;
        ctx.strokeStyle= color;
        ctx.moveTo(lpx,lpy)
        ctx.lineTo(cpx,cpy)
        ctx.stroke()
    
    }
    lpy=cpy;
    lpx=cpx;

}

