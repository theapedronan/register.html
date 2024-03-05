//console.log("Hello World");

// string - "Thea", 'Thea'. "08"
// number - 08, 24.1 1230e
// boolean - true, false, 1 or 0 -1 = false, >0
// object - ["apple", "banana", "grape"]
            // [1, 2, 3, 4]
            //[1, "apple" true]
            // [
            // [1, 2, 3]
            // ["apple", "banana", "grape"],
            //]
//console.log("Hello World"), 123, true, ["apple", "banana", "grape"];
// console.error("Hello World");         
// console.warn("Hello World");
// console.table(["apple", "banana", "grape"]);
// console.log(typeof)(name)

let txtUsername = document.querySelector("#txtUsername")
let txtPassword = document.querySelector("#txtPassword")
let txtConfirmPassword = document.querySelector("#txtConfirmPassword")
let btnRegister = document.querySelector("#btnRegister")

btnRegister.onclick = function () {
     register(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}

function register (username, password, confirmPassword) { 
    // if...else if...else
    // Conditional Operators (Greater than >, Less Than <, Equal ==.Not !,)
    //Greater Than or Equal >=, Less Than  or Equal <=
    // Not Equal !=

    //console.log(username, password, confirmPassword)

    if(password == confirmPassword && password != "" && confirmPassword != "") {
       return console.log("Password match!")
    } else if (password == "" || confirmPassword == "") {
       return console.log("Password must not be empty.")
    }
     else {
       return console.log("Password does not match.")
    }
    
} 


