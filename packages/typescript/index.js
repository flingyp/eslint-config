module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', '@flypeng/eslint-config-basic'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
