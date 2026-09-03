// console.log("sendmoney script added");
document.getElementById("sendmoney-btn").addEventListener("click",function(){
    console.log("send-now btn clicked");
    const accno=getValueFromInput("sendmoney-number")
    // console.log(accno);
    if(accno.length!=11){
        alert("Invalid User Account Number");
        return;
    }
    const amount=getValueFromInput("sendmoney-amount")
    //   console.log(amount);
    const currentBalance=getBalance("balance")
    //  console.log(currentBalance);
    if(amount>currentBalance){
        alert("Insufficient Balance");
        return;
    }
    const pin=getValueFromInput("sendmoney-pin");
    if(pin=="1234"){
        alert(`Send Money successful to account: ${accno} at ${new Date()}`);
        //history-container k dhore niye ashbo
   const history=document.getElementById("history-container");
   //new div create korbo
   const newHistory=document.createElement("div");
   //new div er innerHTML set korbo
   newHistory.innerHTML=`
      <div class="transaction-card p-5 bg-base-100 rounded-2xl">
      Send Money succeessful to
       account: ${accno} at ${new Date()}
      </div>
      
   `
   //history container e new div append korbo
   history.append(newHistory);
    }
    const newBalance=currentBalance-Number(amount);
    setBalance(newBalance);
})