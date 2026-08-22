let couponUsed = false;
document.getElementById("coupon-btn").addEventListener("click",function(){
    if (couponUsed) {
        alert("Coupon already used");
        return;
    }
    const coupon=getValueFromInput("coupon")
    if(coupon=="orpalovesnafees"||coupon=="nafeeslovesorpa"){
        alert("Bonus has been added");
        couponUsed = true;
    }
    else{
        alert("Incorrect Bonus Coupon");
        return;
    }
    const currentBalance=getBalance("balance");
    const newBalance=currentBalance+99;
    setBalance(newBalance);
})