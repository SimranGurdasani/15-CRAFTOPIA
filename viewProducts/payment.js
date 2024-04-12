function Payment(event) {
    event.preventDefault(); 
  
    // if (!loginContent.classList.contains("d-none")) {
    //   loginData(); 
    // } else {
    //   signUpData();
    // }
    paymentInfo();
  }
  
  let continueToPaymentBtn = document.querySelector("#continueToPayment");
  
  continueToPaymentBtn.addEventListener('click', Payment);

  function paymentInfo(){
    let email= document.querySelector("#email-ips").value
  let country= document.querySelector("#country").value
  let fname= document.querySelector("#fname-ips").value
  let lname= document.querySelector("#lname-ips").value
  let address= document.querySelector("#address-ips").value
  let landmark= document.querySelector("#landmark-ips").value
  let city= document.querySelector("#fname-ips").value
  let state= document.querySelector("#state").value
  let pincode= document.querySelector("#pincode-ips").value
  let phone= document.querySelector("#phone-ips").value
  let saveinfo= document.querySelector("#saveinfo-ips").value
  // console.log(saveinfo)

    const body = {
        "email": email,
        "country": country,
        "fname": fname,
        "lname":lname,
        "address":address,
        "landmark":landmark,
        "city":city,
        "state":state,
        "pincode":pincode,
        "phone":phone,
      }
  
      fetch('http://localhost:8081/getpaymentinfo',{
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
          window.location.href="paymentGateway.html"
        } else {
          // Alert the user to fill in all details if status is not 'success'
          alert("Please fill in all details.");
        }
       
      })
    })
  }