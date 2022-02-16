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