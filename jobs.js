var alljobs = JSON.parse(localStorage.getItem('alljobs')) || []
var loggedIn = JSON.parse(localStorage.getItem('loggedIn'))



var postbtn = document.querySelector('#postbtn')
var modal = document.querySelector('.modalmain')
var close = document.querySelector('#close')
var submit = document.querySelector('#submit')

if (!loggedIn) {
    alert('create your account')
    window.location = 'login.html'
}

modal.classList.add('hide')

function post() {    

modal.classList.remove('hide')
 document.body.classList.add('overlay')
    
}


close.addEventListener('click', () => {

    modal.classList.add('hide')
    document.body.classList.remove('overlay')
})


submit.addEventListener('click',()=>{



    var jobname = document.querySelector('#jobname')
    var salaryinput = document.querySelector('#salaryinput')
    var company = document.querySelector('#company')
    var location = document.querySelector('#location')
    var uploadDate = document.querySelector('#date')

    if (!jobname.value || !salaryinput.value || !company.value|| !location.value) {
       return alert('All feilds are required..!')
    }

    var jobObj = {
        jobname : jobname.value,
        salary : salaryinput.value,
        company : company.value,
        date : uploadDate.value,
        location : location.value,
        views : views.value,
        posted : loggedIn
    }

    alljobs.push(jobObj)

    localStorage.setItem('alljobs',JSON.stringify(alljobs))

     modal.classList.add('hide')
    document.body.classList.remove('overlay')

    jobname.value =""
    salaryinput.value =""
    company.value =""
    location.value =""

    jobsUI()
    
})

var main = document.querySelector('#main')

function jobsUI(params) {
    // var company = document.querySelector('#company')
    // var job = document.querySelector('#job')
    // var salary = document.querySelector('#salary')
    // var location = document.querySelector('#location')
    // var date = document.querySelector('#date')

    const alljobsUi =  alljobs.map((singalJob)=>{
        return `
         <div class="cardbox ">
            <div class="cardleft">
               <div>
                 <p id="company">${singalJob.company}</p>
                <p id="job">${singalJob.jobname}</p>
                <p id="salary">${singalJob.salary}</p>
               </div>
               <div>
                <p id="location">${singalJob.location}</p>
                <p id="date">${singalJob.date}</p>
               </div>
            </div>
            <div class="cardright">
                <div>
                    <img src="assets/logo.png" alt="">
                </div>
                <div>
                    <p id="views">${singalJob.views} views</p>
                    <button id="btn" class="btn btn-info">applied</button>
                    <p id="posted">posted by : ${singalJob.posted.username}</p>
                </div>
            </div>
        </div>
        `

    })
        main.innerHTML = alljobsUi

    

}

jobsUI()