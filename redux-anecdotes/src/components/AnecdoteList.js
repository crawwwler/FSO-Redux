import { useSelector, useDispatch } from "react-redux";
import { voteHandle } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notifReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        const stateToRender = [...state.anecdote] //  <= never mutate the state directly
        stateToRender.sort((a, b) => {
            return b.votes - a.votes
        })
        return stateToRender.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))

    })
    const dispatch = useDispatch()

    const voteAnec = (anec) => {
        const newAnec = { ...anec, votes: anec.votes + 1 }
        dispatch(voteHandle(newAnec))
        dispatch(setNotification(`you voted " ${newAnec.content}"`, 10))
    }

    const style = {
        marginBottom: 4
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id} style={style}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes} votes
                        <button onClick={() => voteAnec(anecdote)}>vote</button>
                    </div>
                </div>)}
        </div>
    )
}

export default AnecdoteList