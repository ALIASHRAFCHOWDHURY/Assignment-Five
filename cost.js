document.getElementById('calculate').addEventListener('click', function(){
        const playerCostField = document.getElementById('player-cost');
        const playerCost = playerCostField.value;
        const totalCost = playerCost * 6;
        
        const playerExpenseField = document.getElementById('player-expense')
        const playerExpense = playerExpenseField.innerText

        playerExpenseField.innerText = totalCost;
})

document.getElementById('calculate-total').addEventListener('click', function(){
        const playerExpenseAmountField = document.getElementById('player-expense');
        const playerExpenseAmountString = playerExpenseAmountField.innerText;
        const playerExpenseAmount = parseInt(playerExpenseAmountString)

        const coachAmountField = document.getElementById('coach-fee');
        const coachAmountString = coachAmountField.value;
        const coachAmount = parseInt(coachAmountString)

        const managerAmountField = document.getElementById('manager-fee');
        const managerAmountString = managerAmountField.value;
        const managerAmount = parseInt(managerAmountString);

       
        const calculatetotal = playerExpenseAmount + coachAmount + managerAmount ;
        

        const totalCalculationField = document.getElementById('total-calculation');
        const totalCalculationString = totalCalculationField.innerText;
        const totalCalculation = parseInt(totalCalculationString)

        totalCalculationField.innerText = calculatetotal;
        
})