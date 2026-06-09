---
sidebar_position: 3
title: Collections & environments
---

# Collections & environments

Everything Golden Retriever runs is a **Postman v2.1 collection** stored in your repo. The extension, the CLI, and the Claude Code plugin all read and write the same files.

## Collections

- Collections are Postman v2.1 JSON under `collections/` (also discovered in `.golden/` and `.retriever/`).
- They live in **git, next to your code** — version-controlled, reviewable, shareable.
- `<COLL>` in any CLI command is a collection's `info.name` **or** a file path.

Discovery can be overridden on any command:

```bash
golden run --collections api/collections --collections web/collections   # many services at once
GOLDEN_COLLECTIONS_PATHS="api/collections:web/collections" golden list
```

## Environments

Environments are plain `.env` files, selected with `--env <name|path>`. Variables substitute into URLs, headers, and bodies with `{{name}}`:

```bash
golden run collections/ --env .env.staging
golden send "My API" "Login" --env .env.local
```

```bash
# .env.staging
baseUrl=https://staging.example.com
token=eyJhbGci...
```

```jsonc
// request URL
{{baseUrl}}/users/{{userId}}
```

### Postman dynamic variables

The usual dynamic vars are supported too — no definition needed:

`{{$guid}}` · `{{$timestamp}}` · `{{$randomEmail}}` · `{{$randomInt}}` · and friends.

## Test scripts

Requests can carry pre-request and test scripts that run in a `pm.*` / chai sandbox:

```js
// test script
pm.test('status is 200', () => {
  pm.response.to.have.status(200);
});

// chain a value to the next request
pm.environment.set('userId', pm.response.json().id);
```

Supported in the sandbox: assertions, `pm.environment.get/set` chaining, `pm.iterationData`, `pm.execution.setNextRequest()`, crypto, and `atob` / `btoa`. A conformance suite diffs `golden` against [newman](https://github.com/postmanlabs/newman) so behavior stays compatible.

## Data-driven runs

Feed a JSON or CSV file and Golden runs one iteration per row, exposing columns as `pm.iterationData`:

```bash
golden run collections/ --data users.csv
```

```csv
email,password
alice@example.com,hunter2
bob@example.com,sup3rsecret
```

## Importing existing specs

Already have an OpenAPI spec, a Postman export, or a folder of curl commands? Import them:

```bash
golden import openapi.yaml --from openapi --name "Billing"
```

See [CLI → import](./cli/import.md) for every supported source.
