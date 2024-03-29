import { NavLink } from 'react-router-dom'
import React from 'react'; 
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <p>
            <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        </p>
        <p>
            <NavLink to="/create" activeClassName="is-active">Crete expense</NavLink> 
        </p>
        <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)