import { useDispatch } from "react-redux"
import { anecCreation } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notifReducer"


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnc = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(anecCreation(content))
        dispatch(setNotification(`new anecdote " ${content} " has been added`, 10))
    }

    return (
        <div>
            <h2>create new anecdote</h2>
            <form onSubmit={addAnc}>
                <input name="anecdote" />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default AnecdoteForm