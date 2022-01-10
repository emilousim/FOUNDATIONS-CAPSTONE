    const form = document.querySelector('form')
    const fullname = document.querySelector('#fullname')
    const email = document.querySelector('#email')
    const phone_number = document.querySelector('#phone_number')
    const nameofcat = document.querySelector('#nameofcat')
    const Explanation = document.querySelector('#Explanation')
    
form.addEventListener('submit', (e) => {
    e.preventDefault()

    axios.post('http://localhost:5500/adoption/', {
        fullname: fullname.value,
        email: email.value,
        phone_number: phone_number.value,
        nameofcat: nameofcat.value,
        Explanation: Explanation.value})
        .then(() => {
            location.reload()
        })
        .catch(err => console.log('front end error', err))
})