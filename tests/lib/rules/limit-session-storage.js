"use strict";
const rule = require("../../../lib/rules/limit-session-storage");

const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("limit-session-storage", rule, {
  valid: [
    {
      code: `sessionStorage.set("item", "123")`,
      options: [["storageManager.js"], "Use storageManager"],
      filename: "storageManager.js",
      errors: [],
    },
  ],

  invalid: [
    // single file allowed
    {
      code: `sessionStorage.set("item", "123")`,
      options: [["storageManager.js"], "Use storageManager"],
      filename: "CartPage.tsx",
      errors: [
        {
          message: "Use storageManager",
          type: "ExpressionStatement",
        },
      ],
    },
    // multiple files allowed
    {
      code: `sessionStorage.set("item", "123")`,
      options: [["storageManager.js", "login.js"], "Use storageManager"],
      filename: "CartPage.tsx",
      errors: [
        {
          message: "Use storageManager",
          type: "ExpressionStatement",
        },
      ],
    },
  ],
});
