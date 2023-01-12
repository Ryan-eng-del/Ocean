module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  },
};
