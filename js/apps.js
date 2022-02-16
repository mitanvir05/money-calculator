function calculate() {
    let foodExpences = document.getElementById('food-expenses');
    let rentExpences = document.getElementById('rent-expenses');
    let clothesExpences = document.getElementById('clothes-expenses');
    let totalExpensesAmount = document.getElementById('total-expenses');
    let incomeAmount = document.getElementById('income-amount');
    let balanceAmount = document.getElementById('balance-amount');
    //Expense Calculation
    let totalExpenses = Number(foodExpences.value) + Number(rentExpences.value) + Number(clothesExpences.value);
    totalExpensesAmount.innerText = totalExpenses;
    //Balance Calculation
    balanceAmount.innerText = incomeAmount.value - totalExpenses;
}

//Savings Calculation
function save() {
    let savePerchant = document.getElementById('save-perchant');
    let incomeAmount = document.getElementById('income-amount');
    let savingAmount = document.getElementById('saving-amount');
    let balanceAmount = document.getElementById('balance-amount');
    let remainingBalance = document.getElementById('remaining-balance');
    //Saving Ammount Calculation
    let savingAmountResult = ((incomeAmount.value) * (savePerchant.value)) / 100;
    savingAmount.innerText = savingAmountResult;
    //Remaining Balance Calculation

    var remainingBalanceResult = Number(balanceAmount.innerText) - Number(savingAmount.innerText);
    remainingBalance.innerText = remainingBalanceResult;


}