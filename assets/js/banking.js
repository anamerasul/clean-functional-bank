// deposit button handle
document.getElementById('deposit-btn').addEventListener('click', function(){

        // deposit input value
        console.log('deposit clicked')

        const depositInput=document.getElementById('deposit-amount');

        const depositInputValueText=depositInput.value;
        console.log(depositInputValueText);

        const  depositInputValue=parseFloat(depositInputValueText);

        console.log(depositInputValue)
        // previous deposit value
        const previousDepositAmmout=document.getElementById('deposit-total');
        const previousDepositAmmoutText=previousDepositAmmout.innerText;
        console.log(previousDepositAmmoutText);

        const previousDepositAmmoutvalue=parseFloat(previousDepositAmmoutText);
        console.log(previousDepositAmmoutvalue);
        // total deposit value
        const totalDepositAmmount=previousDepositAmmoutvalue+depositInputValue;

        previousDepositAmmout.innerText=totalDepositAmmount
         // update balance
        const previousBalance=document.getElementById('balance-total');
        const previousBalanceText=previousBalance.innerText;
        const previousBalanceValue=parseFloat(previousBalanceText);

        const TotalBalance=previousBalanceValue+depositInputValue;
        previousBalance.innerText=TotalBalance
        // clear input

        depositInput.value='';

       
});


// withdraw button handle;
document.getElementById('withdraw-btn').addEventListener('click',function(){

        // withdraw input value
        console.log("withdraw click");
        const withdrawInput=document.getElementById('withdraw-amount');
        const withdrawInputTextValue=withdrawInput.value;

        const withdrawInputValue=parseFloat(withdrawInputTextValue);

        console.log(withdrawInputValue);

        // previous  withdraw input
        const previousWithdrawAmmount=document.getElementById('withdraw-total');
        const previousWithdrawAmmountText= previousWithdrawAmmount.innerText;
        const previousWithdrawAmmountValue=parseFloat(previousWithdrawAmmountText);

        // update withdraw input

        const TotalWithdraw=previousWithdrawAmmountValue+withdrawInputValue;

        previousWithdrawAmmount.innerText=TotalWithdraw;

        // update balance
        const previousBalance=document.getElementById('balance-total');
        const previousBalanceText=previousBalance.innerText;
        const previousBalanceValue=parseFloat(previousBalanceText);

        const TotalBalance=previousBalanceValue-withdrawInputValue;
        previousBalance.innerText=TotalBalance





        // clear input
        withdrawInput.value='';

})