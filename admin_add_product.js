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
let res=await fetch(`https://stark-tundra-16682.herokuapp.com/posts`, {
    method: 'POST',
    body: JSON.stringify(send_this_data),
    headers: {
        'Content-Type': 'application/json'
    }
   

});
let data=await res.json();
console.log('data', data);
window.location.href="mensclothing.html"
}

let dele_btn=document.getElementById("delete_btn")
dele_btn.onclick=()=>{
    deletePost()
    
}

const deletePost =async () =>{
    let delete_id=document.getElementById("delete_id").value

    let res = await fetch(`https://stark-tundra-16682.herokuapp.com/posts/${delete_id}`,{

        method:"DELETE",

        headers : {
            'Content-Type' : 'application/json',
        },
    })
    let data= await res.json()
    console.log(data)
    window.location.href="mensclothing.html"

}

let update_btn=document.getElementById("update_btn")
update_btn.onclick=()=>{
    updatePost()
    
}

const updatePost = async() => {

    let update_id=document.getElementById("update_id").value
    let new_price=document.getElementById("update_price").value
    let send_this_data={
        
        price:new_price
    }
    let res = await fetch(`https://stark-tundra-16682.herokuapp.com/posts/${update_id}`,{

        method:"PATCH",
        body:JSON.stringify(send_this_data),
        headers : {
            'Content-Type' : 'application/json',
        },
    })
    let data= await res.json()
    console.log(data)
    window.location.href="mensclothing.html"
}
let next=document.getElementById("next")
next.onclick=()=>{
    window.location.href="women.html";
}
let next1=document.getElementById("next1")
next1.onclick=()=>{
    window.location.href="mensclothing.html";
}