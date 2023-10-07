import { useMutation } from "@tanstack/react-query"
import { createAnc } from "../services/anecdoteServer"
import PropTypes from 'prop-types'
import { useSetNotif } from "../Notifctx"


const AnecdoteForm = ({ qcFunc }) => {

    const anecdoteMut = useMutation({ mutationFn: createAnc })
    const dispatch = useSetNotif()

    const onCreate = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        anecdoteMut.mutate({ content, votes: 0 }, {
            onSuccess: () => {
                qcFunc()
                dispatch({ type: 'NEW_ADDED', payload: `" ${content} " has been added` })
                setTimeout(() => {
                    dispatch({ type: 'CLEARED' })
                }, 5000)
            },
            onError: () => {
                dispatch({ type: 'ERROR', payload: 'Anecdote must be at least 5 characters!' })
                setTimeout(() => {
                    dispatch({ type: 'CLEARED' })
                }, 5000)
            }


        })
    }

    return (
        <div>
            <h3>create new</h3>
            <form onSubmit={onCreate}>
                <input name='anecdote' />
                <button type="submit">create</button>
            </form>
        </div>
    )
}

AnecdoteForm.propTypes = {
    qcFunc: PropTypes.func.isRequired
}

export default AnecdoteForm
