import { configureStore } from "@reduxjs/toolkit";
import ancReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notifReducer from './reducers/notifReducer'



const store = configureStore({
    reducer: {
        anecdote: ancReducer,
        filter: filterReducer,
        notif: notifReducer
    }
})

export default store