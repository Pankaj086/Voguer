import jwt from "jsonwebtoken";

const adminAuth = async(req, res, next) => {
    try {
        const { token } = req.headers
        if(!token){
            return res.status(500).json({
                success: false,
                message: "Not Authorized Login Again"
            })
        }

        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);

        if(decodedToken !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.status(500).json({
                success: false,
                message: "Not Authorized Login Again"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export default adminAuth;