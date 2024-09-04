const registerValid = (name,email,password) =>{
    if(!name) return 'Please Enter your name';
    if(!email) return 'Please Enter Your email';
    if(!validateEmail(email)) return 'Please Enter valid Email'
    if(!password) return "Please Enter your password";
    if(password.length < 6) return 'Password should be 6 characters atleast'
}

const loginValid = (email,password) =>{
    if(!email) return 'Please Enter Your email';
    if(!password) return "Please Enter your password"
}

function validateEmail(email){
    const regex = /^[a-z]+[0-9]*@gmail\.com$/
    return regex.test(email)
}


export {registerValid,loginValid}