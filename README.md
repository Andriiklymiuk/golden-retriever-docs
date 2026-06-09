# Golden Retriever

<div style="display: flex; align-items: center; gap: 10px;">
   <img src="resources/icon.png" width="128" height="128" alt="Golden Retriever">
   <a href="https://www.producthunt.com/posts/golden-retriever?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-golden&#0045;retriever" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=946017&theme=dark&t=1742928095595" alt="Golden&#0032;Retriever - API&#0032;testing&#0032;in&#0032;VS&#0032;Code&#0058;&#0032;Git&#0032;sync&#0044;&#0032;local&#0044;&#0032;free | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
</div>

A Visual Studio Code extension that brings API collection management right into your editor. Think Postman, but with Git sync and workspace integration.

https://marketplace.visualstudio.com/items?itemName=andriiklymiuk.golden-retriever

<img src="resources/demo.gif" width="600" alt="Golden Retriever Demo">

## Features

🔄 **Git-Synced Collections**

- Store API collections directly in your repository under the `/collections` folder
- Version control your API collections alongside your code
- Share collections with your team through Git

🚀 **Request Management**

- Create, edit, and organize API requests
- Support for REST and GraphQL APIs
- Support for all HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Folder organization for better request management
- Environment variable support through `.env` files
- Local request history for easier request management

✨ **Rich Request Features**

- Query parameter builder
- Header management with bulk edit support
- Request body editor with REST and GraphQL support
- GraphQL query and variables editor
- Test script support
- cURL command generation

🧪 **Testing & Validation**

- Write and run tests for your API requests
- Modify request data (URL, headers, body, etc.) before sending in test pre request
- Run individual collections or all collections at once
- View detailed test results and response data

🏃 **Collection Runner**

- Real-time progress in output channel
- Iteration support
- Test reporting
- Stats visualization for multiple iterations

<img src="resources/demo-request.gif" width="600" alt="Golden Retriever Demo">

## Installation

1. Open Visual Studio Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Golden Retriever"
4. Click Install

## Getting Started

1. Create a `collections` folder in your workspace root

   ```bash
   mkdir collections
   ```

2. Create your first collection:

   - Click the Golden Retriever icon in the activity bar
   - Click the "Add Collection" button (+ icon)
   - Enter a name for your collection

3. Add requests:

   - Right-click on your collection
   - Select "Add Request"
   - Configure your request details

4. Run requests:
   - Click on any request to open it
   - Click "Send" to execute
   - View responses in the integrated response viewer

## Working with GraphQL

Golden Retriever provides dedicated support for GraphQL APIs:

1. Create a new request and select "GraphQL" from the body type dropdown
2. Use the specialized GraphQL editor with:
   - Query editor for your GraphQL operations
   - Variables editor for JSON variables
   - Automatic Content-Type header management

Example GraphQL query:

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      title
    }
  }
}
```

With variables:

```json
{
  "id": "123"
}
```

The extension will automatically:

- Set the method to POST
- Set the correct Content-Type header
- Format the request body according to GraphQL specifications

## Environment Variables

Golden Retriever supports environment variables through `.env` files:

1. Create a `.env` file in your workspace root
2. Add your variables:
   ```
   API_KEY=your-api-key
   BASE_URL=https://api.example.com
   ```
3. Use variables in requests with `{{VARIABLE_NAME}}` syntax:

   ```
   ## api request
   {{BASE_URL}}/users?key={{API_KEY}}

   ## graphql
   {{BASE_URL}}/graphql
   ```

## Working with Local-Only Collections

If you want to create collections that remain only on your local machine and aren't committed to your repository:

1. Create a `.tmp` folder inside your `collections` directory:

   ```bash
   mkdir -p collections/.tmp
   ```

2. Add this folder to your `.gitignore`:

   ```
   # Add to .gitignore
   collections/.tmp/
   ```

3. Use this folder for:
   - Quick test requests with hardcoded API keys
   - User-specific test collections
   - Experimental API exploration you don't want to share
   - Local development requests that shouldn't be pushed to the repository

The `.tmp` folder will appear in your collections sidebar locally, but won't be included in your Git history or pushed to remote repositories.

## Collection Structure

Collections are stored as JSON files in your `collections` folder:

```
📁 your-project
 ┣ 📁 collections
 ┃ ┣ 📄 users-api.json
 ┃ ┣ 📄 products-api.json
 ┃ ┣ 📄 rest-api.json
 ┃ ┣ 📄 graphql-api.json
 ┃ ┗ 📁 .tmp
 ┃   ┣ 📄 local-test.json
 ┃   ┗ 📄 dev-experiments.json
 ┗ 📄 .env
