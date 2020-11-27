"use strict";

module.exports = {
  meta: {
    docs: {
      description: "Limit sessionStorage usage to specific files",
      category: "Best Practices",
      recommended: false,
    },
    fixable: null,
    schema: [
        {
            type: "array",
            items: {
                type: "string"
            }
        },
        {
            type: "string"
        }
    ],
  },

  create: function (context) {
    const filename = context.getFilename();
    const files = context.options[0];
    const message = context.options[1];

    const isFileAllowed = files.indexOf(filename) >-1;
    
    return {
      ExpressionStatement(node) {
        if (
            !isFileAllowed &&
            node.expression.type === "CallExpression" &&
            node.expression.callee.object.name === "sessionStorage"
        ) {
          context.report({
            node,
            message
          });
        }
      },
    };
  },
};
