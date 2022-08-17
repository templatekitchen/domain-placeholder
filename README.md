# Domain name placeholder

This template repository contains a Vite set-up for a domain name placeholder.

It uses environment variables to configure the corresponding details. The following environment variables are required:

  - `VITE_SITE_TITLE`: The title of the website.
  - `VITE_DOMAIN_NAME`: The domain name of the placeholder.
  - `VITE_OWNER_NAME`: The owner of the domain name.

These environment variables can be found in the `.env.example` file, which you can rename to `.env`, or you can set them manually as part of the command line.

If you're using Vercel or another hosting service, you can usually set them via the online panel, making it very easy to reserve domain names.


## Usage (on a local machine)

  1. Clone this repository, obviously.
  2. Set the required environment variables in the `.env` file, or via the command line.
  3. Run `yarn`, or `npm install`
  4. Run `yarn build`, or `npm run build`
  5. Deploy the files in the `dist` directory to your hosting service.
    
     Pro tip: If you're using Linux, you can easily deploy the files by running `rsync -avz dist/ /var/www/my-domain-name/`.