import server from 'bunrest';

const app = server();
app.listen(3000, () => {
 console.log("Bun Server started on port 3000");
})
