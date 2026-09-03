document.getElementById("paybill-btn").addEventListener("click",function(){
    console.log("Pay Now button clicked");
  const payBillBank=getValueFromInput("paybill-bank");
  if(payBillBank=="Select Bank") {
    alert("Please select a bank");
    return;
  }
  const accno= getValueFromInput("paybill-account");
  if(accno.length!=11){
    alert("Invalid account number");
    return;
  }
  const amount=getValueFromInput("paybill-amount");
   const currentBalance=getBalance("balance");
   if(amount>currentBalance){
    alert("Insufficient Balance");
    return;
   }
   const pin=getValueFromInput("paybill-pin");
   if(pin=="1234"){
    alert(`Payment succeessful to
       ${payBillBank} at ${new Date()}`);
    const newBalance=currentBalance-Number(amount);
    setBalance(newBalance);
   const history=document.getElementById("history-container");
  const newHistory=document.createElement("div");
    newHistory.innerHTML=`
      <div class="transaction-card p-5 bg-base-100 rounded-2xl">
     Payment succeessful to
       ${payBillBank} accno: ${accno} at ${new Date()}
      `
      history.append(newHistory);
   }
   else{
    alert("Invalid Pin");
    return;
   }

})