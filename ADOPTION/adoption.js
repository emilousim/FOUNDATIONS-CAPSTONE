// const { application } = require("express")
const AdoptApp = document.querySelector('#AdoptApp')
const redirect = () => {
    window.location.replace("http://127.0.0.1:5500/ADOPTION/adoption.html")
}
let bodyObj = {
    fullName: "",
    email: "",
    phone: "",
    nameOfCat: "",
    hadCatB4: "",
    Explanation: ""
}

function getApplicationInfo() {
    e.preventDefault()
    let fullNameInput = document.querySelector('#fullName')
    let emailInput = document.querySelector('#email')
    let phoneInput = document.querySelector('#phone')
    let catNameInput = document.querySelector('#nameOfCat')
    let hadCatInput = document.querySelector('#hadCatB4')
    let ExplanationInput = document.querySelector('#Explanation')

    bodyObj.fullNameInput = fullNameInput.value
    bodyObj.emailInput = emailInput.value
    bodyObj.phoneInput = phoneInput.value
    bodyObj.catNameInput = catNameInput.value
    bodyObj.hadCatInput = hadCatInput.value
    bodyObj.ExplanationInput = ExplanationInput.value
    
    fullNameInput.value = ""
    emailInput.value = ""
    phoneInput.value = ""
    catNameInput.value = ""
    hadCatInput.value = ""
    ExplanationInput.value = ""

    console.log(bodyObj)

    axios.get('http://localhost:3000/application') 
    .then(redirect)

    // axios.get('http://localhost:3000/application') 
    //     .then(res => {
    //         const application = res.data[0]
    //         console.log(application)
    //         const {
    //             fullName: fullName, 
    //             email, 
    //             phone: phone, 
    //             catName: nameOfCat,
    //             hadCat: hadCatB4,
    //             Explanation: Explanation
    //         } = application

    //         fullNameInput.value = fullName
    //         emailInput.value = email
    //         phoneInput.value = phone
    //         catNameInput.value = nameOfCat 
    //         hadCatInput.value = hadCatB4
    //         ExplanationInput.value = Explanation
    //     })
}

// console.log(application)

AdoptApp.addEventListener('submit', getApplicationInfo)
