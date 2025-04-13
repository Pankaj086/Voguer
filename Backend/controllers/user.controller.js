import { User } from '../models/user.model.js';
import validator from 'validator';

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // checking if all fields are provided by user (cannot be empty)
        if([name, email, password].some(field => field?.trim() === "")) {
            return res.status(400).json({ message: 'Fileds cannot be empty' });
        }

        // checking if email is valid
        if(!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        // checking if password is strong enough
        if(password.length < 6) {
            return res.status(400).json({ message: 'Password enter a strong password' });
        }

        // checking if user already exists
        const existingUser = await User.findOne({ email });
        // console.log(existingUser);
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // creating new user
        const user = User.create({
            name,
            email,
            password,
        });

        // console.log(user);
        res.status(200).json({ 
            message: 'User registered successfully',
            user: { name, email }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
}

export { registerUser };