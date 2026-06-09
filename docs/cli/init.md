---
sidebar_position: 7
title: init
---

# `golden init`

Create a `collections/` folder and seed it with a sample collection — your starting point.

```bash
golden init
```

After it runs:

```bash
golden run collections/     # run the sample
golden                      # open the TUI to explore it
```

Open the same folder in the [VS Code extension](../extension.md) and the sample shows up in the activity bar. If a workspace is missing `collections/`, [`doctor --fix`](./doctor.md) seeds it too.
