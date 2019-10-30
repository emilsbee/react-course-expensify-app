import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { login, startLogin, logout, startLogout } from '../../actions/auth'

test('should setup login action object with provided uid', () => {
    const uid = 'bffy8fg7fif32fuyebwif'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should setup logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})