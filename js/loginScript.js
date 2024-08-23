// PARTIE LOG IN

let password = document.getElementById('psw')
let message = document.getElementById('message')
let lowerCase = document.getElementById('letter')
let upperCase = document.getElementById('capital')
let number = document.getElementById('number')
let length = document.getElementById('length')
let user = document.getElementById('user')
let submit = document.getElementById('submit')
let userMail = "yannickm260@github.com"
let generatedPass = "Yannick1234"


user.onkeyup = function(){
    if(user.value !=""){
        if(user.value == userMail){
            user.classList.add('border-2','border-green-500')
            user.classList.remove('border-red-500','animated')
        }else{
            user.classList.add('border-red-500','animated')
            user.classList.remove('border-green-500')
        }
    }else{
        user.classList.remove('border-green-500')
        user.classList.remove('border-red-500')
    }
}
password.onfocus = function(){
    message.style.display="block"
}
password.onblur = function(){
    message.style.display="none"
}


password.onkeyup = function(){
        let lowerCaseLetters = /[a-z]/g
        if(password.value.match(lowerCaseLetters)){
            lowerCase.classList.remove('text-red-500',"before:content-['✕']")
            lowerCase.classList.add('text-green-500',"before:content-['✓']")
        }else{
            lowerCase.classList.add('text-red-500',"before:content-['✕']")
            lowerCase.classList.remove('text-green-500',"before:content-['✓']")

        }
        let upperCaseLetters = /[A-Z]/g
        if(password.value.match(upperCaseLetters)){
            upperCase.classList.remove('text-red-500',"before:content-['✕']")
            upperCase.classList.add('text-green-500',"before:content-['✓']")
        }else{
            upperCase.classList.add('text-red-500',"before:content-['✕']")
            upperCase.classList.remove('text-green-500',"before:content-['✓']")
        }
        let numbers = /[0-9]/g
        if(password.value.match(numbers)){
            number.classList.remove('text-red-500',"before:content-['✕']")
            number.classList.add('text-green-500',"before:content-['✓']")
        }else{
            number.classList.add('text-red-500',"before:content-['✕']")
            number.classList.remove('text-green-500',"before:content-['✓']")
        }
        if(password.value.length >=8){
            length.classList.remove('text-red-500',"before:content-['✕']")
            length.classList.add('text-green-500',"before:content-['✓']")
        }else{
            length.classList.add('text-red-500',"before:content-['✕']")
            length.classList.remove('text-green-500',"before:content-['✓']")

        }
        if(password.value == generatedPass){
            password.classList.remove('border-red-500','animated')
            password.classList.add('border-2','border-green-500')
        }else if(password.value ==""){
            password.classList.remove('border-green-500')
            password.classList.remove('border-red-500')
        }else if(password.value !=generatedPass){
            password.classList.add('border-red-500','animated')
            password.classList.remove('border-green-500')
        }
}
submit.onclick = ()=>{
    if(user.value !="" && password.value !=""){
        if(user.value == userMail && password.value == generatedPass){
            window.location.href = "game.html";
        }
        else if(user.value != userMail && password.value == generatedPass){
            user.classList.remove('border-2','border-green-500')
            user.classList.add('border-2','border-red-500','animated')
        }else if(user.value == userMail && password.value != generatedPass){
            password.classList.remove('border-green-500')
            password.classList.add('border-red-500','animated')
        }
    }
}