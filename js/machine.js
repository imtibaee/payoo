// console.log("Machine added");
function getValueFromInput(id) {
const input=document.getElementById(id);
const value=input.value;
return value;
}
//balance machine
function getBalance(id){
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    return Number(balance);
}
// set balance function
function setBalance(value){
    const balanceElement=document.getElementById("balance");
    balanceElement.innerText=value;
}
//show only the selected button
function showOnly(id){
    const addmoney=document.getElementById("addmoney");
    const cashout=document.getElementById("cashout");
    const sendmoney=document.getElementById("sendmoney");
    const getbonus=document.getElementById("getbonus");
    const bills=document.getElementById("paybills");
    const transaction=document.getElementById("transaction");

//hide all the buttons
addmoney.classList.add("hidden");
cashout.classList.add("hidden");
sendmoney.classList.add("hidden");
getbonus.classList.add("hidden");
bills.classList.add("hidden");
transaction.classList.add("hidden");
//show only the selected button
const selected=document.getElementById(id);
selected.classList.remove("hidden");
}
