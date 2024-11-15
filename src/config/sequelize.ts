import { Sequelize } from 'sequelize';
import config from './db';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env as keyof typeof config];

const sequelize = new Sequelize(dbConfig);

export default sequelize;
