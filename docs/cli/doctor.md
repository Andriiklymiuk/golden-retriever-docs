---
sidebar_position: 9
title: doctor
---

# `golden doctor`

Health-check the workspace and its collections — and optionally fix what it can.

```bash
golden doctor [--fix]
```

```bash
golden doctor          # report problems
golden doctor --fix    # also seed collections/ if it's missing
```

| Flag | Description |
| --- | --- |
| `--fix` | Auto-fix what it can — e.g. seed `collections/` when absent. |

Run it first when a `run` behaves unexpectedly: it surfaces missing folders, unreadable collections, and other workspace issues before you debug the requests themselves.
