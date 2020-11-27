# Limit sessionStorage usage to specific files (limit-session-storage)
## Rule Details

Make sure that the browser sessionStorage is only accessed from a list of specific files.

The following examples assume this rule is setup as:
```
    //...
    "limit-session-storage", 
    [
        ["session_storage_manager.js"],
        "Use SessionStorageManager instead."
    ]
```

Examples of **incorrect** code for this rule:

```js

// filename: login.js
sessionStorage.setItem("key", "someData")
```

Examples of **correct** code for this rule:

```js
// filename: session_storage_manager.js
sessionStorage.setItem("key", "someData")
```

### Options

The rule takes an array which first element is an array of strings for the filenames that are allowed to access the sessionStorage.
The second element in the options array is a string for the error message.
For example:

```json
[
    ["session_storage_manager.js"],
    "Use SessionStorageManager instead."
]
```
Only in the session_storage_manager.js file the sessionStorage can be used. And if an error is reported by this rule, it will be "Use SessionStorageManager instead."

## When Not To Use It

When sessionStorage can be used anywhere.
