import { setFilter } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
    const dispatch = useDispatch()
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input name='filterBox' onChange={({ target }) => dispatch(setFilter(target.value))} />
        </div>
    )
}


export default Filter