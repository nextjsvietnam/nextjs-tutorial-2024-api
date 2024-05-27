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

### Plugins

```sh
npm install @ckeditor/strapi-plugin-ckeditor --save
npm install @strapi/plugin-documentation --save
```

- http://localhost:1337/documentation
