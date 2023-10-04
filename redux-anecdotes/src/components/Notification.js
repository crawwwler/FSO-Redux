import { useSelector } from "react-redux"
const Notification = () => {
    const notif = useSelector(state => state.notif)
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
        marginBottom: 5
    }
    return (
        <div style={style}>
            {notif}
        </div>
    )
}

export default Notification