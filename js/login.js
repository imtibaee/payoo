// console.log("hello world");
document.getElementById("login-btn").addEventListener("click", function() {
// console.log("Login button clicked");
// get mobile nuumber
const numberInput=document.getElementById("input-number");
const mobileNumber=numberInput.value;
console.log(mobileNumber);
// get pin
const pinInput=document.getElementById("input-pin");
const pin=pinInput.value;
console.log(pin);

// validate mobile number and pin
if(mobileNumber=="01879723722" && pin=="1234")
// if valid, redirect to dashboard
{
//    alert("Login successful");
   window.location.assign("home.html");
}
else {
    alert("Login failed");
    return;
}
});