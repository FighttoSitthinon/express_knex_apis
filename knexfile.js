// Update with your config settings.

require('dotenv/config');

//Development config
const conn = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};


//Production config
const conn_pd = {
  host: process.env.DB_HOST_PD,
  user: process.env.DB_USER_PD,
  password: process.env.DB_PASSWORD_PD,
  database: process.env.DB_NAME_PD
};

module.exports = {
  development: {
      client: process.env.DB_CLIENT_DEV,
      connection: conn,
      migrations:{
          directory: __dirname + 'db/migrations'
      },
      seeds:{
          directory: __dirname + 'db/seeds'
      }
  },
  production: {
      client: process.env.DB_CLIENT_PD,
      connection: conn_pd,
      migrations:{
          directory: __dirname + 'db/migrations'
      },
      seeds:{
          directory: __dirname + 'db/seeds/production'
      }
  },
}