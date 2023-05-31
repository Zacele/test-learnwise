# A turborepo to use a chatapp and an admin panel

This is Khoa's project for LearnWise

## Using this example

Run the following command:

```sh
pmpn install

pmpn dev
```

## What's inside?

In this monorepo, I am using the tools such as:

- `react-hook-form`: Form management, quick, lightweight and versitale to use.
- `tanstack-query`: Manage server state and API for the app.
- `nextjs`: A SSR framework to build modern web application. In this example I'm choosing the `app` structure approach instead of the traditional `page` structure approach to be able to use the server side components.
- `taildwindcss`: A CSS utility framework to have a modern and nice looking app.
- `react`: A library for FE development of choice.

### Apps and Packages

- `admin`: a [Next.js](https://nextjs.org/) app represent for the admin panel, due to time contrainst I cannot finish it.
- `chatapp`: a [Next.js](https://nextjs.org/) app that the user can chat with an mock AI and having the response after 3 seconds.
- `ui`: a stub React component library shared by both `admin` and `chatapp` applications
- `utils`: a represent of utils functions that will be used in the apps.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Approach for this project

Due to the time constraint (5 hours) and also not a subjective of the test, I don't have enough time to implement and build a fully operate server with websocket and also an authentication system. All the chat will be gone after the user refresh the page. By using the `tanstack-query` I can mimic the way a chat app should work, by appending the message into the existing chat.
