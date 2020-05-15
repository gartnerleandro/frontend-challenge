module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "jest": true,
    },
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "airbnb"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "arrow-parens": ["error", "always"],
        "jsx-a11y/label-has-associated-control": [ "error", {
            "controlComponents": ["Input", "Selector"],
        }],
    }
};