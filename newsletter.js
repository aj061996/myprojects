const form = document.querySelector('form');
const container = document.querySelector('.container')
const email = document.getElementById('email')
const containerTwo = document.querySelector('.container-2')
const dismissBtn = document.getElementById('dismiss-button')
const alertt = document.getElementById('alertt')
const span = document.getElementById('given-id')

form.addEventListener('submit',function(e){
    e.preventDefault();
    let emailInput = email.value;

    let regex = /^([a-zA-Z0-9\._]+)(@)([a-zA-Z]{1,10})(\.)(([a-z]{2})(\.)([a-z]{2})|([a-z]{3}))$/;

    if(regex.test(emailInput)){
        container.classList.add('hide');
        containerTwo.classList.remove('hide')
        span.innerHTML = emailInput;
        email.value = '';
        if(email.classList.contains('wrongid-input')){
            email.classList.remove('wrongid-input')
        }
        if(alertt.innerHTML!==''){
            alertt.innerHTML=''
        }
        
    }else{
        email.classList.add('wrongid-input')
        alertt.innerHTML = 'Valid email required'
    }
})

dismissBtn.addEventListener('click',function(){
    container.classList.remove('hide');
    containerTwo.classList.add('hide')

})

