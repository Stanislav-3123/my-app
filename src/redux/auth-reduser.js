// const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_ID = 'SET_USER_ID'
const SET_USER_EMAIL = 'SET_USER_EMAIL'
const SET_USER_LOGIN = 'SET_USER_LOGIN'

let initialState = {
    login: null,
    email: null,
    id: null,
    isAuth: false,
    isFetching: false
};

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        // case SET_USER_DATA:
        //     return {
        //         ...state, 
        //         ...action.data,
        //         isAuth: true
        //     }
        case SET_USER_ID:
            return {
                ...state, 
                id: action.id,
                isAuth: true
            }
        case SET_USER_EMAIL:
            return {
                ...state, 
                email: action.email,
            }
        case SET_USER_LOGIN:
            return {
                ...state, 
                login: action.login
            }
        default:
            return state;
    }
}
// export const setAuthUserData = (userId, email, login) => ({type:SET_USER_DATA, data: {userId, email, login}});
export const setAuthUserId = (id) => ({type:SET_USER_ID, id});
export const setAuthUserEmail = (email) => ({type:SET_USER_EMAIL, email});
export const setAuthUserLogin = (login) => ({type:SET_USER_LOGIN, login});

export default authReduser;