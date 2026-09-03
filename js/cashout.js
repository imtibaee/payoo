//with machine code
document.getElementById("logout-btn").addEventListener("click",function(){
    window.location.replace("index.html");
})
document.getElementById("cashout-btn").addEventListener("click", function() {
  const cashoutNumber=getValueFromInput("cashout-agent")
   if(cashoutNumber.length!=11){
    alert("Invalid agent number");
    return;
}
const cashoutAmount=getValueFromInput("cashout-amount")
 //get current balance
const currentBalance=getBalance("balance");
//calculate new balance 
const newBalance=currentBalance-Number(cashoutAmount);
if(newBalance<0){
    alert("Insufficient balance");
    return;
}
    const pin=getValueFromInput("cashout-pin");
    if(pin=="1234"){
        alert(`Cashout successful to agent number: ${cashoutNumber} at ${new Date()}`);
       setBalance(newBalance);
       const history=document.getElementById("history-container");
       const newHistory=document.createElement("div");
       newHistory.innerHTML=`
       <div class="transaction-card p-5 bg-base-100 rounded-2xl">
       Cashout successful to agent number: ${cashoutNumber} at ${new Date()}
       </div>`
       history.append(newHistory);
    }
    else{
        alert("Invalid Pin");
        return;
    }
})



//without machine code

// // console.log("Cashout script loaded");
// //logout button
// document.getElementById("logout-btn").addEventListener("click",function(){
//     window.location.replace("index.html");
// }
// )
// document.getElementById("cashout-btn").addEventListener("click", function() {
// //get agent number
// const cashoutNumberInput=document.getElementById("cashout-agent")
// const cashoutNumber=cashoutNumberInput.value;
// if(cashoutNumber.length!=11){
//     alert("Invalid agent number");
//     return;
// }

// //get the ammount
// const cashoutAmountInput=document.getElementById("cashout-amount")
// const cashoutAmount=cashoutAmountInput.value;

// //get current balance
// const currentBalanceElement=document.getElementById("balance");
// const currentBalance=currentBalanceElement.innerText;
// //calculate new balance 
// const newBalance=Number(currentBalance)-Number(cashoutAmount);
// if(newBalance<0){
//     alert("Insufficient balance");
//     return;
// }
//  console.log(newBalance);
// //get the pin and validate it   
// const cashoutPinInput=document.getElementById("cashout-pin");
// const pin=cashoutPinInput.value;
// if(pin=="1234"){
//     alert("Cashout successful");
//     currentBalanceElement.innerText=newBalance;
// }
// else{
//     alert("Invalid Pin");
//     return;
// }
// })