window.onload = function(){
    let form = document.getElementById('form1')
    form.addEventListener('submit', function(event){
        event.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        if (email === "") {
            document.getElementById('emailErr').innerHTML = "email field is required"
        } if (password === "") {
            document.getElementById('passErr').innerHTML = "password field is required"
        }
        let allData = {
            email: email,
            password: password
        }
        console.log(allData)
    })
}

