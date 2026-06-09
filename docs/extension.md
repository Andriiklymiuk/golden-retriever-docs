---
sidebar_position: 4
title: VS Code extension
---

# Golden Retriever — VS Code extension

A Postman-style API client built right into your editor, with Git sync and workspace integration.

> **Install:** open VS Code → Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`) → search **Golden Retriever** → Install.
> Or get it on the [**Visual Studio Marketplace**](https://marketplace.visualstudio.com/items?itemName=andriiklymiuk.golden-retriever).

The extension reads and writes the **same `collections/` files** as the [`golden` CLI](./cli/install.md) — edit a request in the editor, run it in CI. No export step.

![Golden Retriever in VS Code](/img/demo.gif)

## Features

**🔄 Git-synced collections**
- Store API collections in your repo under `/collections`, version-controlled with your code.
- Share collections with your team through Git.

**🚀 Request management**
- Create, edit, and organize REST and GraphQL requests.
- All HTTP methods (GET, POST, PUT, PATCH, DELETE).
- Folder organization, `.env` environment variables, and local request history.

**✨ Rich request features**
- Query-parameter builder, header management with bulk edit.
- Request body editor for REST and GraphQL (dedicated query + variables editors).
- Test scripts and cURL command generation.

**🧪 Testing & validation**
- Write and run tests for requests; modify request data in a pre-request script.
- Run a single collection or all of them at once; view detailed results and response data.

**🏃 Collection runner**
- Real-time progress in the output channel, iteration support, test reporting, and stats across iterations.

## Getting started

1. Create a `collections` folder in your workspace root:
   ```bash
   mkdir collections
   ```
2. Click the Golden Retriever icon in the activity bar → **Add Collection** (`+`) and name it.
3. Right-click the collection → **Add Request**, configure it, and click **Send**.

## Working with GraphQL

Create a request and select **GraphQL** as the body type to get a dedicated query editor, a JSON variables editor, and automatic `Content-Type` handling:

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}
```

Environment variables work in both the URL and variables via `{{VARIABLE_NAME}}`.

![Editing and sending a request](/img/demo-request.gif)

## FAQ

**Does it support both REST and GraphQL?** Yes — with specialized editors for each. Switch via the body-type dropdown.

**Are my environment variables secure?** They're stored in your local `.env` file (add it to `.gitignore`). The UI can mask sensitive values.

**Can I run many requests at once?** Yes — run a whole collection or group with the Collection Runner.

**Request chaining / response variables?** Use `pm.environment.set('userId', …)` in one test and `pm.environment.get('userId')` in another — just order the requests correctly.

**My request/collection didn't update after an extension update.** Close the open request/collection tab and reopen it to pick up the new version (no window reload needed).

## Pairs with the CLI

The CLI runs the exact collections you build here:

```bash
golden run collections/ --reporter junit --output results.xml
```

See [Using it in CI](./ci.md) and the [CLI commands](./cli/install.md).
