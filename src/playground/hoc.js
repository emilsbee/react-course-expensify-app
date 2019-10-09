//  Higher Order Componenet (HOC) - A component (HOC) that renders another component 
// Reuse code
// Render hijacking 
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Infographic = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? ( 
            <WrappedComponent {...props}/> 
            ) : ( 
            <p>Please login into your account to view the details!</p> )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Infographic)
const AuthInfo = requireAuthentication(Infographic)

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the detail"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the detail"/>, document.getElementById('app'))