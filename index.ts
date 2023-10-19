import server from 'bunrest';

const app = server();

const port = process.env.APP_PORT || 3000
app.listen(port, () => {
 console.log(`Bun Server started on port ${port}`);
})

function getUniqueStr(myStrong?: number): string {
 let strong = 1000;
 if (myStrong) strong = myStrong;
 return (
     new Date().getTime().toString(16) +
     Math.floor(strong * Math.random()).toString(16)
 );
}

type Status = 'Ready' |'Wip' |'DONE' |'Cancel'

type Todo = {
 id: number,
 title: string,
 details: string,
 status: Status,
}
const todosMap: Map<String, Todo> = new Map();

app.post('/todos', (req, res) => {
 if (typeof req.body === 'object') {
  const new_todo: Exclude<Todo, 'status'> = req.body.todo;
  const todo_id = getUniqueStr()
  todosMap.set(todo_id, {...new_todo, status: 'Wip'});
  res.status(201).json({...new_todo, todo_id});
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
