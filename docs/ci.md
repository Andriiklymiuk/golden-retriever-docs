---
sidebar_position: 6
title: Using it in CI
---

# Using it in CI

`golden run` is built to gate a build: it runs your collections, runs the `pm.*` test scripts, and exits with a code your pipeline can branch on. Reporters write machine-readable artifacts.

## The exit-code contract

| Exit | Meaning |
| --- | --- |
| `0` | All requests and assertions passed. |
| `1` | An assertion failed. |
| `2` | Network/exec error, or a bad path/collection/request name. |
| `>2` | Crash. |

A typo'd collection or request name is `2` — it **fails the build**, it does not silently pass.

:::warning
A `--filter` that matches nothing runs 0 requests and still exits `0`. If "something must run", assert on `.totals.requests` from the JSON reporter.
:::

## Reporters

`--reporter` is repeatable; `--output FILE` is written even when the run fails.

```bash
golden run collections/ --reporter junit --output results.xml     # JUnit XML for CI test tabs
golden run collections/ --reporter json  --output run.json        # machine-readable
golden run collections/ --reporter tap                            # TAP to stdout
golden run collections/ --reporter pretty                         # default, human-readable
```

## GitHub Actions

```yaml
name: API tests
on: [push, pull_request]

jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install golden
        run: |
          curl --proto '=https' --tlsv1.2 -LsSf \
            https://github.com/Andriiklymiuk/golden-cli/releases/latest/download/golden-cli-installer.sh | sh
      - name: Run collections
        run: golden run collections/ --env .env.ci --reporter junit --output results.xml --timeout 15000
```

Static musl Linux binaries mean there's nothing to install at runtime beyond the binary itself. The same line works on macOS runners; on Windows use the `.ps1` installer.

## Handy run flags

| Flag | Purpose |
| --- | --- |
| `--env NAME\|PATH` | Select an environment (`.env`). |
| `--filter GLOB` | Only matching requests/folders (e.g. `'Auth/*'`). |
| `--iterations N` | Repeat the run N times. |
| `--data FILE` | Data-driven: one iteration per JSON/CSV row. |
| `--bail` | Stop on the first failure. |
| `--timeout MS` | Per-request timeout. |
| `--insecure` | Skip TLS verification. |
| `--collections PATH` | Add a discovery path (repeatable). |

See [CLI → run](./cli/run.md) for the full list.
