function getTasks(type, tasks) {
  return tasks.map((task) => task.type === type);
}

module.exports = { getTasks };
