import authReducer from '../../reducers/auth'

const authReducerDefaultState = {}

test('should set uid for login', () => {
    const uid = 'jasnfn42ibhj3buufiowe'
    const action = {
        type: 'LOGIN',
        uid 
    }
    const state = authReducer(authReducerDefaultState, action)
    expect(state.uid).toEqual(action.uid)
})

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'anything'}, action)
    expect(state).toEqual({})
})