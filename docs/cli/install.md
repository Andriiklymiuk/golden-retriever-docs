---
sidebar_position: 1
title: Install
---

# Install the CLI

`golden` is a single static binary. It ships two identical executables: `golden` and the short alias `gr`.

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

## Verify

```bash
golden -h          # or: gr -h
golden run --help
```

## Targets

Prebuilt binaries (via cargo-dist):

- macOS — arm64 + x64
- Linux — arm64 + x64 (musl, static; rustls, no OpenSSL)
- Windows — x64

## Keep it current

```bash
golden upgrade     # self-updates via the method you installed with (brew / installer)
```

See [`upgrade`](./upgrade.md).
