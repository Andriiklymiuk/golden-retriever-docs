---
sidebar_position: 2
title: run
---

# `golden run`

Run collections — fire the requests, execute the `pm.*` test scripts, and exit with a CI/agent-friendly code.

```bash
golden run [PATHS…] [OPTIONS]
```

`PATHS` are collection files or directories. With no path, discovery falls back to `collections/` (and `.golden/`, `.retriever/`).

```bash
golden run collections/                                 # run everything
golden run collections/auth.json collections/users.json # specific files
golden run                                              # discover collections/
```

## Options

| Flag | Description |
| --- | --- |
| `--env NAME\|PATH` | Select an environment (`.env` file). |
| `--iterations N` | Number of iterations. |
| `--bail` | Stop on the first failure. |
| `--reporter [pretty\|junit\|json\|tap]` | Output format (repeatable). |
| `--output FILE` | Write reporter output to a file (written even on failure). |
| `--filter GLOB` | Only matching requests/folders, e.g. `'Auth/*'`. |
| `--data FILE` | Data-driven runs — one iteration per JSON/CSV row. |
| `--timeout MS` | Per-request timeout. |
| `--insecure` | Skip TLS verification. |
| `--collections PATH` | Add a discovery path (repeatable). |

## Exit codes

`0` all passed · `1` an assertion failed · `2` network/exec error or bad path/name · `>2` crash.

:::warning
A `--filter` matching nothing runs 0 requests and still exits `0`. Check `.totals.requests` (JSON reporter) if you need to be sure something ran.
:::

## Recipes

```bash
golden run collections/ --env .env.staging                       # pick an environment
golden run collections/ --filter 'Auth/*'                        # only matching folders/requests
golden run collections/ --data users.csv                         # data-driven
golden run collections/ --reporter junit --output results.xml    # CI report
golden run collections/ --reporter json  --output run.json       # machine-readable for an agent
golden run --collections api/collections --collections web/collections   # many services at once
```

See [Using it in CI](../ci.md) for the full pipeline story.
