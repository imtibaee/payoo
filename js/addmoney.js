document.getElementById("add-money-btn").addEventListener("click",function(){
    console.log("Add money button clicked");
  const addMoneyBank=getValueFromInput("add-money-bank");
  if(addMoneyBank=="Select Bank") {
    alert("Please select a bank");
    return;
  }
  const accno= getValueFromInput("add-money-account");
  if(accno.length!=11){
    alert("Invalid account number");
    return;
  }
  const amount=getValueFromInput("add-money-amount");
   const currentBalance=getBalance("balance");
   const pin=getValueFromInput("add-money-pin");
   if(pin=="1234"){
    alert(`Money added succeessfully from
       ${addMoneyBank} at ${new Date()}`);
    const newBalance=currentBalance+Number(amount);
    setBalance(newBalance);
   }
   else{
    alert("Invalid Pin");
    return;
   }

})