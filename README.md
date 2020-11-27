# eslint-plugin-browser-storage

Restricts the use of browser storage to certain files.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-browser-storage`:

```
$ npm install eslint-plugin-browser-storage --save-dev
```


## Usage

Add `browser-storage` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "browser-storage"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "browser-storage/limit-session-storage": ["error", [["storageManager.js"], "Use StorageManager instead of directly accessing the sessionStorage"]]
    }
}
```

## Supported Rules

[Limit Session Storage](docs/rules/limit-session-storage.md)
