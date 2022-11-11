let btn=document.getElementById("add_product");
btn.onclick =()=>{
    createPost();
}

const createPost = async()=>{
let name=document.getElementById("name").value;
let price=document.getElementById("price").value;
let description=document.getElementById("description").value;
let discount=document.getElementById("discount").value;
let strikeprice=document.getElementById("strikeprice").value;
let image=document.getElementById("image").value;
let send_this_data={
    name,
    price,
    description,
    discount,
    strikeprice,
    image
   
    
    

}
let res=await fetch(`http://localhost:3000/posts`, {
    method: 'POST',
    body: JSON.stringify(send_this_data),
    headers: {
        'Content-Type': 'application/json'
    }
   

});
let data=await res.json();
console.log('data', data);

}