import express from "express"
import cors from 'cors'
const app = express()
const port = 3030

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World ... again!!!')
})

app.listen(port, () => {
    console.log(`I'm needed to run on port:${port}`)
})