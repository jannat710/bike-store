import { Router } from 'express';
import { productController } from './product.controller';

const productRouter = Router();
productRouter.post('/products', productController.createProduct);
productRouter.get('/products', productController.getProduct);

export default productRouter;
