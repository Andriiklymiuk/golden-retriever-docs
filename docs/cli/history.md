---
sidebar_position: 8
title: history
---

# `golden history`

Manage the persisted request history (stored at `.golden/history.jsonl`).

```bash
golden history <SUBCOMMAND>
```

| Subcommand | Description |
| --- | --- |
| `list` | Show recorded requests. |
| `replay N` | Re-run history entry number `N`. |
| `on` | Enable history recording. |
| `off` | Disable history recording. |
| `clear` | Delete the recorded history. |

```bash
golden history list
golden history replay 3
golden history off       # stop recording
golden history clear     # wipe it
```

History pairs with the [VS Code extension](../extension.md)'s local request history — both work off the same workspace.
