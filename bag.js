


let bag_btn = document.getElementById("bag_btn");
bag_btn.addEventListener("click",bag_Func);


// let data = JSON.parse(localStorage.getItem("bag"))||[];
// console.log(data);
let data = JSON.parse(localStorage.getItem("bag"))||[];
let total_count = JSON.parse(localStorage.getItem("count")) || 0;


function bag_Func(){
  

  let product_name = document.getElementById("name").innerText;
  
  let product_price = document.getElementById("price").innerText;
  let size = document.getElementById("size").value;
  let styles = document.getElementById("styles").value;

  
let obj = {
  product_name,
  product_price,
  size,
  styles,
}

data.push(obj);

  localStorage.setItem("bag",JSON.stringify(data));
  
  let bag_data = JSON.parse(localStorage.getItem("bag"));
  // document.getElementById("bag_count").innerText=bag_data.length;

total_count++;
localStorage.setItem("count",total_count);

document.getElementById("bag_count").innerText = total_count;

// window.location.reload();

// window.location.href="./cart.html";
window.location.href="./checkout.html";

}





document.getElementById("bag_count").innerText = total_count;





let next=document.getElementById("next")
next.onclick=()=>{
    window.location.href="women.html";
}
let next1=document.getElementById("next1")
next1.onclick=()=>{
    window.location.href="mensclothing.html";
}




