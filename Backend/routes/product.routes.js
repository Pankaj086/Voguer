import { Router } from "express";
import { addProduct, removeProduct, listProducts, getProductInfo } from "../controllers/product.controller.js";
import upload from "../middleware/multer.middleware.js";
import adminAuth from "../middleware/admin.auth.middleware.js";

const productRouter = Router();

productRouter.route("/add").post(
    adminAuth,
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
productRouter.route("/remove").post(adminAuth, removeProduct);
productRouter.route("/details").post(getProductInfo);
productRouter.route("/list").get(listProducts);

export default productRouter;