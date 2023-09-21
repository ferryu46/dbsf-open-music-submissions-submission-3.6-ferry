const dotenv = require('dotenv');

dotenv.config();

const config = {
  mailer: {
    smtpHost : process.env.MAIL_HOST,
    smtpPort : Number(process.env.MAIL_PORT),
    smtpUser : process.env.MAIL_ADDRESS,
    smtpPass : process.env.MAIL_PASSWORD,
  },
  rabbitmq: {
    url: process.env.RABBITMQ_SERVER,
  },
  postgres: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  },
}

module.exports = config;
