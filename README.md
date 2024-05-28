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

```sh
docker-compose -p "nextshop" up -d
docker exec -it nextshop_mysql sh
mysqldump --user=root --password=123456 nextshop_mysql > "/var/dumps/nextshop_mysql_dump_$(date +%Y%m%d%H%M%S).sql"
mysql -u root -p 123456 nextshop_mysql < /var/dumps/nextshop_mysql_dump_20240528103452.sql
```
