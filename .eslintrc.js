module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "globals": {
        "__dirname": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "brace-style": [
            "error",
            "1tbs",
            { "allowSingleLine": true }
        ],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console":0,
        "no-var":"error",
        "keyword-spacing": "error",
        "space-before-blocks": "error",
        "arrow-spacing": "error"
    }
};
