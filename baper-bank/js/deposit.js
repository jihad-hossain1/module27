// step-1 : add event listner to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2 : get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value ;
    
    // step-3 : get the current deposit total
    // for non-input(element other than input, textarea) usr innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

    // clear the deposit field
    depositField.value = '';
})