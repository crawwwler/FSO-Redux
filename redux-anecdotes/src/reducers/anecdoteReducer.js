import { createSlice } from "@reduxjs/toolkit"
import server from '../services/anecdoteService'


const anecSlice = createSlice({
    name: 'anecdote',
    initialState: [],
    reducers: {
        createNote(state, action) {
            state.push(action.payload)
        },
        voteFunc(state, action) {
            /*const id = action.payload
            const before = state.find(anecdote => anecdote.id === id)
            const after = { ...before, votes: before.votes + 1 }
            return state.map(anecdote => anecdote.id !== id ? anecdote : after)*/
            return state.map(anecdote => anecdote.id !== action.payload.id ? anecdote : action.payload)

        },

        setAnecdotes(state, action) {
            return action.payload
        }
    }
})


export const initialData = () => {
    return async dispatch => {
        const anecs = await server.getAll()
        dispatch(setAnecdotes(anecs))
    }
}

export const anecCreation = (content) => {
    return async dispatch => {
        const newAnec = await server.sendAnecdote(content)
        dispatch(createNote(newAnec))
    }
}

export const voteHandle = (obj) => {
    return async dispatch => {
        const updatedAnec = await server.updateAnecdote(obj)
        dispatch(voteFunc(updatedAnec))
    }
}

export const { createNote, voteFunc, setAnecdotes } = anecSlice.actions
export default anecSlice.reducer