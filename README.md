[![CircleCI](https://circleci.com/gh/bmf-san/Rubel.svg?style=svg)](https://circleci.com/gh/bmf-san/Rubel)

# Rubel

Rubel - An Open Source CMS built with Laravel and React.

- [Rubel Demo](https://rubel.bmf-tech.com/)
- [Rubel Admin Demo](https://rubel-admin.bmf-tech.com/login)

  - `EMAIL: rubel@example.com / PASSWORD: rubel`

# Requirements

- Docker
- PHP7
- composer
- npm
- Node.js

# Get Started

## Installation

[Latest] `git clone git@github.com:bmf-san/Rubel.git rubel`

[Specified version] `git clone -branch 1.0.0 git@github.com:bmf-san/Rubel.git rubel`

## Setting for backend-app

```console
cd path/to/backend-app

composer install
npm install
npm run build

cp .env.example .env
```

## Setting for frontend-app

```console
cd path/to/frontend-app

npm install
npm run build
```

## Setting for Docker
```
./docker-compose build
./docker-compose up -d
docker rubel_php php /var/html/www/backend-app/artisan migrate
docker rubel_php php /var/html/www/backend-app/artisan db:seed
```

Add hosts settings to `/etc/hosts`.
```
127.0.0.1 rubel
127.0.0.1 admin.rubel
127.0.0.1 api.rubel
```

If you want to use vagrant, you can be able to use [bmf-san/vagrant-for-rubel](https://github.com/bmf-san/vagrant-for-rubel).

## Run tests
```
docker exec -it rubel_php /bin/sh
cd backend-app/
composer test
```

## URL
App | URL
------------- | -------------
Front | http://rubel/
API | http://api.rubel/
Adimin | http://admin.rubel/

## Artisan commands
Command | Detail
------------- | -------------
`make:repository {modelName : The name of the model}` | Create repository files.
`app:init` | Interactively initialize the application.

## Anything Else

- [Wiki - API Documentation](https://github.com/bmf-san/laravel-react-blog-boilerplate/wiki/API-Documentation)

## Contributing

We welcome your issue or pull request from everyone. Please check `ISSUE_TEMPLATE.md` and `PULL_REQUEST_TEMPLATE.md` to contribute.

If you want to find something to contibute, please check the [project](https://github.com/bmf-san/Rubel/projects/1).

## License

This project is licensed under the terms of the MIT license.

## Author

bmf - A Web Developer in Japan.

- [@bmf-san](https://twitter.com/bmf_san)
- [bmf-tech](http://bmf-tech.com/)
