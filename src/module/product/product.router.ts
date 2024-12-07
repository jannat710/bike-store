import { Router } from 'express';
import { productController } from './product.controller';

const productRouter = Router();
productRouter.post('/products', productController.createProduct);
productRouter.get('/products', productController.getProduct);
productRouter.get('/products/:productId', productController.getSingleProduct);

export default productRouter;
