import { createSlice } from "@reduxjs/toolkit"

const notifReducer = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setNotif(state, action) {
            return action.payload
        },
        voteNotif(state, action) {
            return action.payload
        }
    }
})

export const setNotification = (content, time) => {
    return dispatch => {
        dispatch(setNotif(content))
        setTimeout(() => {
            dispatch(setNotif(null))
        }, time * 1000);
    }
}

export const { setNotif, voteNotif } = notifReducer.actions
export default notifReducer.reducer