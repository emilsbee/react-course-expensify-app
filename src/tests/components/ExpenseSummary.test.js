import React from 'react'
import { shallow } from 'enzyme'
import {ExpenseSummary}  from '../../components/ExpenseSummary'


test('should render expense summary with 1 expense correctly', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={1000}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense summary with 0, 2 or more expenses correctly', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={3} expensesTotal={553500}/>)
    expect(wrapper).toMatchSnapshot()
})