```

## Using the Collection Runner

- Right-click a collection or group in the sidebar
- Select "Run Collection"
- View progress in the output channel and stats in the results panel

## Example

You can open this [server example](https://github.com/Andriiklymiuk/golden-example) with collections folder to see how easy it is to use Golden with any repo of your choice.

## FAQ

**Q: Where are my collections stored?**  
A: Collections are stored as JSON files in the `collections` folder of your workspace. This allows them to be version controlled with your project.

**Q: Can I import Postman collections?**  
A: Yes! Golden Retriever uses Postman/Newman compatible collection format. Just copy your Postman collection JSON into a file in your `collections` folder.

**Q: Does it support both REST and GraphQL APIs?**  
A: Yes! The extension provides dedicated support for both REST and GraphQL APIs, with specialized editors for each type.

**Q: How do I switch between REST and GraphQL modes?**  
A: In the request editor, use the body type dropdown to switch between "Raw" (for REST) and "GraphQL" modes.

**Q: Can I use environment variables in GraphQL queries?**  
A: Yes! You can use environment variables in both the GraphQL URL and variables using the `{{VARIABLE_NAME}}` syntax.

**Q: Are my environment variables secure?**  
A: Environment variables are stored in your local `.env` file, which should be added to `.gitignore` to keep sensitive data secure. The extension supports masking sensitive data in the UI.

**Q: Can I run multiple requests at once?**  
A: Yes! Run an entire collection or group using the Collection Runner.

**Q: Does it support request chaining or response variables?**  
A: Yes! When running collection tests, use `pm.environment`. For example, set a variable with `pm.environment.set('userId', 'some_random_user_id')` in one test, then access it with `pm.environment.get('userId')` in another. Great for testing CRUD flows—just ensure requests are ordered correctly in the collection.

**Q: How do I change the collections folder location?**  
A: You can configure the collections path in VSCode settings:

1. Open vscode Settings
2. Search for "Golden Retriever"
3. Update the "Collections Path" setting

**Q: My request/collection is not updated, after extension update, why?**  
A: After each vscode golder retriever extension update you need to kinda close tab with opened request/collection and open again to see new changes. No need to close window, also tab reopening will suffice.

## Contributing

Found a bug or have a feature request? Please open an issue on our GitHub repository.

## License

This extension is released under the MIT License.

---

Great thanks to postman team introducing newman, it is used for tests compatibility.

---

## Documentation site

This repo also hosts the **Golden Retriever documentation site** (Docusaurus), published to GitHub Pages at
**https://andriiklymiuk.github.io/golden-retriever-docs/** — covering the VS Code extension, the [`golden` CLI](https://github.com/Andriiklymiuk/golden-cli), and the Claude Code plugin.

```bash
bun install     # install deps
bun start       # dev server → http://localhost:3000/golden-retriever-docs/
bun run build   # production build into ./build
```

Content lives under `docs/`; the homepage is `src/pages/index.tsx`. Pushes to `main` build and deploy
automatically via `.github/workflows/deploy.yml`.

**One-time setup:** repo **Settings → Pages → Source = GitHub Actions**.
