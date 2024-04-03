# users-list-app

This is a mini app where you can see given users, filter them and do other necessary actions.

Project is created in Vue.js, using Vite and TypeScript.

Deployed here: https://user-list-app-gray.vercel.app/

Things I would implement if I had more time

- give more feedback to user, eg when selecting all users and using Delete, ask before, if they really want to delete all
- bulk edit for user, to be able to change selected user roles at once
- edit/delete in mobile, since currently it appears with hover then in mobile row should have an actions button to be able to modify the list
- functionality for "Connect users" button, clicking it opens a modal or sidebar to add new user
- add placeholder when user thumbail doesn't load
- testing add/edit/delete functionalities, eg does list update after editing an item

## Project Setup Locally

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
