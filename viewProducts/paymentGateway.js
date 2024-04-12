function paymentGateway(event) {
    event.preventDefault(); 
  
    // if (!loginContent.classList.contains("d-none")) {
    //   loginData(); 
    // } else {
    //   signUpData();
    // }
    paymentGatewayInfo();
  }
  
  let confirmPayment = document.querySelector("#carddetails");
  
  confirmPayment.addEventListener('click', paymentGateway);

  function paymentGatewayInfo(){
    let cardType= document.querySelector("#cardType").value
    let cardno= document.querySelector("#cardno").value
  let expdate= document.querySelector("#expdate").value
  let cvcode= document.querySelector("#cvcode").value
  let cardowner= document.querySelector("#cardowner").value
  // console.log(saveinfo)

    const body = {
        "cardType": cardType,
        "cardno": cardno,
        "expdate": expdate,
        "cvcode":cvcode,
        "cardowner":cardowner,
      }
  
      fetch('http://localhost:8081/paymentdetails',{
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
    }).then((response)=>{
      response.json().then((val)=>{
        console.log(val)
        if (val.status === 'success') {
          // Use a relative path to navigate to payment.html in the same directory
          window.location.href="../../SuccessPage/index.html"
        } else {
          // Alert the user to fill in all details if status is not 'success'
          alert("Please fill in all details.");
        }
       
      })
    })
  }