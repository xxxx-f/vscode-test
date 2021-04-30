function isNumber(a){
    flag=false;
    if(typeof a=="number"){
        flag=true;
    }
    return flag;
}

function toCeil(a){
    //向上取整
    return Math.ceil(a);
}

function toFloor(a){
    //向下取整
    return Math.floor(a);
}

function complete(a,b){
    if(a>b){return a;}
    else{return b;}
}

function toRound(a){
    return Math.round(a);
}

document.getElementById("nu_btn").onclick=function(){
    var a=document.getElementById("num-a").value;
    var b=document.getElementById("num-b");
    // alert(isNumber(a));
    if(isNaN(a)){
        alert(a+"不是数字");
    }else{alert(a+"是数字");}
}