export const PATHS = {
  JS: ['**/*.mjs', '!dist/**', '!node_modules/**', '!coverage/**'],
  STATIC: [
    './package.json',
    './.gitignore',
    './.env',
    './.npmrc',
    './**/*.json',
    './**/*.njk',
    '!dist/**',
    '!node_modules/**',
    '!coverage/**',
  ],
}

export const CLEAN_PATH = [
  './.build/**',
  './.build/.*',
  './.build/coverage/**',
  '!.build',
  '!coverage',
]
