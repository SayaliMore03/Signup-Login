// SIGNUP FUNCTION
function signup(userName) {
    let users = ["sayali", "rohan", "priya"]; // existing users

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

// Test
console.log(signup("rohan")); // User Already Registered
console.log(signup("aditi")); // Signup Successful


// LOGIN FUNCTION
function login(userName, password) {
    let users = ["sayali", "rohan", "priya"]; // existing users
    let correctPassword = "Emp@123";

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } 
    else if (password !== correctPassword) {
        return "Wrong Password....";
    } 
    else {
        return "Login Successful...";
    }
}

// Test
console.log(login("sayali", "Emp@123")); // Login Successful
console.log(login("sayali", "abc"));     // Wrong Password
console.log(login("aditi", "Emp@123"));  // User Not Found
