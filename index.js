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
