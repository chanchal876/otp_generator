let input = document.querySelectorAll("input")
let button = document.querySelector("button")
let expiry = document.getElementById("expiry")
let mobile = document.getElementById("mobile")

let otp = "",
expiryInterval = ""

const getOtp = () =>{
    let digits = "0123456789"
    

    for (let i = 0; i < 4; i++){
        otp+= digits[Math.floor(Math.random()*10)]
    }
    input.value = otp
    
    alert("get otp" + otp)

    input[0].focus()
    expiry.innerText = 30
    expiryInterval = setInterval(() =>{
        expiry.innerText--
        if(expiry.innerText == 0){
            clearInterval(expiryInterval)
        }
    },1000)
}
let n = prompt("Enter your 10 digits mobile no. to verify your account")
if (n){
    mobile.innerText = n
    getOtp()
}
input.forEach((input, index) =>{
    // console.log(input)
    input.addEventListener("keyup", function(e){
        currentIndex = input,
        nextInput = input.nextElementSibling,
        previousInput = input.previousElementSibling
        console.log(currentIndex, nextInput, previousInput)

        if(
            nextInput &&
            nextInput.hasAttribute("disabled") &&
            currentIndex !== ""
        ){
            nextInput.removeAttribute("disabled", true)
            nextInput.focus()
        }
        if(e.key ==="Backspace"){
            input.forEach((input, index1) =>{
                if (index <= index1 && previousInput){
                    input.setAttribute("disabled", true)
                    previousInput.focus()
                    previousInput.value = ""
                }
            })
        }
        if(input[3].disabled && inputs[3].value !== ""){
            input[3].blur()
            button.classList.add("active")
            return;

        }
        button.classList.remove("active")

    })

})


button.addEventListener("click", () =>{
    let verify = ""
    input.forEach((input) =>{
        verify += input.value
    })
    // console.log(verify)
    if(verify === otp){
        alert("your account has been verified successfully")
        clearOtp()
    }
    else{
        alert("OTP is wrong please enter correct OTP")
    }
    
})


const clearOtp = () =>{
    input.forEach((input) =>{
        input.value = ""
    })
    clearInterval(expiryInterval)
}


