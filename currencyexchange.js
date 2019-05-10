function curEx(){
    var initialvalue=document.getElementById("input").value;
    document.getElementById("output").innerHTML = "You can exchange €" + initialvalue + " for ¥" + initialvalue*123.235;
}