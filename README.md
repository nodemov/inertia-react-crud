# Tech Stack

- Laravel
- Inertia.js
- React
- Vite

## Features

- [x] Authorization
- [x] Post

## Coming Soon

- Support for multiple languages

## Installation

Clone the repo locally:

```sh
git clone https://github.com/nodemov/inertia-react-crud.git
cd inertia-react-crud
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
npm install
```

Build assets:

```sh
npm run dev
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.

```sh
touch database/database.sqlite
```

Run database migrations:

```sh
php artisan migrate
```

Run database seeder:

```sh
php artisan db:seed
```

Run artisan server:

```sh
php artisan serve
```
