---
sidebar_position: 1
slug: /intro
title: Getting started
---

# Golden Retriever 🦮

**REST & GraphQL collections that live in your repo — edited in your editor, run from the terminal, gated in CI, and driven by AI agents.**

Golden Retriever is one collection format with three surfaces:

| Surface | What it is | Where it runs |
| --- | --- | --- |
| **[VS Code extension](./extension.md)** | A Postman-style API client built into your editor — REST + GraphQL, git-synced collections, a runner, tests. | VS Code |
| **[`golden` CLI](./cli/install.md)** | A single static binary that runs the same collections — in CI, in a TUI, or non-interactively. Alias: `gr`. | Terminal / CI |
| **[Claude Code plugin](./claude-plugin.md)** | Five skills that teach an AI agent to scaffold, run, test, send, and import collections. | Claude Code |

They all read and write the **same** Postman v2.1 JSON under `collections/`, committed to git next to your code — no export, no second source of truth.

## Install

### The CLI

```bash
# Homebrew (macOS + Linux)
brew install andriiklymiuk/homebrew-tools/golden

# shell installer (macOS + Linux)
curl --proto '=https' --tlsv1.2 -LsSf \
  https://github.com/Andriiklymiuk/golden-cli/releases/latest/download/golden-cli-installer.sh | sh

# Windows (PowerShell)
irm https://github.com/Andriiklymiuk/golden-cli/releases/latest/download/golden-cli-installer.ps1 | iex

# from source (Rust 1.82+)
cargo install --git https://github.com/Andriiklymiuk/golden-cli golden-cli
```

See [CLI → Install](./cli/install.md) for details and `golden upgrade`.

### The VS Code extension

1. Open VS Code → Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for **Golden Retriever**
3. Click **Install** — or get it on the [Marketplace](https://marketplace.visualstudio.com/items?itemName=andriiklymiuk.golden-retriever).

### The Claude Code plugin

```text
/plugin marketplace add Andriiklymiuk/golden-cli
/plugin install golden@golden
```

## Quick start

```bash
golden init                 # seed a sample collection under collections/
golden run collections/     # run everything; exit 0=pass 1=fail 2=error
golden doctor               # check the workspace + collections are healthy
golden                      # no args → interactive TUI
```

Open the same `collections/` folder in VS Code with the extension installed and you'll see those collections in the activity bar — edit a request there, run it again in the terminal.

## Where next

- **[CLI commands](./cli/install.md)** — every command and flag.
- **[Collections & environments](./collections.md)** — the file format, `.env` vars, and `pm.*` test scripts.
- **[Using it in CI](./ci.md)** — reporters and the exit-code contract.
- **[Drive it with an AI agent](./claude-plugin.md)** — the Claude Code plugin and its skills.
