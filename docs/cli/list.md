---
sidebar_position: 3
title: list
---

# `golden list`

List the collections and requests that discovery finds, without running anything.

```bash
golden list [PATHS…] [OPTIONS]
```

```bash
golden list                  # discover collections/
golden list collections/     # explicit path
golden list --collections api/collections --collections web/collections
```

Use it to confirm what a path resolves to before a `run`, and to copy exact collection/request names for [`send`](./send.md) and [`curl`](./curl.md).

| Flag | Description |
| --- | --- |
| `--collections PATH` | Add a discovery path (repeatable). |

`GOLDEN_COLLECTIONS_PATHS` overrides discovery on any command.
