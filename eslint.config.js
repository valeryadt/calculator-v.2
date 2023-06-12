const reactRecommended = require('eslint-plugin-react/configs/recommended');

module.exports = [
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        ...reactRecommended,
        languageOptions: {
            globals: {
            },
        },
    },
];