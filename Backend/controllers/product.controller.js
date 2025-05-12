
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
            rating
        } = req.body;

        // this image1 will be an array and we have to get the first elemet from that array
        // console.log(req.files)
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        // console.log(name,
        //     description,
        //     price,
        //     discount,
        //     category,
        //     subCategory,
        //     stock,
        //     bestSeller,
        //     size,rating);

        //     console.log(image1,image2,image3,image4);
            
        res.status(200).json({
            success:true,
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

}

// function for removing product
const removeProduct = async(req,res) => {
    
}

// function for info of a single product
const getProductInfo = async(req,res) => {

}

export { addProduct, removeProduct, getProductInfo, listProducts}