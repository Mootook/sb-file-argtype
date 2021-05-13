# sb-file-argtype


## Project Setup

```
yarn install

yarn storybook
```


### Steps to Reproduce


- Run storybook server (`yarn storybook`)
- Navigate to button story
- Open browser dev console.
- Notice 'file' control in the controls tab.
- Uplload any accepted file.
- In the watcher, notice, the file cannot be captured.
- However, you can log the file as a property of args.

The use case here is for a component that determines internal logic based on an uploaded file.
The watcher can fetch and convert the localized url object into a blob but this is not currently possible with 
the inability to watch for an uploaded file.

