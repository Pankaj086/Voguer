import { v2 as cloudinary } from 'cloudinary';
import { Product } from '../models/product.model.js';

// function for add product
const addProduct = async(req,res) => {
    try {
        const {
            name,
            description,
            price,
            discount,
            category,
            subCategory,
            stock,
            bestSeller,
            size,
            ratings
        } = req.body;

        // this image1 will be an array and we have to get the first elemet from that array
        // console.log(req.files)
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter( (img) => img != undefined );

        // console.log(images);
        const imagesURL = await Promise.all(
            images.map(async (item) => {
                const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                return result.secure_url;
            })
        );

        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            discount: Number(discount),
            stock: Number(stock),
            bestSeller: bestSeller === "true" ? true : false,
            size: JSON.parse(size),
            images: imagesURL,
            date: Date.now(),
            ratings: Number(ratings),
        }

        const product = new Product(productData);

        await product.save();
        
        console.log(productData)
        res.status(200).json({
            success:true,
            message:"Product Added"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }


}

// function for list products
const listProducts = async(req,res) => {
    try {
        const products = await Product.find();
        // console.log(products);

        res.status(200).json({
            success:true,
            message:"All Products Fetched",
            products
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
    
}

// function for removing product
const removeProduct = async (req, res) => {
    try {
        const product_id = req.body.id;

        const deletedProduct = await Product.findByIdAndDelete(product_id);

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product removed",
            product: deletedProduct
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// function for info of a single product
const getProductInfo = async (req, res) => {
    try {
        const { product_id } = req.body;
        const product = await Product.findById(product_id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product doesn't exist"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product found",
            product: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export { addProduct, removeProduct, getProductInfo, listProducts}