// let tasks = [
//     {
//       id: 1,
//       FirstName: 'Linda',
//       LastName: 'Jones',
//       Email: 'linda@jones',
//       UserName: 'linda2256',
//       Birthday: '1998-12-01',
//       FavoritePlant: 'cactus',
//       completed: false
//     },
//     {
//       id: 2,
//       FirstName: 'Simon',
//       LastName: 'Fisher',
//       Email: 'simon@fisher',
//       UserName: 'simon50',
//       Birthday: '1998-12-01',
//       FavoritePlant: 'cactus',
//       completed: false
//     }
// ]
  
// function allTasks() {
// return tasks
// }
// exports.allTasks = allTasks

// function createTask(task) {
// task.id = tasks.length + 1 
// tasks.push(task) 
// return task
// }
// exports.createTask = createTask

// function deleteTask(taskId) {
// const taskIndex = tasks.findIndex(task => task.id === taskId)
// if (taskIndex !== -1) {
//     tasks.splice(taskIndex, 1)
// }
// return {id: taskId}
// }
// exports.deleteTask = deleteTask

// function updateTask(taskId, data) {
// if (data.completed !== undefined) { 
//     const task = tasks.find(task => task.id === taskId) 
//     task.completed = data.completed 
// }
// return {id: taskId, ...data}
// }
// exports.updateTask = updateTask
  