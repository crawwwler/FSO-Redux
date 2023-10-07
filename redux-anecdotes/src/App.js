import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initialData } from './reducers/anecdoteReducer'

const App = () => {
    const stateOfNoti = useSelector(state => state.notif)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialData())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            <h2>Anecdotes</h2>
            {stateOfNoti !== null && <Notification />}
            <Filter />
            <AnecdoteList />
            <AnecdoteForm />
        </div>
    )
}
export default App