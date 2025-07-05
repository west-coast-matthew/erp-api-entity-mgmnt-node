import express from 'express';
import helmet from 'helmet';
import router from '@/routes/index.route';
import {AppDataSource} from '@/config/database';

// todo [ERP-16]: enable security
//import securityMiddleware from './middleware/security.middleware';

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized and schema synced.');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

app.use(helmet());
app.use(express.json());
// todo [ERP-16]: enable security
//app.use(securityMiddleware);
app.use('/', router);

const port = process.env.PORT || 5176;


app.listen(port, () => {
  console.log(`API Server (entity mgmnt) is running on http://localhost:${port}`);
});
