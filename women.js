let next=document.getElementById("next")
    next.onclick=()=>{
        window.location.href="women.html";
    }
    let next1=document.getElementById("next1")
    next1.onclick=()=>{
        window.location.href="mensclothing.html";
    }
    

    let logo=document.getElementById("logo");
    logo.onclick=()=>{
        window.location.href="index.html";
    }
data=[{
    image:"https://n.nordstrommedia.com/id/sr3/d539b784-cc6f-4bc2-8ee6-d2733c89d906.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2://n.nordstrommedia.com/id/sr3/d7e22c74-3cf7-4f36-9482-ab2ffe5349f4.jpeg?h=365&w=240&dpr=2",
    name:"Zella",
    description:"Live In High Waist Pocket 7/8 Leggings",
    INR: 1547.08,
    off:"(69%off)",
    strikeprice:5073.02,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+(155),
    id:1
},
{
    image:"https://n.nordstrommedia.com/id/sr3/ea7f492b-7f64-423f-9757-086b9ab65326.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2 Balloon Sleeve Cotton Blend Sweater://n.nordstrommedia.com/id/sr3/f33eb0cd-f3aa-4953-b4ae-3aba35d2fae3.jpeg?h=365&w=240&dpr=2" ,
    name:"Nike"  ,
    description:"Ribbed Balloon Sleeve Cotton Blend Sweater 6-Packs Every Plus Cushion Crew TRaining Socks",
    INR:  1891.93,
    off: "(0%off)",
    strikeprice: null ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+55,
    id:2
},
{
    image:"https://n.nordstrommedia.com/id/sr3/af6fba72-d7bb-43da-8b03-2b8fd4b15b49.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2://n.nordstrommedia.com/id/sr3/2d13aead-4889-43e6-a47e-f3c49f8ec9f2.jpeg?h=365&w=240&dpr=2" ,
    name:"The North Face"  ,
    description:" Bliss Perfection Underwire Contour Bra",
    INR: 5108.22,
    off:  "(40%off)",
    strikeprice:"INR 8513.69"  ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+500 ,
    id:3
},
{
    image:"https://n.nordstrommedia.com/id/sr3/b0634fe8-244e-44a7-8d64-9432e7bb1ea9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2://n.nordstrommedia.com/id/sr3/4664a52d-25f1-443e-9c97-38183c9e0c46.jpeg?h=365&w=240&dpr=2" ,
    name:"Zella"  ,
    description:"Panda Hooded Down Puffer Parka Performance T-Shirt",
    INR:  851511.412,
    off:  "(Up to 74%off)",
    strikeprice: "INR 3,353.88" ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+(127),
    id:4
},
{
    image:"https://n.nordstrommedia.com/id/sr3/957aebe3-0312-4797-b0f4-0f31d04c195d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2://n.nordstrommedia.com/id/sr3/73a00824-a05f-40d3-87ca-8e9effde08ab.jpeg?h=365&w=240&dpr=2" ,
    name:"Nordstrom"  ,
    description:"Legend Knit Button-Up Shirt Zip Cotton & Cashmere PUllover sweater(Regular & Tall",
    INR:  5116.82,
    off:  "(20%off)",
    strikeprice:null  ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+156 ,
    id:5
},
{
    image:"https://n.nordstrommedia.com/id/sr3/580b47ee-6ccd-4556-bc6c-2a0cdd14fa05.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2://n.nordstrommedia.com/id/sr3/d2e47e22-ca1c-44bd-95cc-184e76e191fd.jpeg?h=365&w=240&dpr=2" ,
    name:"Canada Goose"  ,
    description:"Caresse Underwire Plunge Bra Recycled Woll Blend Down Parka",
    INR:  10046.36,
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

let brand_btn=document.getElementById('brand-heading');
brand_btn.onclick=()=>{
    sortHtoL()
}

 
    
const   sortHtoL= () => {
    // let newData=[]
    // for(let i=0;i<data.length;i++){
    //      newData.push(data[i].name)
    // }
    // console.log('newData :>> ', newData);

    let newData=data;
        newData.sort((a,b) => {
            if (a.name>b.name)
                return 1;
            if (a.name <b.name)
                return -1;
            return 0;
        });
        appendProduct(newData)
    
    
}


let price_btn=document.getElementById('price-heading')
price_btn.onclick=()=>{
    priceHtoL()
}

    const priceHtoL = () => {
        let newData=data;
        newData=newData.sort((a,b)=>a.INR-b.INR);
        appendProduct(newData)
    }
    //console.log('newData :>> ', newData);

    let price_btn1=document.getElementById('price-heading1')
    price_btn1.onclick=()=>{
        priceLtoH()
    }
    
        const priceLtoH = () => {
            let newData=data;
            newData=newData.sort((a,b)=>b.INR-a.INR);
            appendProduct(newData)
        }