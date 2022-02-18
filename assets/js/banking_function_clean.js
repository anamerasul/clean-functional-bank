console.log('conected')

function getInputValue(fieldId){
        const InputField=document.getElementById(fieldId);

        const valueInText=InputField.value;

        const value=parseFloat(valueInText);

        InputField.value='';

        if(value>=0){
                return value;     
        }
        else{

                return false;
        }

        

      

}
function getInnerTextvalue(fieldId){
        const fieldTag=document.getElementById(fieldId);
        const fieldValueInText=fieldTag.innerText;
        const value =parseFloat(fieldValueInText);

        return value;
}

function updateTotal(fieldId,amount){
// console.log(fieldId,amount);       
// const TotalTag=document.getElementById(fieldId);
// const previousTotalInText=TotalTag.innerText;

// const previousTotal=parseFloat(previousTotalInText);
const previousTotal=getInnerTextvalue(fieldId)

const newTotal=previousTotal+amount;
document.getElementById(fieldId).innerText=newTotal


}



function updateBalance(amount,isAdd){
        const balanceTag=document.getElementById('balance-total');

        // const balanceInText=balanceTag.innerText;
        // const previousBalance=parseFloat(balanceInText);
        // const previousBalance=getInnerTextvalue('balance-total')
        const previousBalance=getInnerTextvalue('balance-total')

       let newBalance;
        if( isAdd==true){
                newBalance=previousBalance+amount
        }

        else {
                newBalance=previousBalance-amount 
        }
        balanceTag.innerText=newBalance
}



document.getElementById('deposit-btn').addEventListener('click', function(e){
        // console.log('deposit-click')
        const amount=getInputValue('deposit-amount');

        if(amount>0){
                updateTotal('deposit-total',amount)

                updateBalance(amount,true)
        }

        console.log(amount)

       
})

// handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(e){
        // console.log('deposit-click')
        const amount=getInputValue('withdraw-amount');

        const balance=getInnerTextvalue('balance-total')

        console.log(amount)

        if (amount>0 && balance>=amount){
                updateTotal('withdraw-total',amount)
                updateBalance(amount,false)
        }

       
})