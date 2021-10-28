# Test Fuerza

## Technologies used

- Node.js
- TypeScript
- Knex
- Postgres
- arrogance
- Supertest

## Setting up the project

###### Data base

** At the root of the project, we have the knexfile.ts file where the access settings are
from our database, I used postgres to facilitate, passing the client and the
login credentials **

###### Example:
    development: {
        customer: 'pg',
        connection: {
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: 'test',
            database: 'fuerza',
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path.resolve (__ dirname, 'src', 'database', 'migrations'),
        },
        seeds: {
            directory: path.resolve (__ dirname, 'src', 'database', 'seeds'),
        },
    },

** Where we have **
> host: Host of your database
>
> port: the port your database is on
>
> user: User of your database
>
> password: your database password
>
> database: The name of the database

###### Installing Project Dependencies
** On your terminal, type the command: **
> npm install

** After all dependencies are installed, enter command **
> npx knex migrate:latest
>
> This command will create the tables in your database automatically, making
> migration through migration files located in ./src/database/knex_migrations

###### After all these steps, we will run our project

** With the command **
> npm run start:dev
>
> This command starts our local project

> npm run test
>
> Run our tests

###### Accessing the documentation route

> /apiDocs
>
> Our Swagger documentation
> 
###### Some images

![alt text](https://github.com/FelipeLelis/TestFuerza/blob/main/images/Swagger.png?raw=true)

![alt text](https://github.com/FelipeLelis/TestFuerza/blob/main/images/teste_delete_api_posts.png?raw=true)

![alt text](https://github.com/FelipeLelis/TestFuerza/blob/main/images/teste_get_api_post_one.png?raw=true)

![alt text](https://github.com/FelipeLelis/TestFuerza/blob/main/images/teste_get_api_posts_all.png?raw=true)

![alt text](https://github.com/FelipeLelis/TestFuerza/blob/main/images/teste_post_api_post.png?raw=true)

![alt text](https://github.com/FelipeLelis/TestFuerza/blob/main/images/teste_put_api_posts.png?raw=true)

![alt text](https://github.com/FelipeLelis/TestFuerza/blob/main/images/Tests.png?raw=true)