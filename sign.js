


console.log('hahahah');





function signuphandler() {
    
    var firstname = document.querySelector('#firstname')
    var lastname = document.querySelector('#lastname')
    var username = document.querySelector('#username')
    var email = document.querySelector('#email')
    var password = document.querySelector('#password')
    var cpassword = document.querySelector('#cpassword')

    var allusers = JSON.parse(localStorage.getItem('allusers')) || []

    if (!firstname.value || !lastname.value || !username.value || !email.value || !password.value || !cpassword.value ) {
        alert('All input are required')

    }
    if (password.value != cpassword.value) {
        return alert('password and confirm password should return')
        
        
    }
    if (password.value.length < 8) {
        return alert('password length should be 8 characters long')        
        
    }

    var usernameexist = allusers.find((user)=>{
        return user.username.toLowerCase() === username.value.toLowerCase()
    })
    var emailExist = allusers.find((user)=>{
        return user.email.toLowerCase() === email.value.toLowerCase()
    })

    if(usernameexist){
      return  alert('username pehle se hai')
    }
    if(emailExist){
       return alert('email pehle se hai')
    }



    var userDetail = {
        firstname : firstname.value,
        lastname : lastname.value,
        username : username.value,
        email : email.value,
        password : password.value

    }
    console.log(userDetail);

    allusers.push(userDetail)

    localStorage.setItem('allusers',JSON.stringify(allusers))


firstname.value = ""
lastname.value = ""
username.value = ""
email.value = ""
password.value = ""
cpassword.value = ""


window.location = 'login.html'


}



var menuicon = document.getElementById('menuicon')
var sideNav = document.getElementById('sideNav')

sideNav.classList.add   ('hide')
menuicon.addEventListener('click',()=>{
   sideNav.classList.toggle('hide')
   sideNav.classList.add('animate__animated','animate__slideInLeft')


  setTimeout(()=>{
     sideNav.classList.remove('animate__animated','animate__slideInLeft')
},900)
  })

