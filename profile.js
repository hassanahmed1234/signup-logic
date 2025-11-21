var loggedIn = JSON.parse(localStorage.getItem('loggedIn'))

if (!loggedIn) {
    alert('create your account')
    window.location = 'login.html'
}


var profilename = document.querySelector('#name')
var email = document.querySelector('#email')

var edit = document.querySelector('#edit')
var jobs = document.querySelector('#jobs')
var logout = document.querySelector('#logout')
var modal = document.querySelector('.modalmain')
var close = document.querySelector('#close')
var submit = document.querySelector('#submit')
var dp = document.querySelector('#dp')

email.innerHTML = loggedIn.email

modal.classList.add('hide')

profilename.innerHTML = `${loggedIn.firstname} ${loggedIn.lastname}`

email.innerHTML = `${loggedIn.email}`

edit.addEventListener('click', () => {
    console.log('click huaa');
    modal.classList.remove('hide')
    document.body.classList.add('overlay')



})
close.addEventListener('click', () => {

    modal.classList.add('hide')
    document.body.classList.remove('overlay')
})

submit.addEventListener('click', () => {
    var updateuser = JSON.parse(localStorage.getItem('loggedIn')) || []


    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var updEmail = document.getElementById('updEmail')
    var imgurl = document.getElementById('imgurl')

    if(!firstname.value || !lastname.value || !updEmail.value){
      return  alert('Firstname,lastname & email is required')
    }
    var updateObj = {
        firstname: firstname.value,
        lastname: lastname.value,
        updEmail: updEmail.value,
        imgurl: imgurl.value
    }
    localStorage.setItem('loggedIn' , JSON.stringify(updateObj))

    if(firstname && lastname){
    profilename.innerHTML = `${firstname.value} ${lastname.value}`
    
    }
    if(updEmail){
    email.innerHTML = `${updEmail.value}`
    }
    if(imgurl){
   dp.src = `${imgurl.value}`
    }

    

    modal.classList.add('hide')

    firstname.value = ""
    lastname.value = ""
    updEmail.value = ""
    imgurl.value = ""
})

logout.addEventListener('click',()=>{
    localStorage.removeItem('loggedIn')
    window.location = 'login.html'
    
})

jobs.addEventListener('click',()=>{
    console.log('click');
    window.location = 'jobs.html'
    
})