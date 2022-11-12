


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  
  
  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  
  
  
  function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  
  
  
  

  
let bag_btn = document.getElementById("bag_btn");
bag_btn.addEventListener("click",bag_Func);


function bag_Func(){
  
  // let data = JSON.parse(localStorage.getItem("bag"))||[];

  let product_name = document.getElementById("name").innerText;
  
  let product_price = document.getElementById("red").innerText;
  let size = document.getElementById("size").value;
  let styles = document.getElementById("styles").value;

  
let obj = {
  product_name,
  product_price,
  size,
  styles,
}
// data.push(obj);
  localStorage.setItem("bag",JSON.stringify(obj));
  window.location.href="./cart.html";
}


  
  
  
  
  
  
  
  
  
  
  
  