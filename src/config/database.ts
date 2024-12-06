import { Sequelize } from 'sequelize';

const database = new Sequelize({
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'erp',
  username: 'api',
  password: 'sql',
});

export default database;