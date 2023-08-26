window.onload = function () {

    let form = document.getElementById('form-1')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        if (email === "") {
            document.getElementById('emailErr').innerHTML = "email field is required"
        } if (password === "") {
            document.getElementById('passErr').innerHTML = "password field is required"
        }
        if(!emailValidation(email)){
            document.getElementById('emailErr').innerHTML = "enter currect email"
        }
        let allData = {
            email: email,
            password: password
        }
        console.log(allData)
        $.ajax({
            url: "http://127.0.0.1:8000/api/user/login",
            type: "POST",
            data: allData,
            success: function (result) {
                alert("Log-in successfully")
                console.log(result);
                let token = result.token;
                console.log(token)
            localStorage.setItem("token" , token)
                // window.location.href = 'http://127.0.0.1:5500/pages/dashboard.html'
            }
        })
    })
      function  emailValidation (email){
        let  emailRegex = /^[a-z]{3,}(.[0-9a-z])?@([a-z]){2,}.[a-z]$/;
        // let passwordRegex = /^.(?=.{8,})(?=.[A-Z])(?=.[0-9])(?=.[@#$%^&+=]).*$/;
       let validation = emailRegex.test(email)
       console.log(validation)
    }

}

