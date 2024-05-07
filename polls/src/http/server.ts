import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { createpoll } from './routes/create-poll'
import { getpoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import websocket from '@fastify/websocket'
import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(cookie, {
    secret: "cnb_vf_cvbdxf",
    hook: "onRequest",
})

app.register(websocket)

app.register(voteOnPoll),
app.register(createpoll),
app.register(getpoll),

app.register(pollResults)

app.listen({port: 3333}).then(() => {
    console.log('Http Server Running!')
})
