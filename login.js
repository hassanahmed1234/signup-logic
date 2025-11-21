function login() {
    var emailLogin = document.querySelector('#email')
    var passwordLogin = document.querySelector('#password')

    if (!email.value || !password.value) {
       return alert('Email & Password is Required')
    }

    if (passwordLogin.value.length < 8) {
       return alert('Password is incorrect')
    }
    
     var allusers = JSON.parse(localStorage.getItem('allusers')) || []

     var isExist = allusers.find((user)=>{
        return user.email.toLowerCase() == emailLogin.value.toLowerCase()
     })
     console.log(isExist);

     if (!isExist) {
        return alert('Please create your account')
     }

     if(isExist.password == passwordLogin.value){
       alert('Congratulations...your account has created')
       window.location = 'profile.html'
     }

     localStorage.setItem('loggedIn',JSON.stringify(isExist))




     
}