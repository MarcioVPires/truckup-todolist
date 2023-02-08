function getTaskList() {
  const list = JSON.parse(localStorage.getItem("task-list"));
  return list ? list : { type: "todo", name: "no task" };
}

function setTaskList(newtasks) {
  const list = JSON.parse(localStorage.getItem("task-list"));
}

module.exports = { getTaskList, setTaskList };
