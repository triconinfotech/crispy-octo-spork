module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb-typescript",
        "prettier",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module",
        "project": ["tsconfig.json"]
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "import",
        "prettier"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",// we are using React 17. React doesn't need to be in scope.
        "func-names": "off",

        //here we can change any rule "off/error/warn"
        "prettier/prettier": "error", // or warn

        // this is needed for prettier to work
        //example rules
        "no-unused-vars": "warn" // default in airbnb is error
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
