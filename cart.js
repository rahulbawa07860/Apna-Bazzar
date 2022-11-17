
// window.addEventListener("load",() => {
//     addToBag();
// })



    let data = JSON.parse(localStorage.getItem("bag")) ;
    console.log(data);


    let total_count = JSON.parse(localStorage.getItem("count")) || 0;
    document.getElementById("bag_count").innerText = total_count;


    let next=document.getElementById("next")
    next.onclick=()=>{
        window.location.href="women.html";
    }
    let next1=document.getElementById("next1")
    next1.onclick=()=>{
        window.location.href="mensclothing.html";
    }