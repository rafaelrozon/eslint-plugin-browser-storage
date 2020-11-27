# eslint-plugin-browser-storage

Restricts the use of browser storage to certain files

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
        "browser-storage/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





