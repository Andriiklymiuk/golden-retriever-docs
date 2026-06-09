---
sidebar_position: 4
title: send
---

# `golden send`

Fire a single request and print the response — no test scripts, no run report.

```bash
golden send <COLL> <REQ> [OPTIONS]
```

`<COLL>` is a collection's `info.name` or a file path; `<REQ>` is the request name.

```bash
golden send "My API" "Login" --env .env.local
```

| Flag | Description |
| --- | --- |
| `--env NAME\|PATH` | Select an environment (`.env`). |
| `--timeout MS` | Per-request timeout. |
| `--insecure` | Skip TLS verification. |
| `--collections PATH` | Add a discovery path (repeatable). |

Variables substitute as usual (`{{baseUrl}}`, `{{token}}`, dynamic `{{$timestamp}}`, …). To get a copy-pasteable curl instead of firing the request, use [`curl`](./curl.md).
