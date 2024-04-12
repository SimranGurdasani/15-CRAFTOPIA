const signUpContent = document.querySelector(".sign-up-content");
const loginContent = document.querySelector(".login-content");
const login = document.querySelector(".login");
const signUp = document.querySelector(".sign-up");

login.addEventListener("click", () => {
  loginContent.classList.remove("d-none");
  signUpContent.classList.add("d-none");
});
signUp.addEventListener("click", () => {
  signUpContent.classList.remove("d-none");
  loginContent.classList.add("d-none");
  
});


 
function signUpData(){
let name= document.querySelector("#name-ips").value
  let password= document.querySelector("#password-ips").value
  let re_enter_password= document.querySelector("#re-enterpassword-ips").value
  // localStorage.setItem("name",name)
  // localStorage.setItem("password",password)

  let user_data= new Array()
  user_data= JSON.parse(localStorage.getItem("users"))? JSON.parse(localStorage.getItem("users")):[]
  if(user_data.some((v)=>{
    console.log(v)
    return v.name==name 
    
  })){
    alert("User already exist")
  }
  else{
    user_data.push({
      "name": name,
      "password": password,
      "re_enter_password": re_enter_password
    })
    localStorage.setItem("users",JSON.stringify(user_data))
  }
  
}


function loginData(){
let name= document.querySelector("#name-ip").value
  let password= document.querySelector("#password-ip").value

  // localStorage.setItem("name",name)
  // localStorage.setItem("password",password)

  let user_data= new Array()
  user_data= JSON.parse(localStorage.getItem("users"))? JSON.parse(localStorage.getItem("users")):[]
  if(user_data.some((v)=>{
    console.log(v)
    return v.name==name && v.password==password
    
  })){
    alert("Login Successful")
  }
  else{
   alert("Login Fail")
  }
  
}


function Submit(event) {
  event.preventDefault(); 

  if (!loginContent.classList.contains("d-none")) {
    loginData(); 
  } else {
    signUpData();
  }
}

let submitBtn = document.querySelector("#submitData-btn");

submitBtn.addEventListener('click', Submit);



