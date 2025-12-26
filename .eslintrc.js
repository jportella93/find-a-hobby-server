module.exports = {
  extends: 'airbnb-base',
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // This is a demo/portfolio server; logging is fine.
    'no-console': 'off',
    // Allow requiring conditionally (used to skip external services in tests).
    'global-require': 'off',
  },
  overrides: [
    {
      files: ['server/scripts/**/*.js'],
      rules: {
        // Seed scripts are allowed to be imperative.
        'no-restricted-syntax': 'off',
        'no-await-in-loop': 'off',
        'no-plusplus': 'off',
      },
    },
  ],
};
