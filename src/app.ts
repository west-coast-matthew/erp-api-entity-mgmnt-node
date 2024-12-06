console.log(`Boilerplate!!: app`);
	
import express from 'express';
import securityMiddleware from './middleware/security.middleware';
import router from './routes/index.route';


import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'erp',
  username: 'api',
  password: 'sql',
});

const app = express();
const port = 3002;

app.use(express.json());
app.use(securityMiddleware);
app.use('/', router);

/*
app.get('/', (req, res) => {
  res.send(JSON.stringify({message: 'Hola (ERP Mgmnt API)...'}));
});
*/

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});