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



let arr3=[
    {
        img:"https://n.nordstrommedia.com/id/sr3/9f7f66fd-c5bb-4000-8888-32014d1d9f32.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"shoe",
        state: "1.State",
        price: 350.33,
        discount: 32,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/06b31d11-f015-4960-a38a-be4856858d27.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"shoe",
        state: "1.State",
        price: 3300,
        discount: 62,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/5fd7f595-e5bc-49f0-972d-e0cbb2d008a3.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"shoe",
        state: "Vince Camuto",
        price: 690,
        discount: 42,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/f96862b5-9268-4a63-93a5-9b7e05cb5fc0.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"Holiday Deal",
        state: "Apna Bazaar",
        price: 659,
        discount: 52,
    }
    ];

    let arr4=[
        {
            img:"https://n.nordstrommedia.com/id/sr3/7aa9e8d2-2296-41ab-b5e7-cf2f4e806ebf.jpeg?q=45&dpr=2&h=365.31&w=230",
            content:"Holiday Deal",
            state: "1.State",
            price: 350,
            discount: 32,
        },
        {
            img:"https://n.nordstrommedia.com/id/sr3/f74e36cc-1691-4597-ac65-825e2c62ee4c.jpeg?q=45&dpr=2&h=365.31&w=230",
            content:"Holiday Deal",
            state: "1.State",
            price: 3300,
            discount: 62,
        },
        {
            img:"https://n.nordstrommedia.com/id/sr3/7de568ab-5227-46e6-bacb-50cc71ed8324.jpeg?q=45&dpr=2&h=365.31&w=230",
            content:"Holiday Deal",
            state: "Vince Camuto",
            price: 456,
            discount: 42,
        },
        {
            img:"https://n.nordstrommedia.com/id/sr3/4b0e00a9-9fc5-4ef9-8187-9d78e1bbd315.jpeg?q=45&dpr=2&h=365.31&w=230",
            content:"Holiday Deal",
            state: "Apna Bazaar",
            price: 650,
            discount: 52,
        }
        ];



        function displayagain(data)
{
    let main=document.getElementById("deals5");
    main.innerHTML=null;
    data.forEach(function (el){
        let main=document.getElementById("deals5");
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
    
displayagain(arr3);


let him=document.getElementById("boy");
him.onclick=()=>{
    displayagain(arr4);
}
let her=document.getElementById("girl");
her.onclick=()=>{
    displayagain(arr3);
}

let carousel_div1=document.getElementById("carousel1");


function carousel1(){
    let images=["https://n.nordstrommedia.com/id/ca2fbe1a-8500-4018-bb61-40e88bb3887b.jpeg?h=700&w=1608", "https://n.nordstrommedia.com/id/871e60c1-f726-4bb1-81f1-34dda86b7121.jpeg?h=700&w=1608", "https://n.nordstrommedia.com/id/3985ea55-f879-414f-8ca1-9d86fd0e4fd1.jpeg?h=700&w=1608"]


    let imgElement=document.createElement("img");
    imgElement.src=images[0];
        carousel_div1.append(imgElement);
    let i=1;
    setInterval(function(){


        if(i===images.length){
            i=0;    
        }
        imgElement.src=images[i];
        carousel_div1.append(imgElement);
     

       
        i++;
    }, 3000)


}
carousel1();


let arr6=[
    {
        img:"https://n.nordstrommedia.com/id/7a88667d-2b47-4e18-9a09-64d6e45cbeff.jpeg?h=516&w=536",
        content:"The 5 Outerwear Styles to Shop for This Season,",
        state: "According to a Fashion Director",
        price: "Read More",
      
    },
    {
        img:"https://n.nordstrommedia.com/id/8133ea12-7377-4e1c-a8d7-f6e21b4492ad.jpeg?h=516&w=536",
        content:"26 Gift Ideas for the Women in Your Life",
        state: "You Can Find",
        price: "Read More",
        
    },
    {
        img:"https://n.nordstrommedia.com/id/44ff78f2-0b0e-4da5-8a8a-a09088ff7ca5.jpeg?h=516&w=536",
        content:"26 Gift Ideas for the Women in Your Life",
        state: "In@Nordstrom",
        price: "Read More",
        
    }
    
    ];

    function displayagain1(data)
{
    
    data.forEach(function (el){
        let main=document.getElementById("deals6");
let card=document.createElement("div");

let img=document.createElement("img");
img.src=el.img;
let content=document.createElement("p"); 
content.innerText=el.content;
let state=document.createElement("p"); 
state.innerText=el.state;
let price=document.createElement("p"); 
price.innerText=el.price

card.append(img,content,state,price);
main.append(card);





    });
}
    
displayagain1(arr6);


let arr7=[
    {
        img:"https://n.nordstrommedia.com/id/sr3/df96135d-32b5-471d-b3bd-04814bb5c2a9.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"New!",
        state: "1.State",
        price: 350.33,
        discount: 32,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/fbe873c3-7446-4907-bd09-81d3cd933f91.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"New!",
        state: "1.State",
        price: 3300,
        discount: 62,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/ca76e9b7-2d7e-49c7-9eaa-751c27fbdc63.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"New!",
        state: "1.State",
        price: 690,
        discount: 42,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/5c7a1b4c-dc87-4d33-b083-f26d6de9b0df.jpeg?q=45&dpr=2&h=365.31&w=230",
        content:"New!",
        state: "Apna Bazaar",
        price: 659,
        discount: 52,
    }
    ];

    let arr8=[
        {
            img:"https://n.nordstrommedia.com/id/sr3/11277bb2-6e3b-4210-ab70-8ef39573dbfe.jpeg?q=45&dpr=2&h=365.31&w=230",
            content:"New!",
            state: "1.State",
            price: 350,
            discount: 32,
        },
        {
            img:"https://n.nordstrommedia.com/id/sr3/3e651b3a-f955-4775-946c-28fd0f80a8eb.jpeg?q=45&dpr=2&h=365.31&w=230",
            content:"New!",
            state: "1.State",
            price: 3300,
            discount: 62,
        },
        {
            img:"https://n.nordstrommedia.com/id/sr3/27e96418-b56d-4ac2-ab6b-75f0ebe4b0f4.jpeg?q=45&dpr=2&h=365.31&w=230",
            content:"New!",
            state: "Vince Camuto",
            price: 456,
            discount: 42,
        },
        {
            img:"https://n.nordstrommedia.com/id/sr3/f3c24164-fad9-4b4d-8b89-000b6e5eb6f3.jpeg?q=45&dpr=2&h=365.31&w=230",
            content:"New!",
            state: "Apna Bazaar",
            price: 650,
            discount: 52,
        }
        ];

        function visible(data)
        {
            let main=document.getElementById("deals7");
            main.innerHTML=null;
            data.forEach(function (el){
                let main=document.getElementById("deals7");
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
            
        visible(arr7);

        
let st=document.getElementById("statex");
st.onclick=()=>{
    visible(arr7);
}
let UGG=document.getElementById("UGG");
UGG.onclick=()=>{
    visible(arr8);
}

let arr9=[
    {
        img:"https://n.nordstrommedia.com/id/8d5e2126-1fca-42f8-b71b-ce9d1a3cc0ab.jpeg?h=365&w=268",
        content:"Women",
      
    },
    {
        img:"https://n.nordstrommedia.com/id/fb45282f-b5e1-423b-9894-4a6071e7d3a1.jpeg?h=365&w=268",
        content:"Men",
      
    },
    {
        img:"https://n.nordstrommedia.com/id/278ded2f-d53f-4c14-a88c-8bc5ba1efe56.jpeg?h=365&w=268",
        content:"Kids",
       
    },
    {
        img:"https://n.nordstrommedia.com/id/a29eca50-eeb5-4d37-a2bf-2932c60746a3.jpeg?h=365&w=268",
        content:"Beauty & Fragrance",
       
    },
    {
        img:"https://n.nordstrommedia.com/id/1ceda26d-5052-4510-811b-82d30dbd5a23.jpeg?h=365&w=268",
        content:"Home",
       
    },
    {
        img:"https://n.nordstrommedia.com/id/48027591-850a-4544-814e-b458e00d6a51.jpeg?h=365&w=268",
        content:"Designer",
        
    }

    ];

    function visible1(data)
    {
        
        data.forEach(function (el){
            let main=document.getElementById("deals8");
    let card=document.createElement("div");
    
    let img=document.createElement("img");
    img.src=el.img;
    let content=document.createElement("p"); 
    content.innerText=el.content;
   
    
    card.append(img,content);
    main.append(card);
    
    
    
    
    
        });
    }
        
    visible1(arr9);


    let arr10=[
        {
            img:"https://cdn.dashhudson.com/media/640/1634145375.908124478742.jpeg",
           
          
        },
        {
            img:"https://cdn.dashhudson.com/media/640/1633576910.42796190538.jpeg",
            
          
        },
        {
            img:"https://cdn.dashhudson.com/media/640/1638985643.81467653793.jpeg",
            
           
        },
        {
            img:"https://cdn.dashhudson.com/media/640/1639450121.23927782505.jpeg",
            
           
        }
    
        ];

        function visible2(data)
    {
        
        data.forEach(function (el){
            let main=document.getElementById("deals9");
    let card=document.createElement("div");
    
    let img=document.createElement("img");
    img.src=el.img;
    
   
    
    card.append(img);
    main.append(card);
    
    
    
    
    
        });
    }
        
    visible2(arr10);

    let account=document.getElementById("account")
    account.onclick=()=>{
        window.location.href="signup.html";
    }

    // let account1=document.getElementById("account")
    // account1.onclick=()=>{
    //     window.location.href="signup.html";
    // }

    let next=document.getElementById("next")
    next.onclick=()=>{
        window.location.href="women.html";
    }
    let next1=document.getElementById("next1")
    next1.onclick=()=>{
        window.location.href="mensclothing.html";
    }
