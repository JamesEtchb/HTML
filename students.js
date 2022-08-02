import express from 'express'
import cors from 'cors'
const app = express()
const port = 3030


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



app.get('/movies/:movieTitle', (req, res) => {
  const movieTitle = req.params.movieTitle
  console.log(`looking for movie ${movieTitle}`)
  const query = {title: {'$regex': movietitle, '$options': 'i'}}

  let output = '<html><body><ul><h3>'

  output = output + '<li><input type="checkbox">' + movieTitle + '</li>'
  
  output = output + '</h3></ul></body></html>'

  res.send(output)
})






app.listen(port, () => {
  console.log(`Running on port:${port}`)
})
