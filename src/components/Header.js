import { NavLink } from 'react-router-dom'
import React from 'react'; 
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
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
        <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)