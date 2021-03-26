const express = require('express') 
const database = require('./mysqlDatabase')

const app = express() 
app.use('/', function(req, res, next) {
  //var allowedOrigins = ['http://localhost:3000', 'http://localhost:6006', "https://*"];
  var origin = req.headers.origin;
  //console.log(origin);
  /*if(allowedOrigins.indexOf(origin) > -1){
  }*/

  res.setHeader('Access-Control-Allow-Origin', origin || "*");
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

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
