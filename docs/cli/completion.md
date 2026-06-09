---
sidebar_position: 11
title: completion
---

# `golden completion`

Generate shell completion scripts.

```bash
golden completion <SHELL>
```

Supported shells: `bash` · `zsh` · `fish` · `powershell` · `elvish`.

## Examples

```bash
# zsh — write to a completions dir on your $fpath
golden completion zsh > ~/.zsh/completions/_golden

# bash
golden completion bash > /usr/local/etc/bash_completion.d/golden

# fish
golden completion fish > ~/.config/fish/completions/golden.fish
```

```powershell
# PowerShell — add to your profile
golden completion powershell | Out-String | Invoke-Expression
```

Reload your shell afterward. Completions work for the `gr` alias too — generate them with `gr completion <shell>` if you prefer the short name.
