// const
const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// function 
// Fetch api 利率和顯示在UI 
function calculate (){
    const currency1 = currencyOne.value;
    const currency2 = currencyTwo.value;
    
   
    // FETCH API
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
        .then((response) => response.json())
        .then((data) => {
            const relativeRate = data.rates[currency2];

            rate.innerText = `1 ${currency1} = ${relativeRate} ${currency2}`;
    
            amountTwo.value = (amountOne.value * relativeRate).toFixed(2);
        })

}


// eventlistner
currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);



swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
  });


// 初始化
calculate ();