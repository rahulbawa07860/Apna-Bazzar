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