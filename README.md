# Work Shirt

A comfortable, dependable, and well-worn color theme. Uses a limited palette, focused on semantic syntax highlighting, so each color serves a purpose.

# Development

Release a new version

```
pnpm version [patch|minor|major]
```

- creates a new commit with version tag
- Pushes to github (`postversion` script in `package.json`)
- Triggers github workflow that publishes to VS Code Marketplace (`.github/workfows/publish.yml`)
