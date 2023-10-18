import server from 'bunrest';

const app = server();
app.listen(3000, () => {
 console.log("Bun Server started on port 3000");
})

app.post('/todos', (req, res) => {
 if (typeof req.body === 'object') {
  const todo: any = req.body.todo;
  const todo_id = todo.id;
  todosMap.set(todo_id, todo);
  res.status(201).json(todo);
 } else {
  res.status(400).json({error: "Invalid todo"});
 }
})

