window.onload = function(){
let form = document.getElementById('form-1')
form.addEventListener('submit', function(event){
    event.preventDefault()
    let firstName = document.getElementById('first_name').value
    let lastName = document.getElementById('last_name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('password_confirm').value
    if(firstName === ""){
        document.getElementById('first').innerHTML= "first name field is required"
    } 
    if(lastName === ""){
        document.getElementById('last').innerHTML= "last name field is required"
    } if(email === ""){
        document.getElementById('emailErr').innerHTML= "email field is required"
    } if(password === ""){
        document.getElementById('pass').innerHTML= "password field is required"
    } if(confirmPassword == ""){
        document.getElementById('conf').innerHTML= "confirm password field is required"
    }
    
    let allData = {
        name:firstName+" "+lastName,
        email:email,
        password:password
    }
    console.log(allData)

})
}
 