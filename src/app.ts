import express, { Application, Request, Response } from 'express';
import productRouter from './module/product/product.router';
import orderRouter from './module/order/order.router';

const app: Application = express();

app.use(express.json());

app.use('/api', productRouter);
app.use('/api', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running! 🚀✨');
});

export default app;
