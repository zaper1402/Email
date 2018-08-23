//Vairables
const sendBtn = document.getElementById('sendBtn'),
email = document.getElementById('email'),
subject = document.getElementById('subject'),
message = document.getElementById('message'),
resetBtn  = document.getElementById('resetBtn'),
sendemailForm = document.getElementById('email-form');



//Event listeners
eventListeners();

function eventListeners()
{
    //app init
    document.addEventListener('DOMContentLoaded',appInit)
    //Validate the form 
    email.addEventListener('blur',validateFeild);
    subject.addEventListener('blur',validateFeild);
    message.addEventListener('blur',validateFeild);
// reset button & send email
sendemailForm.addEventListener('submit',sendEmail);
resetBtn.addEventListener('click',resetForm);
}

//functions
//app Initialization
function appInit(){
//Disable send button 
sendBtn.disabled = true;
}

function sendEmail(e){
    e.preventDefault();
    //show spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';
    //show img
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';
    //hide this spiiner after some time and show image
    setTimeout(function(){
// spinner hide
spinner.style.display = 'none';

    
    // show img
    document.querySelector('#loaders').appendChild(sendEmailImg);
    //After five second hide img and reset the form 
    setTimeout(() => {
        sendemailForm.reset();
        sendEmailImg.remove();
    }, (5000));
     } ,3000);
}

//validate feild
function validateFeild(){
    let errors;

    //validate the length of the feild
    validateLength(this)

    //validate the email
    if(this.type==='email'){
        validateEmail(this);
    }

    //check for errors
    errors = document.querySelectorAll('.error');
    //validate send button
    if(email.value!=''&&subject.value!=''&&message.value!=''){
      if(errors.length===0){
          console.log('email checked ');
       sendBtn.disabled = false;
      }
    }
}
//Validate the length of feild
function validateLength(feild){
    if(feild.value.length>0){
        feild.style.borderBottomColor = 'green';
        feild.classList.remove('error');
    }else{
        feild.style.borderBottomColor = 'red';
        feild.classList.add('error');
    }
}

//validate email (checks for @)
function validateEmail(feild){
    let emailText = feild.value;
    //check
    if(emailText.indexOf('@')!=-1){
        feild.style.borderBottomColor = 'green';
        feild.classList.remove('error');
    }else{
        feild.style.borderBottomColor = 'red';
        feild.classList.add('error');
    }
}

//reset form
function resetForm(){
    sendemailForm.reset();
}