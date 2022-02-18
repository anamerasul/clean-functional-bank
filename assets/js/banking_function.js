// common function to reduce code
function getInputValue(inputId){
        const Input=document.getElementById(inputId);
        const InputValueText=Input.value;
        const  InputValue=parseFloat(InputValueText);
         // clear input
         Input.value='';
        return InputValue;
}
//  Deposit and withdraw update with one function
function updateTotalField(InputValue,InputId){
        const previousInputAmmout=document.getElementById(InputId);
        const previousInputAmmoutText=previousInputAmmout.innerText;
        const previousInputAmmoutvalue=parseFloat(previousInputAmmoutText);
        // total  value from input and updtate deposit and withdraw field
        const totalAmmount=previousInputAmmoutvalue+InputValue;
        previousInputAmmout.innerText=totalAmmount
}
// current balance function
function getCurrent(inputId){
        const currentBalance=document.getElementById(inputId);
        const currentBalancetext=currentBalance.innerText
        const currentBalancevalue=parseFloat(currentBalancetext);
        return currentBalancevalue;
}

function updateBalance(previousAmountId,isAdd,InputValue){

        const previousBalance=document.getElementById(previousAmountId);
        const previousBalanceText=previousBalance.innerText;
        const previousBalanceValue=parseFloat(previousBalanceText);
        // blance update for deposit
        if(isAdd==true){
        const TotalBalance=previousBalanceValue+InputValue;
        previousBalance.innerText=TotalBalance
        }
       // blance update for withdraw 
        else{
                const TotalBalance=previousBalanceValue-InputValue;
                previousBalance.innerText=TotalBalance
        }
}

// deposit button handle
document.getElementById('deposit-btn').addEventListener('click', function(){
        const  depositInputValue=getInputValue('deposit-amount');
        if(depositInputValue>0){
        updateTotalField(depositInputValue, 'deposit-total');
        updateBalance('balance-total',true,depositInputValue);
        document.getElementById('deposit-text').innerText=" ";
        }
        else{
                document.getElementById('deposit-text').innerText="wrong input "
        }
});


// withdraw button handle;
document.getElementById('withdraw-btn').addEventListener('click',function(){
        const withdrawInputValue=getInputValue('withdraw-amount')
        const currentBalance=getCurrent('balance-total');
        if(currentBalance>0 && currentBalance>withdrawInputValue ){
                updateTotalField(withdrawInputValue, 'withdraw-total');
                updateBalance('balance-total',false,withdrawInputValue);
                document.getElementById('balance-text').innerText=" ";
                document.getElementById('withdraw-text').innerText=" ";
        }
        
        else{
                document.getElementById('balance-text').innerText="insufficent balance"
                document.getElementById('withdraw-text').innerText="not enough balance for withdraw"
        }
})