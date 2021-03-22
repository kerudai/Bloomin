const express = require('express') 
const database = require('./mysqlDatabase')

const app = express() 
app.use(express.json())

app.get('/api/users', (req, res) => {
  // 1
  database.allUsers((error, users) => {
    // 2
    if (error) {
      res.send({error})
      return
    }
    // 3
    res.send({users})
  })
})

app.post('/api/users', (req, res) => {
  const user = req.body
  // 1
  database.createUser(user, (error, userId) => {
    
    // 2
    if (error) {
      res.send({error})
      return
    }

    // 3
    user.id = userId

    // 4
    res.send({user})
  })
})


app.delete('/api/users/:id', (req, res) => {
const id = req.params.id
database.deleteUser(id, (error, result) => {
  if (error) {
    res.send({error})
    return
  } 
  res.send({result})  
})
})
// app.delete('/api/tasks/:id', (req, res) => {
// const taskId = parseInt(req.params.id)
// const result = database.deleteTask(taskId)
// res.send(result) 
// })

app.use(express.json())
app.patch('/api/users/:id', (req, res) => {
  const id = req.params.id
  const userData = req.body

  database.updateUser(id, userData, (error, result) => {
    if (error) {
      res.send({error})
      return
    } 
    res.send({result})  
  })
  // console.log(id, userData)
  // res.send(userData)  
})
// app.patch('/api/tasks/:id', (req, res) => {
// const taskId = parseInt(req.params.id) 
// const data = req.body 
// const result = database.updateTask(taskId, data)
// res.send(result) 
// })
  
  
  
app.listen(8080, () => {
  console.log("The server is listening on port 8080")
})
