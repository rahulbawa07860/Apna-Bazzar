
let cartTotal=JSON.parse(localStorage.getItem('Total_price'))

let total_price=cartTotal.reduce(
    function(acc,el){
        return acc+ Number(el)
    },0)
let total_div=document.getElementById('total_span');
total_div.innerText=total_price

let orderbtn=document.getElementById('btn_cont');
orderbtn.onclick=()=>{
    window.location.href="payment.html"
}
chekbtn=document.getElementById('btn_check')
chekbtn.onclick=()=>{
    window.location.href="payment.html"
}