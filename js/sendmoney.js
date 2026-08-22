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
        alert("SendMoney Successful");
    }
    const newBalance=currentBalance-Number(amount);
    setBalance(newBalance);
})