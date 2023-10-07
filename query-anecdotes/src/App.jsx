import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getAll, updateAnc } from './services/anecdoteServer'
import { useSetNotif } from './Notifctx'

const App = () => {

    const queryClient = useQueryClient()
    const dispatch = useSetNotif()

    const invalidateQueryFunc = () => {
        //console.log('was here at some point ...')
        queryClient.invalidateQueries(['anecdotes'])
    }

    const updateMutation = useMutation({ mutationFn: updateAnc })

    const handleVote = (anecdote) => {
        const nuAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
        updateMutation.mutate(nuAnecdote, {
            onSuccess: () => {
                queryClient.invalidateQueries(['anecdotes'])
            }
        })
        dispatch({ type: 'VOTE', payload: `you vote for " ${nuAnecdote.content} "` })
        setTimeout(() => {
            dispatch({ type: 'CLEARED' })
        }, 5000);
    }

    const response = useQuery({
        queryKey: ['anecdotes'],
        queryFn: getAll
    })
    //console.log(JSON.parse(JSON.stringify(response)))

    if (!response.isSuccess) {
        return (
            <div>
                <h4>
                    anecdote service not available due to problems in server
                </h4>
            </div>
        )
    }

    const anecdotes = response.data

    return (
        <div>
            <h3>Anecdote app</h3>

            <Notification />
            <AnecdoteForm qcFunc={invalidateQueryFunc} />

            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
