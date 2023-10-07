import { useReducer, createContext, useContext } from "react"
import PropTypes from 'prop-types'

const notifReducer = (state, action) => {
    switch (action.type) {
        case 'NEW_ADDED':
            return action.payload
        case 'VOTE':
            return action.payload
        case 'ERROR':
            return action.payload
        case 'CLEARED':
            return null
        default:
            return state
    }
}

const Notifctx = createContext()

export const NotificationCtxProvider = (props) => {
    const [notif, notifDispatch] = useReducer(notifReducer, null)

    return (
        <Notifctx.Provider value={[notif, notifDispatch]}>
            {props.children}
        </Notifctx.Provider>
    )
}

export const useNotif = () => {
    const notifFunctionality = useContext(Notifctx)
    return notifFunctionality[0]
}

export const useSetNotif = () => {
    const notifFunctionality = useContext(Notifctx)
    return notifFunctionality[1]
}


NotificationCtxProvider.propTypes = {
    children: PropTypes.node
}

export default Notifctx