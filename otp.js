let form=document.querySelector("form");
form.addEventListener("submit", getdata11)
function getdata11(event)
{
    event.preventDefault();
    let raj=Number(document.getElementById("OTP").value);
if(raj==1234)
{
    alert("Payment Successful");
}

}

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