//mathematical computation of interest
function compute()
{
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest =principal*years*rate/100;
    //defining amount as principal plus interest for span results
    var amount = parseInt(principal)+ parseInt(interest);
    var year = new Date().getFullYear()+parseInt(years);
      document.getElementById("result").innerHTML= "If you deposit <mark>$"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>$"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"; 
}
//add rate display
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
//principal input validation
function validateForm(){
    let x=document.getElementById("principal").value;
    if (x <= 0) {
        alert ("Enter a positive number");
        return false;
    }
}
