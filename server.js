const express = require('express') 
const database = require('./mysqlDatabase')

const app = express() 
app.use(express.json())

app.get('/api/tasks', (req, res) => {
  // 1
  database.allTasks((error, users) => {
    // 2
    if (error) {
      res.send({error})
      return
    }
    // 3
    res.send({users})
  })
})

// app.post('/api/tasks', (req, res) => {
//   const user = req.body
//   // 1
//   database.createTask(user, (error, userId) => {
    
//     // 2
//     if (error) {
//       res.send({error})
//       return
//     }

//     // 3
//     user.id = userId

//     // 4
//     res.send({user})
//   })
// })


app.delete('/api/tasks/:id', (req, res) => {
const taskId = parseInt(req.params.id)
const result = database.deleteTask(taskId)
res.send(result) 
})

app.patch('/api/tasks/:id', (req, res) => {
const taskId = parseInt(req.params.id) 
const data = req.body 
const result = database.updateTask(taskId, data)
res.send(result) 
})
  
  
  
app.listen(8080, () => {
  console.log("The server is listening on port 8080")
})
