---
sidebar_position: 5
title: curl
---

# `golden curl`

Print the equivalent `curl` command for a request — handy for sharing or debugging outside Golden.

```bash
golden curl <COLL> <REQ> [OPTIONS]
```

```bash
golden curl "My API" "Login"                 # full curl, variables resolved
golden curl "My API" "Login" --mask          # redact secrets — safe to paste
```

| Flag | Description |
| --- | --- |
| `--mask` | Redact secret values (tokens, auth headers) so the output is safe to paste. |
| `--env NAME\|PATH` | Select an environment (`.env`). |
| `--collections PATH` | Add a discovery path (repeatable). |

`--mask` swaps sensitive values for placeholders while keeping the command shape intact — paste it in a ticket or chat without leaking credentials.
