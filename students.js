import express from 'express'
import cors from 'cors'
const app = express()
const port = 3030


dkfjalkshflkashf 
app.use(cors())
app.use(express.json())

let students = ['bob', 'samantha', 'lily', 'grace', 'jim']

app.get('/', (req, res) => {
  let output = '<html><body><ul><h3>'
  //   output = output + 'Hello there html'
  for (let i = 0; i < students.length; i++) {
    output = output + '<li><input type="checkbox">' + students[i] + '</li>'
  }
  output = output + '</h3></ul></body></html>'

  res.send(output)
})

app.listen(port, () => {
  console.log(`Running on port:${port}`)
})
