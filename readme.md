# Serverless SWAPI

Manage planets and species in a starwars universe

## Install

    $ git clone https://github.com/jlucianolzz/serverless-swapi
    $ cd serverless-swapi
    $ npm install

## Running the app

configure the environment variables in the ./serverless/environment/development.yml file

    DB_USERNAME: ""
    DB_PASSWORD: ""
    DB_DATABASE: ""
    DB_HOST: ""
    SWAPI_URL: "https://swapi.py4e.com/api"

Next run the following command:

    $ npm start

## Test

configure the environment variables in the ./test/setEnv.js file

    DB_USERNAME: ""
    DB_PASSWORD: ""
    DB_DATABASE: ""
    DB_HOST: ""
    SWAPI_URL: "https://swapi.py4e.com/api"

Next run the following command:

    $ npm test

## Deploy the app

    $ npm run deploy

## Documentation Open Api 3.0

The documentation is available at:

- ./openapi.json
- https://app.swaggerhub.com/apis/jlucianolzz/serverless-swapi/1.0.0
