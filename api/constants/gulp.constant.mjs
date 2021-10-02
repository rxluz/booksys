export const PATHS = {
  JS: ["api/**/*.mjs", "api/!dist/**", "!node_modules/**", "api/!coverage/**"],
  STATIC: [
    "./package.json",
    "./.gitignore",
    "./.env",
    "./.npmrc",
    "./**/*.json",
    "./**/*.njk",
    "!dist/**",
    "!node_modules/**",
    "!coverage/**",
  ],
};

export const CLEAN_PATH = [
  "./api/.build/**",
  "./api/.build/.*",
  "./api/.build/coverage/**",
  "!.build",
  "!coverage",
];
