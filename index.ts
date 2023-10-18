import server from 'bunrest';

const app = server();
app.listen(3000, () => {
 console.log("Bun Server started on port 3000");
})

const todosMap: Map<Number, String> = new Map();

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

app.get('/todos/:id', (req, res) => {
 const todo_id = req.params?.id;
 const todo = todosMap.get(todo_id);
 if (todo) {
  res.status(200).json(todo);
 } else {
  res.status(404).json({error: "Todo not found"});
 }
})

app.put('/todos/:id', (req, res) => {
 const todo_id = req.params?.id;
 const todo = todosMap.get(todo_id);
 if (typeof req.body==='object' && todo) {
  const todo: any = req.body.todo;
  todosMap.set(todo_id, todo);
  res.status(200).json(todo);
 } else {
  res.status(404).json({error: "Todo not found"});
 }
})

app.delete('/todos/:id', (req, res) => {
 const todo_id = req.params?.id;
 const todo = todosMap.get(todo_id);
 if (todo) {
  todosMap.delete(todo_id);
  res.status(204).send('deleted');
 } else {
  res.status(404).json({error: "Todo not found"});
 }
})
