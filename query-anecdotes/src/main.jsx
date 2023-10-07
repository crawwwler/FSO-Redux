import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationCtxProvider } from './Notifctx'


// THE REASON FOR THIS LOGGER IS FOR EX 6.24, I ENCOUNTERED A PROBLEM 
// WHERE THE HTTP BAD REQUEST RESPONDED BY SERVER WASN'T HANDLED BY
// onError FIELD OF ONMUTATION OBJECT. 
// I TRIED EVERYTHING BUT STILL WHEN ADDING A ANECDOTE WITH LESS THAN
// 5 CHARACTERS THERE IS A ERROR IN CONSOLE.
// EVEN THO THE FUNCTIONALITY OF APP AND NOTIFICATIONS ARE ALRIGHT 
// BUT THE ERROR IN CONSOLE IN THE MENTIONED SITUATION APPEARS

const queryClient = new QueryClient({
    logger: {
        error: (error) => {
            console.log(error.message)
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <NotificationCtxProvider>
            <App />
        </NotificationCtxProvider>
    </QueryClientProvider>
)