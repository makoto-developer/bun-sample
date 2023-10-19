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
$ curl http://localhost:65250/todos -XPOST -H "Content-Type: application/json" -d '{"todo": {"title": "buy sho-yu", "details": "go sumit store."}}'
{"title":"buy sho-yu","details":"go sumit store.","todo_id":"18b47ce00dd32"}
```

取得

```shell
$ curl http://localhost:65250/todos/18b47ce00dd32
{"title":"buy sho-yu","details":"go sumit store.","status":"Wip"}
```

## References

- https://bun.sh/


