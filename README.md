# Webapp Boilerplate

# Client

Because the client uses shadcn/ui for the UI elements, please refer to the [shadcn docs](https://ui.shadcn.com/docs) for a list of all available elements. You can add components like so:

```
npx shadcn-ui@latest add <some-component>
```

where `<some-component>` is replaced by the component name you'd like to add to the project

## Recommended plugins

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following to your `settings.json`:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": "explicit"
},
```

2. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

In settings, check the box on `Editor: Format on save` and set `Editor: Default formatter` to Prettier.
