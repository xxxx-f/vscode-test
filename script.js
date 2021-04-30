document.getElementById("add-btn").onclick=function(){
    var a=document.getElementById("first-number").value;
    var b=document.getElementById("second-number").value;

    document.getElementById("result").innerHTML=parseInt(a)+parseInt(b);
},
document.getElementById("minus-btn").onclick=function(){
    var a=document.getElementById("first-number").value;
    var b=document.getElementById("second-number").value;

    document.getElementById("result").innerHTML=parseInt(a)-parseInt(b);
},
document.getElementById("times-btn").onclick=function(){
    var a=document.getElementById("first-number").value;
    var b=document.getElementById("second-number").value;

    document.getElementById("result").innerHTML=parseInt(a)*parseInt(b);
},
document.getElementById("divide-btn").onclick=function(){
    var a=document.getElementById("first-number").value;
    var b=document.getElementById("second-number").value;

    document.getElementById("result").innerHTML=parseInt(a)/parseInt(b);
}