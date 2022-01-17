module.exports = {
  // type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsx --noEmit',

  // lint then format ts+js files
  '**/*(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // format md + json
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}
