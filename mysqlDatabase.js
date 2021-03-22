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
function allUsers(callback) {
    const query = `
      SELECT * 
      FROM Users
    `
    connection.query(query, null, (error, results, fields) => {
      callback(error, results)
    })
    console.log("get users", allUsers);
  }
exports.allUsers = allUsers

function createUser(user, callback) {
    const query = `
      INSERT INTO Users (FirstName, LastName, Email, Password, UserName, Birthday, FavoritePlant)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    const params = [user.FirstName, user.LastName, user.Email, user.Password, user.UserName, user.Birthday, user.FavoritePlant]
    connection.query(query, params, function (error, result, fields) {
      callback(error, result)
    })
    console.log("create an user", createUser);
  }  
exports.createUser = createUser

function deleteUser(userId, callback) {
  let query = `
  DELETE FROM Users WHERE id = ?
  `

  let params = [userId, callback]

  connection.query(query, params, (error, result) => {
    console.log(error, result)
    callback(error, result)
  })
  console.log("delete a user", deleteUser);
}
exports.deleteUser = deleteUser

function updateUser(id, data, callback) {
  let params = []
  let query = `
    UPDATE Users
    SET 
    `
  if (data.FirstName) {
    query += `FirstName = ?`
    params.push(data.FirstName)
  }
  if (data.LastName) {
    if (params.length > 0) {
      query += `,`
    }
    query += `LastName = ?`
    params.push(data.LastName)
  }
  query += `
    WHERE id = ?
  `
  console.log(query);
  // SET LastName = ?
  //   SET Email = ?
  //   SET Password = ?
  //   SET UserName = ?
  //   SET Birthday = ?
  //   SET FavoritePlant = ?
  params.push(id)

  connection.query(query, params, (error, result) => {
    console.log(error, result)
    callback(error, result)
  })
  console.log("update an user", updateUser);
}
exports.updateUser = updateUser
