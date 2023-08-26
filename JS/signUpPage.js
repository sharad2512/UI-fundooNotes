window.onload = function () {
    let form = document.getElementById('form-1')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let firstName = document.getElementById('first_name').value
        let lastName = document.getElementById('last_name').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let confirmPassword = document.getElementById('password_confirm').value

        if (firstName === "") {
            document.getElementById('first').innerHTML = "first name field is required"
        } if (lastName === "") {
            document.getElementById('last').innerHTML = "last name field is required"
        } if (email === "") {
            document.getElementById('emailErr').innerHTML = "email field is required"
        } if (password === "") {
            document.getElementById('pass').innerHTML = "password field is required"
        } if (confirmPassword === "") {
            document.getElementById('conf').innerHTML = "confirm password field is required"
        }
        //email validation
        if(emailValidation(email)){
            document.getElementById('emailErr').innerHTML = "enter currect email"
        }

        let allData = {
            name: firstName + " " + lastName,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        }
        console.log(allData)
        
        function  emailValidation (email){
            let  emailRegex = /^[a-z]{3,}(.[0-9a-z])?@([a-z]){2,}.[a-z]$/;
            // let passwordRegex = /^.(?=.{8,})(?=.[A-Z])(?=.[0-9])(?=.[@#$%^&+=]).*$/;
           let validation = emailRegex.test(email)
           console.log(validation)
        }
        $.ajax({
            url:"http://127.0.0.1:8000/api/user/signUp",
            type:"post",
            data:allData,
            success: function(result){
                alert("sign-up Successfully")
                console.log(result);
                // let token = result.data;
                // localStorage.setItem('token',token);
                // window.location.href = 'http://127.0.0.1:5500/pages/dashboard.html'
            }
        })

    })
    
}
