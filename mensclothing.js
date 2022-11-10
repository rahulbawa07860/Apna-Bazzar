data=[{
    image:"https://n.nordstrommedia.com/id/sr3/d7e22c74-3cf7-4f36-9482-ab2ffe5349f4.jpeg?h=365&w=240&dpr=2",
    name:"Zella",
    description:"Pyrite Slim  Fit Pocket Joggers",
    INR:"INR 1547.08",
    off:"(69%off)",
    strikeprice:5073.02,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+(155),
    id:1
},
{
    image:"https://n.nordstrommedia.com/id/sr3/f33eb0cd-f3aa-4953-b4ae-3aba35d2fae3.jpeg?h=365&w=240&dpr=2" ,
    name:"Nike"  ,
    description:"Dry 6-Packs Every Plus Cushion Crew TRaining Socks",
    INR: "INR 1,891.93",
    off: "(0%off)",
    strikeprice: null ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+55,
    id:2
},
{
    image:"https://n.nordstrommedia.com/id/sr3/2d13aead-4889-43e6-a47e-f3c49f8ec9f2.jpeg?h=365&w=240&dpr=2" ,
    name:"The North Face"  ,
    description:"Mens TKA kataka Fleece Pullover",
    INR: "INR 5,108.22",
    off:  "(40%off)",
    strikeprice:"INR 8513.69"  ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+500 ,
    id:3
},
{
    image:"https://n.nordstrommedia.com/id/sr3/4664a52d-25f1-443e-9c97-38183c9e0c46.jpeg?h=365&w=240&dpr=2" ,
    name:"Zella"  ,
    description:"Seamless Performance T-Shirt",
    INR: "INR 859.11-INR2,511.412",
    off:  "(Up to 74%off)",
    strikeprice: "INR 3,353.88" ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+(127),
    id:4
},
{
    image:"https://n.nordstrommedia.com/id/sr3/73a00824-a05f-40d3-87ca-8e9effde08ab.jpeg?h=365&w=240&dpr=2" ,
    name:"Nordstrom"  ,
    description:"Half Zip Cotton & Cashmere PUllover sweater(Regular & Tall",
    INR: "INR 5,116.82",
    off:  "(20%off)",
    strikeprice:null  ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+156 ,
    id:5
},
{
    image:"https://n.nordstrommedia.com/id/sr3/d2e47e22-ca1c-44bd-95cc-184e76e191fd.jpeg?h=365&w=240&dpr=2" ,
    name:"Canada Goose"  ,
    description:"Macmillian Recycled Woll Blend Down Parka",
    INR: "INR 10,046.36",
    off:  "(60%off)",
    strikeprice:"INR 33,353.88"  ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
   
    ratingNumber:"Customers-Rated-"+ 1000,
    id:6
}
];

const appendProduct = () => {
    let append_div=document.getElementById('append_div');
    append_div.innerHTML=null;
    data.forEach(function(el,i){
        let div=document.createElement('div');
        let img=document.createElement('img')
        img.src=el.image;
        let brand=document.createElement('h3')
        brand.innerText=el.name;
        brand.setAttribute('id','brand_name')
        let about=document.createElement('h4')
        about.innerText=el.description;
        let price=document.createElement('h3')
        price.innerText=el.INR;
        price.setAttribute('id','price_tag')
        off_price=document.createElement('p');
        off_price.innerText=el.off
        let strike_price=document.createElement('p');
        strike_price.innerText=el.strikeprice;
        strike_price.setAttribute('id','strike')
        rating=document.createElement('img');
        rating.src=el.rating;
        rating.setAttribute('id','rating')
        let ratingNumber=document.createElement('p')
        ratingNumber.innerText=el.ratingNumber;
        let btn=document.createElement("button")
        btn.innerText="Quick View"
        btn.setAttribute('id','button_cart');
        btn.onclick=()=>{
            buyProduct(i)
        }
        



       
        div.append(img,brand,about,price,strike_price,off_price,rating,ratingNumber,btn);
        append_div.append(div)



    });
}
appendProduct()

const  buyProduct= (i) => {

    
}