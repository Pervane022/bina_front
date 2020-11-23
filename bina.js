function Open(){
    var x=document.getElementById("hide");
    if(x.style.display==="none"){
        x.style.display="block";

    }else{
        x.style.display="none";
    }
}
function Close(){
    var x=document.getElementById("hide");
    x.style.display="none";
}
function op(){
    var x=document.getElementById("hide");
    var y=document.getElementById("main");
    if(x.style.display==="none"){
        y.style.opacity=1;
    }else{
        y.style.opacity=0.4;
    }
}
write();
function write(){
    document.getElementById('over').innerHTML="135 000 AZN";
    document.getElementById('over1').innerHTML="118 000 AZN";
    document.getElementById('over2').innerHTML="95 000 AZN";
    document.getElementById('over3').innerHTML="55 000 AZN";
    document.getElementById('over4').innerHTML="70 000 AZN";
    document.getElementById('over5').innerHTML="500 AZN/ay";
    document.getElementById('over6').innerHTML="175 000 AZN";
    document.getElementById('over7').innerHTML="350 AZN/ay";
    document.getElementById('over8').innerHTML="120 000 AZN";
    document.getElementById('over9').innerHTML="220 000 AZN";
    document.getElementById('over10').innerHTML="250 000 AZN";
    document.getElementById('over11').innerHTML="180 000 AZN";
}
