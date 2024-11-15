import { Dialect } from 'sequelize';

const config = {
  development: {
    storage: 'db.sqlite',
    dialect: 'sqlite' as Dialect,
    logging: console.log, // Enable SQL logging for development
  },
  production: {
    storage: 'db.sqlite',
    dialect: 'sqlite' as Dialect,
    logging: false,
  },
  test: {
    storage: ':memory:',
    dialect: 'sqlite' as Dialect,
    logging: false,
  },
};

export default config;
