// eslint-disable-next-line no-undef
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const mw = jsonServer.defaults()
const PORT = 3001

server.use(mw)
server.use(jsonServer.bodyParser)

server.use((request, response, next) => {
    if (request.method === 'POST' && (!request.body || request.body.content.length < 5)) {
        response.status(400).json({ error: 'Anecdotes must be at least 5 character!' })
    } else {
        next()
    }
})


server.use(router)

server.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})
