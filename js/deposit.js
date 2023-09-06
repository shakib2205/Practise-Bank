//step: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step2: get the deposit amount from the deposit input field
    // for input use .value to the value inside the input field 
    const depositField =document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount= parseFloat(newDepositAmountString);

    //step: get the current deposit total amount 
    // for non-input (element other than input , textarea)use innerText to get the text  
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step:5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step:6 get new deposit balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;




    //step7: clear the deposit field
    depositField.value = '';
 })