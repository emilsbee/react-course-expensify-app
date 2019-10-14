import React from 'react'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import numeral from 'numeral'


export const ExpenseSummary = ({ expenses, filters }) => {
    const visibleExpenses = selectExpenses(expenses, filters)
    const totalExpenses = expensesTotal(visibleExpenses)

    return (
        <div>
        {visibleExpenses.length === 1 ? 
        <p>Viewing {visibleExpenses.length} expense totalling {numeral(totalExpenses / 100).format('$0,0.00')}</p>
        :
        <p>Viewing {visibleExpenses.length} expenses totalling {numeral(totalExpenses / 100).format('$0,0.00')} </p>
        }
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseSummary)
