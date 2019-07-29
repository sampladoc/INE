
# INE

A table list of user data

## Installation

provided your system config supports npm and react
```bash
1. clone repo
2. cd into repo
3. npm install
4. npm start
```

## Noteworthy

### I did the application in one page
  1. Doesn't require the use of Redux or Flux
  2. Improves user experience by
    1. Keeping user on one page and reducing waiting times
    2. Saving browser resources by avoiding loading different pages
  3. Could be used as a component in itself.


### Where the data lives and how it moves across components
The data is accessed in users.js edition, deletion takes place like this
```bash
views/users.js -> components/table.js -> ReactTable -> components/formDialog.js -> views/users.js
```

Addition takes place like this
```bash
views/users.js -> components/formDialog.js -> views/users.js
```
