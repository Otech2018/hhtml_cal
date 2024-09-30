function btn(num){
    var screen = document.getElementById('display').innerHTML;
    screen +=num;
    // screen = screen + num;
    document.getElementById('display').innerHTML=screen ;
}


function clear_scr(){
    document.getElementById('display').innerHTML="";
}