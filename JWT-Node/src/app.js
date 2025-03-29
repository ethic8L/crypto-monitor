import express from 'express';
import signupRoute from './routes/signup.js';
import loginRoute from './routes/login.js';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
import {createAdminAccount} from './scripts/admin.js';

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5006;

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use('/user', signupRoute);
app.use('/auth', loginRoute);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});