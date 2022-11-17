
class User{

    constructor(){
       

    }

    validateUser(username){

        return username.includes("@") ? false : true;
    }
    validatePassword(password){

        return password.length<8 ? false : true;
    }

    async signUP(n,e,u,p,m){
        let isValided =this.validatePassword(p) && this.validateUser(u);
        if(isValided){
            this.name=n;
            this.email=e;
            this.username=u;
            this.password=p;
            this.mobile=m;
            

            const register_api='https://masai-api-mocker.herokuapp.com/auth/register'
            let data1=JSON.stringify(this)
            const response = await fetch(register_api,{

                method:"POST",
                body:data1,

                headers:{
                    "Content-Type":"application/json",
                },

            });
            const data=await response.json();
            
        }
    }
    
    async login(u,p){

        const login_data ={
            username: u,
            password: p,

        };
        let data2=JSON.stringify(login_data)
        const login_api= 'https://masai-api-mocker.herokuapp.com/auth/login'

        const response = await fetch(login_api, {

            method: "POST",
            body: data2,

            headers: {
                "Content-Type":"application/json",
            },
        });

        const data= await response.json();
        
        return data
    }
}

let user=new User();
// let registerNew=document.getElementById("register")
// registerNew.onclick = () => {

    

//     let name=document.getElementById("name").value;
//     let email=document.getElementById("email").value;
//     let username=document.getElementById("username").value;
//     let password=document.getElementById("password").value;
//     let mobile=document.getElementById("mobile").value;
    

//     user.signUP(name,email,username,password,mobile)
//     console.log(user)

// }

let log=document.getElementById("login")
log.onclick = async() => {

    try{
        const username= document.getElementById("login-username").value;
    const password= document.getElementById("login-password").value;

    let {token} = await user.login(username,password);
    
    getprofile(username,token)
    }
    catch(e){
        console.log(e)
    }
}

const getprofile = async (username,token) => {

    try{
        let api_link = `https://masai-api-mocker.herokuapp.com/user/${username}`

    let response= await fetch(api_link,{
        headers : {
            Authorization: `Bearer ${token}`,
            'Content-Type' : 'application/json',
        },
    });

    let data = await response.json();
    alert(`welcome ${data.username}`)
    window.location.href="./index.html"
    }
    catch(e){
        console.log(e)
        alert(`wrong username`)
    }
}
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