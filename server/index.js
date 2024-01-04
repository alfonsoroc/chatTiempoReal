import express from 'express'
import logger from 'morgan'

import { Server } from 'socket.io'
import { createServer } from 'node:http'

const port = process.env.PORT ?? 3000

const app = express()
const server = createServer(app)
const io = new Server(server, {
    connectionStateRecovery: {}
})

<<<<<<< HEAD
const db = createClient({
    url: "libsql://present-newton-destine-alfonsoroc.turso.io",
    authToken: process.env.DB_TOKEN
})

await db.execute(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT
    )
`)


=======
>>>>>>> parent of 77d2a0a (Merge pull request #5 from alfonsoroc/Desarrollo)

io.on('connection', (socket) => {
    console.log('a user has connected!')

    socket.on('disconnect', () => {
        console.log('an user has disconnected')
    })

<<<<<<< HEAD
    socket.on('chat message', async (msg) => {
        let result
        try {
            result = await db.execute({
                sql: 'INSERT INTO messages (content) VALUES (:msg)',
                args: { msg }
            })
        } catch (error) {
            console.error(error)
            return
        }


        io.emit('chat message', msg, result.lastInsertRowid.toString())
    })



=======
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg)
    })

>>>>>>> parent of 77d2a0a (Merge pull request #5 from alfonsoroc/Desarrollo)
})


app.use(logger('dev'))

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html')

})

server.listen(port, () => {
    console.log('server running om port' + port)
})

