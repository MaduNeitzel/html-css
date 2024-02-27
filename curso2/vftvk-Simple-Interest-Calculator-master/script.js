function compute()
{
    p = document.getElementById("principal").value;

    var year = new Date().getFullYear() + parseInt(years);

    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    varyears= document.getElementById("years").value;
    var interest= principal *years * rate/100;
    var amount= parseInt(principal)+ parseFloat(interest);
    var result= document.getElementById("result");

    if (principal <=0){
        alert("Por fravor insira um numero acima de 0!");
        document.getElementById("principal").focus;
    }else {
        result.innerHTML = "Sseu deposito e $" +"<mark>" + principal + "</mark>" +",\<br\>com uma taxa de juros de" + "<mark>" + rate + "%" + "</mark>" +"\<br\>receberá um montande de $" +"<mark>" + amount + "</mark>" + ",\<br\>no ano de " + "<mark>" + year + "</mark>"+ "\<br\>";
    }
}
   
function updateRate(){
   var ratavel =document.getElementById("rate").value; 
   document.getElementById("rate_val").innerText= ratavel
}