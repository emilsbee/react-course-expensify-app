import React from 'react'
import { shallow } from 'enzyme'
import { EditExpense } from '../../components/EditExpense'
import Expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper 

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpense 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={Expenses[1]}
        />)
})

test('should render EditExpense correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(Expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(Expenses[1].id, Expenses[1])
})

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: Expenses[1].id
    })
})