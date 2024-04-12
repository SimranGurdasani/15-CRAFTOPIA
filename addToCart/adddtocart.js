const plusBtns = document.querySelectorAll('#plus')
const qty = document.querySelectorAll('#quantity')
// let value = parseInt(qty.textContent)

plusBtns.forEach((plusBtn,index)=>{
        plusBtn.addEventListener('click',()=>{
                // console.log(qty.textContent)
                // let value2 = parseInt(qty.textContent)
                // let increase=sum+value2;
                // qty.textContent=increase
                // console.log(qty.textContent)
            let currentValue = parseInt(qty[index].textContent)
            qty[index].textContent=currentValue+1
            console.log(qty[index].textContent)
      })
    })

// let difference=1
// let decrease=0
const minusBtns = document.querySelectorAll('#minus')

minusBtns.forEach((minusBtn,index)=>{
    minusBtn.addEventListener('click',()=>{
        // let value = parseInt(quantity.textContent)
        if(qty[index].textContent!=1){
            let currentValue = parseInt(qty[index].textContent)
            qty[index].textContent=currentValue-1
            console.log(qty[index].textContent)
            }
            // quantity.textContent=decrease
})
})