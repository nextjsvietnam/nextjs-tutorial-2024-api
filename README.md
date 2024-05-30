# Strapi API

```sh
npm run develop
```

```sql
CREATE SCHEMA `nextjsvietnam_shop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
```

## Switch to mysql2

```sh
npm install mysql2 --save
```

> .env

```sh
# Database
DATABASE_CLIENT=mysql2
```

### Content Type

1. Collection Content Type

- Your data type supports multiple instances
- Examples: blog posts, company services, menu items

2. Single Content Type

- Your data type supports just a single instance
- Examples: Home Page, Company Info, global configs

### Relations

Examples: A product can belong to multiple categories/tags, but only have one author.

### Components

- DRY : don't repeat yourself

Examples: A SEO Component

### Dynamic Zones

- The component that includes dynamic data

### Plugins

```sh
npm install @ckeditor/strapi-plugin-ckeditor --save
npm install @strapi/plugin-documentation --save
```

- http://localhost:1337/documentation

```sh
docker-compose -p "nextshop" up -d
docker exec -it nextshop_mysql sh
mysqldump --user=root --password=123456 nextshop_mysql > "/var/dumps/nextshop_mysql_dump_$(date +%Y%m%d%H%M%S).sql"
mysql -u root -p 123456 nextshop_mysql < /var/dumps/nextshop_mysql_dump_20240528103452.sql
```

### Provider

1. Upload File

```sh
npm install @strapi/provider-upload-cloudinary --save
```

> ./config/plugins.ts

```ts
export default ({ env }) => ({
  // upload provider
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
```

> ./config/middlewares.ts

```ts
export default [
  // ...
  // security
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
```

2. Email with node-mailer

```sh
npm install @strapi/provider-email-nodemailer --save
```

```ts
// ./config/plugins.ts
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'localhost'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
        ignoreTLS: true,
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'hello@example.com',
        defaultReplyTo: 'hello@example.com',
      },
    },
  },
```
