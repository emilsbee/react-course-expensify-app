import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'; 
import Header from './../components/Header'
import AddExpense from './../components/AddExpense'
import NotFound from './../components/NotFound'
import Help from './../components/Help'
import EditExpense from './../components/EditExpense'
import ExpenseDashboard from './../components/ExpenseDashboard'



const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header></Header>
        <Switch>
            <Route path="/" component={ExpenseDashboard} exact={true}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit/:id" component={EditExpense}/>
            <Route path="/help" component={Help}/>   
            <Route component={NotFound}/> 
        </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter

