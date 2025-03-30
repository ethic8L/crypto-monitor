import express from 'express';
import signupRoute from './routes/signup.js';
import loginRoute from './routes/login.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import {createAdminAccount} from './scripts/admin.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'JWT API',
      version: '1.0.0',
      description: 'API documentation for JWT Authentication',
    },
  },
  apis: ['./routes/*.js'], // path to route files
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));




const PORT = process.env.PORT || 5006;

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use('/user', signupRoute);
app.use('/auth', loginRoute);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

export default app;