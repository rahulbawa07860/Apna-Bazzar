let total_price=JSON.parse(localStorage.getItem('Total_price'))
let data=total_price.reduce(
    function(acc,el){
        return acc+ Number(el)
    },0)
    
let total_div=document.getElementById('total_span');
total_div.innerText=data;
total_div.style.color="green"

let orderbtn=document.getElementById('btn_cont');
orderbtn.onclick=()=>{
    window.location.href="payment.html"
}
chekbtn=document.getElementById('btn_check')
chekbtn.onclick=()=>{
    window.location.href="payment.html"
}









// -----------------------------cartTotalcount start-------------------------//


let total_count = JSON.parse(localStorage.getItem("count")) || 0;
document.getElementById("bag_count").innerText = total_count;


// -----------------------------cartTotalcount end-------------------------//

















//---------------------------bag_product_info start--------------------------------------//




let data96 = JSON.parse(localStorage.getItem('bag'));
// console.log(data96);



function display(data96){

    
let container_div = document.getElementById("bag_product_info");
// let container_div = document.getElementById("bag_product_info");

data96.forEach(function (el){
    console.log(el.product_price);
    
    let div = document.createElement("div");

    let p_name = document.createElement("h3");
    p_name.innerText = el.product_name;
    p_name.style.fontSize="18px";
    // p_name.style.fontFamily=""
    let p_styles = document.createElement("h3");
    p_styles.innerText = el.styles
    let p_size = document.createElement("h3");
    p_size.innerText = el.size;
    p_size.style.fontSize="16px"
    p_size.style.color="#fe3b1f"
    let p_price = document.createElement("h3");
    p_price.innerText = el.product_price;
    p_price.style.color="green";
    

    div.append(p_name,p_styles,p_size,p_price);
    container_div.append(div);
})
    





}




display(data96);

//---------------------------bag_product_info end--------------------------------------//
