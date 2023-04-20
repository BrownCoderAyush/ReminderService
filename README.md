# Welcome to Reminder Service 

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable


```
PORT=3003
DB_SYNC=true
EMAIL_PASS=ufdhclzbzvpzddtk
EMAIL_ID=ayushplayzsoft@gmail.com
EXCHANGE_NAME=AIRLINE_BOOKING
REMINDER_BINDING_KEY=REMINDER_SERVICE
MESSAGE_BROKER_URL='amqp://localhost'
```

- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "REMINDER_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```


- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute `npx sequelize db:migrate`








### Learn about exchange types  
<!-- https://medium.com/trendyol-tech/rabbitmq-exchange-types-d7e1f51ec825 -->