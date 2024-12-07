import express, { Application, Request, Response } from 'express';
import productRouter from './module/product/product.router';

const app: Application = express();

// middleware
app.use(express.json());

app.use('/api', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running! 🚀✨');
});

export default app;
