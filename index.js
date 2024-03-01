const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const errorMiddleware = require('./src/middleware/error');

// database config import
require('./src/config/mongo.config');

//swagger package import
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/docs/swaggerConfig');

// import all routes file 
const authRoutes = require('./src/routes/auth.router');
const meRoutes = require('./src/routes/me.router');

// use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(errorMiddleware);

// all routers
app.use('/auth', authRoutes);
app.use('/me', meRoutes);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(parseInt(process.env.PORT), () => {
	console.log("🚀 ~ file: app listening on port ~ ", parseInt(process.env.PORT))
});