document.getElementById('btn-submit').addEventListener('click', function(){
    //step2: get the email address inside the email input field
    //always remember to use .value to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step3: get password
    //set id on the html element 
    //get the element 
    // get the value from the element 
    const pass = document.getElementById('user-password');
    const password = pass.value;

    //danger: Do not verify email password on the client side
    //step 4: verify  email and password and check whether valid user or not
 
    if (email === 'shakib@gmail.com' && password === 'shakib'){
       window.location.href = 'bank.html';

    }
    else{
        alert('forget password');
    }
}) 