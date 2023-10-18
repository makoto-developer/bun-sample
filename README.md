# bun-sample

## Get Starting

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## 動作確認

追加

```shell
$ curl http://localhost:3000/todos -XPOST -H "Content-Type: application/json" -d '{"todo": {"title": "buy sho-yu", "details": "go sumit store."}}'
{"title":"buy sho-yu","details":"go sumit store.","todo_id":"18b4302ecf3249"}
```

取得

```shell
$ curl http://localhost:3000/todos/18b4302ecf3249 
{"title":"buy sho-yu","details":"go sumit store."}
```

## References

- https://bun.sh/

