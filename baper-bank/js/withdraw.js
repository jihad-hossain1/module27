/**
 * 1. add event handler with the withdraw button
 * 2. get the withdraw amount from the withdraw input field
 * 2.5 also make sure to convert the input into a number by using parseFloat 
 * 3. get previous withdraw total
 * 4. calculate total withdraw amonut
 * 4.5 set total withdraw amount 
 * 5. get the preious balnce
 * 6. calculate new balance total
 * 6.5 set the new balance
 * 
 * 
 * 7. clear the input field
 */

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2 :
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-clear number :
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    // step-3 :
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5 :
    const balanceTotalElement = document.getElementById('balance-total');
    const preiousBalanceTotalString = balanceTotalElement.innerText;
    const preiousBalanceTotal = parseFloat(preiousBalanceTotalString);

    // step-clear number :
    withdrawField.value = '';

    if(newWithdrawAmount > preiousBalanceTotal){
        alert('Baap er Bank a eto taka nai');
        return;
    }
    // step-4 : 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    // step-6 :
    const newBalanceTotal = preiousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



    // step-clear number :
    withdrawField.value = '';
})