// 1
const mysql = require('mysql')

// 2
const dbDetails = {
  connectionLimit : 10,
  host     : process.env.MYSQL_HOST || 'SG-Bloomin-3995-mysql-master.servers.mongodirector.com',
  user     : process.env.MYSQL_USERNAME || 'user',
  password : process.env.MYSQL_PASSWORD || 'jlgkvnI@kAgYfC0U',
  database : process.env.MYSQL_DATABASE || 'Bloomin'
}
const connection = mysql.createConnection(dbDetails)
//host for '%'? instead of 'localhost'?

// 3
function allTasks(callback) {
    const query = `
      SELECT * 
      FROM users
    `
    connection.query(query, null, (error, results, fields) => {
      callback(error, results)
    })
  }
exports.allTasks = allTasks

function createTask(user, callback) {
    const query = `
      INSERT INTO users (FirstName, LastName, Email, Password, UserName, Birthday, FavoritePlant)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    const params = [user.FirstName, user.LastName, user.Email, user.Password, user.UserName, user.Birthday, user.FavoritePlant]
    connection.query(query, params, function (error, result, fields) {
      callback(error, result)
    })
    console.log("post message", createTask);
  }  
exports.createTask = createTask

function deleteTask(taskId) {

}
exports.deleteTask = deleteTask

function completeTask(taskId, data) {

}
exports.completeTask = completeTask
