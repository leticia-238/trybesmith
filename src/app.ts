import 'express-async-errors';
import express from 'express';
import loginRouter from './routes/loginRouter';
import ordersRouter from './routes/ordersRouter';
import productsRouter from './routes/productsRouter';
import usersRouter from './routes/usersRouter';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

app.use(errorHandler);

export default app;
