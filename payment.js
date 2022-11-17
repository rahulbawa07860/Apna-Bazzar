let form=document.querySelector("form");
form.addEventListener("submit", getdata4)
function getdata4(event)
{
    event.preventDefault();
let obj={
    card: form.card.value,
    cvv: form.cvv.value,
    date1: form.date1.value,
    name: form.name.name
}
if(Number(obj.card.length)!=12)
{
    alert("Please enter correct card number")
}
else if(Number(obj.cvv.length)!=3)
{
    alert("Entered cvv number should be 3 digit")
}
else{
    alert("OTP will be send to your registered mobile number after clicking on Get OTP button")
}
}


let data=JSON.parse(localStorage.getItem("formData")) || [];
document.getElementById("name").innerText=data.name;
document.getElementById("address1").innerText=data.add1;
document.getElementById("address2").innerText=data.add2;
document.getElementById("mobile").innerText=data.number;
document.getElementById("mode").innerText=data.delivery;
let next=document.getElementById("next")
    next.onclick=()=>{
        window.location.href="women.html";
    }
    let next1=document.getElementById("next1")
    next1.onclick=()=>{
        window.location.href="mensclothing.html";
    }

    let logo=document.getElementById("logo");
    logo.onclick=()=>{
        window.location.href="index.html";
    }