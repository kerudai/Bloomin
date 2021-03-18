// 1
const mysql = require('mysql')

// 2
const dbDetails = {
  connectionLimit : 10,
  host     : process.env.MYSQL_HOST || 'localhost',
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

function createTask(Users, callback) {
    const query = `
      INSERT INTO users (FirstName, LastName, Email, Password, UserName, Birthday, FavoritePlant)
      VALUES ("${Users.FirstName}", ${Users.LastName}, ${Users.Email}, ${Users.Password}, ${Users.UserName}, ${Users.Birthday}, ${Users.FavoritePlant})
    `
    console.log(query)
    connection.query(query, null, function (error, result, fields) 
    {
        // 3
        callback(error, result.insertId)
      })
  }
  
exports.createTask = createTask

function deleteTask(taskId) {

}
exports.deleteTask = deleteTask

function completeTask(taskId, data) {

}
exports.completeTask = completeTask
