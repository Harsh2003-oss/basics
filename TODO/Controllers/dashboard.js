const Todo = require('../model/todo');

function getBody(req, callback) {
  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    callback(JSON.parse(body));
  });
}

async function createTodo(req, res) {
  getBody(req, async (data) => {
    const todo = await Todo.create({
      title: data.title,
      completed: false
    });

    res.end(JSON.stringify(todo));
  });
}

async function updateTodo(req, res, id) {
  getBody(req, async (data) => {
    const todo = await Todo.findByIdAndUpdate(id, data, { new: true });
    res.end(JSON.stringify(todo));
  });
}

async function deleteTodo(req, res, id) {
  await Todo.findByIdAndDelete(id);
  res.end('Todo deleted');
}

module.exports = { createTodo, updateTodo, deleteTodo };
