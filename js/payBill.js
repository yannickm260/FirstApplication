const userName = document.getElementById('user');
const password = document.getElementById('psw');
const amount = document.getElementById('amount');
const payBill = document.getElementById('submit');
const message = document.getElementById('message');
const submit = document.getElementById('submit')
const form = document.querySelector('form')
const lowerCase = document.getElementById('letter')
const upperCase = document.getElementById('capital') 
const number = document.getElementById('number')
const length = document.getElementById('length')

const users = [
    {
        name: 'yannickm260@github.com',
        pass: '!x)0GitH'
    },
    { 
        name: 'yan@gmail.com',
        pass: 'Yannick1234'
    },
    {
        name: 'chris@gmaol.co',
        pass: 'Chris2024'
    }
];

password.addEventListener('focus', function() {
    message.style.display = "block";
});

password.addEventListener('blur', function() {
    message.style.display = "none";
});

userName.addEventListener('keyup', function() {
    let isMatch = false;
    if (userName.value !== "") {
        for (let user of users) {
            if (userName.value === user.name) {
                userName.classList.add('border-2', 'border-green-500');
                userName.classList.remove('border-red-500', 'animated');
                isMatch = true;
                break;
            }
        }
        if (!isMatch) {
            userName.classList.add('border-red-500', 'animated');
            userName.classList.remove('border-green-500');
        }
    } else {
        userName.classList.remove('border-green-500', 'border-red-500');
    }
});
password.addEventListener('keyup', function() {
    let isMatch = false;
    if (password.value !== "") {
        for (let user of users) {
            if (password.value === user.pass) {
                password.classList.add('border-2', 'border-green-500');
                password.classList.remove('border-red-500', 'animated');
                isMatch = true;
                break;
            }
        }
        if (!isMatch) {
            password.classList.add('border-red-500', 'animated');
            password.classList.remove('border-green-500');
        }
        const lowerCaseLetters = /[a-z]/g
        if(password.value.match(lowerCaseLetters)){
            lowerCase.classList.remove('text-red-500',"before:content-['✕']")
            lowerCase.classList.add('text-green-500',"before:content-['✓']")
        }else{
            lowerCase.classList.add('text-red-500',"before:content-['✕']")
            lowerCase.classList.remove('text-green-500',"before:content-['✓']")
            
        }
        const upperCaseLetters = /[A-Z]/g
        if(password.value.match(upperCaseLetters)){
            upperCase.classList.remove('text-red-500',"before:content-['✕']")
            upperCase.classList.add('text-green-500',"before:content-['✓']")
        }else{
            upperCase.classList.add('text-red-500',"before:content-['✕']")
            upperCase.classList.remove('text-green-500',"before:content-['✓']")
        }
        const numbers = /[0-9]/g
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
    } else {
        password.classList.remove('border-green-500', 'border-red-500');
    }
        
});


amount.addEventListener('input', () => { 
    let existingError = form.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    if (amount.value !== "") {
        let value = parseFloat(amount.value);

        if (!isNaN(value) && value > 0) {
            amount.classList.add('border-green-500');
            amount.classList.remove('border-red-500');
        } else {
            amount.classList.add('border-red-500');
            amount.classList.remove('border-green-500');

            let span = document.createElement('span');
            span.innerText = "Incorrect value. Please enter an amount greater than zero.";
            span.classList.add('error-message', 'text-red-500', 'text-sm', 'mt-1','absolute','-bottom-[20px]'); // Ajoutez des classes Tailwind appropriées
            form.appendChild(span);
        }
    } else {
        amount.classList.remove('border-green-500', 'border-red-500');
    }
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(userName.value !=="" && password.value !=="" && amount.value !== ""){
        localStorage.setItem('amount', amount.value);
        window.location.href = "qrcode.html";
    }
});


