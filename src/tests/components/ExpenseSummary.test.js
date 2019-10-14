import React from 'react'
import { shallow } from 'enzyme'
import {ExpenseSummary}  from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'
import {filters} from '../fixtures/filters'

test('should render expense summary with 1 expense correctly', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[1]]} filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense summary with 0, 2 or more expenses correctly', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})