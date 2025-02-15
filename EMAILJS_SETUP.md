### EmailJS Integration

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
<br/>
VITE_EMAILJS_TEMPLATE_ID: The Template ID you wish to use for sending emails.
<br/>
VITE_EMAILJS_PUBLIC_KEY: Your public key provided by EmailJS.

Save the .env file and ensure it’s included in your .gitignore to keep your credentials secure.
