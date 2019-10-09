import { NavLink } from 'react-router-dom'
import React from 'react'; 

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p>
            <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
        </p>
        <p>
            <NavLink to="/create" activeClassName="is-active">Crete expense</NavLink> 
        </p>
        <p>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </p>
    </header>
)

export default Header