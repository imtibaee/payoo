let couponUsed = false;
document.getElementById("coupon-btn").addEventListener("click",function(){
    if (couponUsed) {
        alert("Coupon already used");
        return;
    }
    const coupon=getValueFromInput("coupon")
    if(coupon=="orpalovesnafees"||coupon=="nafeeslovesorpa"){
        alert(`Bonus has been added using coupon at ${new Date()}`);
        couponUsed = true;
        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100 rounded-2xl ">
        Bonus has been added using coupon at ${new Date()}
        </div>
        `
        history.append(newHistory);
    }
    else{
        alert("Incorrect Bonus Coupon");
        return;
    }
    const currentBalance=getBalance("balance");
    const newBalance=currentBalance+99;
    setBalance(newBalance);
})