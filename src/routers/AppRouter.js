import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'; 
import { createBrowserHistory } from 'history'
import AddExpense from './../components/AddExpense'
import NotFound from './../components/NotFound'
import EditExpense from './../components/EditExpense'
import ExpenseDashboard from './../components/ExpenseDashboard'
import LoginPage from './../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={ExpenseDashboard}/>
            <PrivateRoute path="/create" component={AddExpense}/>
            <PrivateRoute path="/edit/:id" component={EditExpense}/>
            <Route component={NotFound}/> 
        </Switch>
        </div>
    </Router>
)

export default AppRouter

