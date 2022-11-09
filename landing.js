let arr=[
{
    img:"https://n.nordstrommedia.com/id/sr3/7ab68c55-33bd-4393-a29d-c264a53af209.jpeg?q=45&dpr=2&h=365.31&w=230",
    content:"Holiday Deal",
    state: "1.State",
    price: 3506.33,
    discount: 32,
},
{
    img:"https://n.nordstrommedia.com/id/sr3/9f4c3ba8-ee7a-4480-ad46-352894c20fa5.jpeg?q=45&dpr=2&h=365.31&w=230",
    content:"Holiday Deal",
    state: "1.State",
    price: 3300.33,
    discount: 62,
},
{
    img:"https://n.nordstrommedia.com/id/sr3/7a8c6175-0d91-4e1d-8f46-d4708f90cc97.jpeg?q=45&dpr=2&h=365.31&w=230",
    content:"Holiday Deal",
    state: "Vince Camuto",
    price: 4506.33,
    discount: 42,
},
{
    img:"https://n.nordstrommedia.com/id/sr3/1772a05e-aace-496d-bdfa-30bc13b72b34.jpeg?q=45&dpr=2&h=365.31&w=230",
    content:"Holiday Deal",
    state: "Apna Bazaar",
    price: 6506.33,
    discount: 52,
}
];

let arr1=[
    {
        img:"https://n.nordstrommedia.com/id/sr3/8222eb9e-2d38-46ff-b6c7-1b8fa53b1eb5.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"Holiday Deal",
        state: "1.State",
        price: 3000.33,
        discount: 72,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/7147cdc5-4ede-4df9-978d-a7530f18c0b1.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"New Markdown",
        state: "1.State",
        price: 3606,
        discount: 42,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/c930ca14-a968-48eb-af5f-57a4a9bde0eb.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"Holiday Deal",
        state: "Vince Camuto",
        price: 3590.33,
        discount: 32,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/2b027729-3820-4cc2-9e7f-db770e0988ba.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"New Markdown",
        state: "Apna Bazaar",
        price: 5106,
        discount: 76,
    }
    ];


console.log(arr);

function display(data)
{
    let main=document.getElementById("deals3");
    main.innerHTML=null;
    data.forEach(function (el){
        let main=document.getElementById("deals3");
let card=document.createElement("div");

let img=document.createElement("img");
img.src=el.img;
let content=document.createElement("p"); 
content.innerText=el.content;
let state=document.createElement("p"); 
state.innerText=el.state;
let price=document.createElement("p"); 
price.innerText="INR "+ el.price+" ("+el.discount+"% off )";

card.append(img,content,state,price);
main.append(card);





    });
}
    
display(arr);

let men=document.getElementById("men");
men.onclick=()=>{
    display(arr1);
}
let women=document.getElementById("women");
women.onclick=()=>{
    display(arr);
}

let carousel_div=document.getElementById("carousel");


function carousel(){
    let images=["https://n.nordstrommedia.com/id/09cacbfa-f0b6-4f7a-b141-6fa66e0aedba.jpeg?h=700&w=1608", "https://n.nordstrommedia.com/id/d4172e0c-b62c-4438-bf03-2cb59e9cc515.jpeg?h=700&w=1608", "https://n.nordstrommedia.com/id/89c632a3-bff0-464c-8cfc-7d2ca8797c53.jpeg?h=700&w=1608", "https://n.nordstrommedia.com/id/b676d89f-fb05-4973-b714-d273f02db525.jpeg?h=700&w=1608"]


    let imgElement=document.createElement("img");
    imgElement.src=images[0];
        carousel_div.append(imgElement);
    let i=1;
    setInterval(function(){


        if(i===images.length){
            i=0;    
        }
        imgElement.src=images[i];
        carousel_div.append(imgElement);
     

       
        i++;
    }, 3000)


}
carousel();

