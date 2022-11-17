


class User{

    constructor(){
        

    }

    validateUser(username){

        return username.includes("@") ? false : true;
    }
    validatePassword(password){

        return password.length<8 ? false : true;
    }

    async signUP(n,e,u,p,m,d){
        let isValided =this.validatePassword(p) && this.validateUser(u);
        if(isValided){
            this.name=n;
            this.email=e;
            this.username=u;
            this.password=p;
            this.mobile=m;
            this.description=d
            

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
            console.log(data)
            
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
let user= new User();
let registerNew=document.getElementById("register")
registerNew.onclick = () => {

    

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let mobile=document.getElementById("mobile").value;
    let description=document.getElementById("description").value;
    

    user.signUP(name,email,username,password,mobile,description)
    console.log(user)
    document.getElementById("succes_statement").textContent=`Hello ${name},Your Acoount is succesfully Created`
    // window.location.href="signin.html"

}

// let loginUser=document.getElementById("login")
// loginUser.onclick = async() => {

//     const username= document.getElementById("login-username").value;
//     const password= document.getElementById("login-password").value;

//     let {token} = await user.login(username,password);
    
//     getprofile(username,token)
// }

const getprofile = async (username,token) => {

    let api_link = `https://masai-api-mocker.herokuapp.com/user/${username}`

    let response= await fetch(api_link,{
        headers : {
            Authorization: `Bearer ${token}`,
            'Content-Type' : 'application/json',
        },
    });

    let data = await response.json();
    alert(`welcome ${data.username}`)
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