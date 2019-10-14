export default (expenses) => {
    if (expenses.length === 0) {
        return 0
    } else {
        const expenseArr = expenses.length === 1 ? expenses[0].amount : expenses.map(expense => expense.amount)
        const total = expenses.length === 1 ? expenses[0].amount : expenseArr.reduce((accumulator, currentValue) => accumulator + currentValue)
        return total

    }
}

