---
sidebar_position: 5
title: Claude Code plugin
---

# Drive it with an AI agent

`golden` is non-interactive and speaks JSON, so an agent (or any script) can run it and branch on the result. A bundled [Claude Code](https://claude.com/claude-code) plugin teaches one to do exactly that.

## Install

```text
/plugin marketplace add Andriiklymiuk/golden-cli
/plugin install golden@golden
```

The plugin shells out to the `golden` binary, so [install the CLI](./cli/install.md) too.

## Skills

| Skill · command | Ask Claude… |
| --- | --- |
| `create` · `/golden-create` | *"scaffold collections for this stack"* · *"a status check per service"* |
| `run` · `/golden-run` | *"run the collections with JUnit output for CI"* |
| `test` · `/golden-test` | *"assert login returns 200 and save the token"* · *"why is this test failing?"* |
| `send` · `/golden-send` | *"give me a masked curl for the create-user request"* |
| `import` · `/golden-import` | *"import this OpenAPI spec as Billing API"* |

## Why it works for agents

- **Non-interactive** — every command runs headless.
- **`--reporter json`** — machine-readable output (see the shape below).
- **Branchable exit codes** — `0` passed · `1` assertion failed · `2` network/exec error or bad path/name · `>2` crash. A typo'd name is `2` (a hard failure), not a silent pass.
- **`--output` is always written** — even when the run fails.

### The JSON an agent parses

```jsonc
{
  "collections": [
    {
      "name": "Fake APIs Collection",
      "iterations": [
        {
          "index": 1,
          "requests": [
            {
              "name": "Get API Root",
              "method": "GET",
              "url": "https://swapi.info/api",
              "status": 200,
              "time_ms": 141,
              "assertions": [
                { "name": "Status code is 200", "passed": true, "error": null }
              ],
              "error": null
            }
          ]
        }
      ]
    }
  ],
  "totals": {
    "requests": 1,
    "failed_requests": 0,
    "assertions": 2,
    "failed_assertions": 0,
    "total_ms": 141
  }
}
```

Read `.totals.failed_assertions` (or branch on the exit code); drill into
`.collections[].iterations[].requests[].assertions[].error` for the exact failure.

:::tip Gotcha
A `--filter` that matches nothing runs **0** requests and still exits `0`. Check `.totals.requests` if you want to be sure something actually ran.
:::
