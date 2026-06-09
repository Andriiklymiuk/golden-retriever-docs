---
sidebar_position: 6
title: import
---

# `golden import`

Scaffold a collection from something you already have — a spec, a Postman export, a curl command, or a folder.

```bash
golden import <SOURCE> [OPTIONS]
```

Supported sources:

- **Postman** collection JSON
- **OpenAPI 3.x**
- **Swagger 2.0**
- **curl** command
- a **folder** of the above

```bash
golden import openapi.yaml --from openapi --name "Billing"
golden import postman_collection.json --from postman
golden import ./specs --from folder
```

| Flag | Description |
| --- | --- |
| `--from <kind>` | Source kind: `postman` / `openapi` / `swagger` / `curl` / `folder`. |
| `--name <NAME>` | Name for the resulting collection. |

The imported collection lands under `collections/` in Postman v2.1 format — immediately runnable with [`run`](./run.md) and editable in the [VS Code extension](../extension.md).
