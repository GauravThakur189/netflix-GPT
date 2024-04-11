

 export const checkValidation = (email,password)=>{

    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmail) return  "Invalid email!";
    else if (!isPassword) return "Invalid Password";
    
    else return null;

}