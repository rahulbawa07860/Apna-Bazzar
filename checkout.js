let total_price=JSON.parse(localStorage.getItem('Total_price'))
let data=total_price.reduce(
    function(acc,el){
        return acc+ Number(el)
    },0)
    
let total_div=document.getElementById('total_span');
total_div.innerText=data

let orderbtn=document.getElementById('btn_cont');
orderbtn.onclick=()=>{
    window.location.href="payment.html"
}
chekbtn=document.getElementById('btn_check')
chekbtn.onclick=()=>{
    getFormData(event)
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

    let p_name = document.createElement("h1");
    p_name.innerText = el.product_name;
    p_name.style.fontSize="18px"

    let p_styles = document.createElement("h5");
    p_styles.innerText = el.styles
    p_styles.style.fontSize="16px"
    let p_size = document.createElement("h5");
    p_size.innerText = el.size;
    let p_price = document.createElement("h3");
    p_price.innerText = el.product_price;
    p_price.style.fontSize="18px";
    p_price.style.color="green";
    

    div.append(p_name,p_styles,p_size,p_price);
    container_div.append(div);
})
    





}




display(data96);


//---------------------------bag_product_info end--------------------------------------//

function getFormData(event) {
    console.log('inside the function')
  event.preventDefault();
  let form=document.querySelector("#user_form");
  let name=form.user_name.value;
  let lastname=form.user_last_name.value;
  let add1=form.user_address1.value;
  let add2=form.user_address2.value;
  let city=form.user_city.value;
  let email=form.email.value;
  let number=form.user_number.value;
  let delivery=document.getElementById('mode_a').value

   let formObj1={
   name,
   lastname,
   add1,
   add2,
   city,
   email,
   number,
   delivery
   


  }
  //console.log(formObj)
  

localStorage.setItem("formData",JSON.stringify(formObj1))

}


let next=document.getElementById("next")
next.onclick=()=>{
    window.location.href="women.html";
}
let next1=document.getElementById("next1")
next1.onclick=()=>{
    window.location.href="mensclothing.html";
}