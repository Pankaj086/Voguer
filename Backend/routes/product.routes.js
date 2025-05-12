import { Router } from "express";
import { addProduct, removeProduct, listProducts, getProductInfo } from "../controllers/product.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";

const productRouter = Router();

productRouter.route("/add").post(
    
    upload.fields([
        {
            name:'image1',
            maxCount:1
        },
        {
            name:'image2',
            maxCount:1
        },
        {
            name:'image3',
            maxCount:1
        },
        {
            name:'image4',
            maxCount:1
        },
    ]), 

    addProduct
);
productRouter.route("/remove").post(verifyJWT,removeProduct);
productRouter.route("/details").post(verifyJWT,getProductInfo);
productRouter.route("/list").get(verifyJWT,listProducts);

export default productRouter;