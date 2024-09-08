# vue-portfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

EmailJS Integration
This project uses EmailJS to handle form submissions, allowing users to contact you directly through the portfolio. To set this up, follow these steps:

Create an .env file in the root of your project by copying the provided .env.example file:

```sh
cp .env.example .env
```

Fill in the following variables in your .env file with your EmailJS credentials:

```sh
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

VITE_EMAILJS_SERVICE_ID: Your EmailJS Service ID from your EmailJS account.
VITE_EMAILJS_TEMPLATE_ID: The Template ID you wish to use for sending emails.
VITE_EMAILJS_PUBLIC_KEY: Your public key provided by EmailJS.

Save the .env file and ensure it’s included in your .gitignore to keep your credentials secure.
