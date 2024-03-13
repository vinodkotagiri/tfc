
/**
 * AuthMiddleware is a class that contains middleware for authentication
 * 
 * This class contains the following functions:
 * - auth: middleware that verifies a JSON web token in the Authorization header
 * - isAdmin: middleware that checks if the user is an admin
 * - generateToken: function to generate a JSON web token for regular users
 * - generateRefreshToken: function to generate a JSON web token for refreshing regular users' tokens
 * 
 * @class
 */
import { ERROR_CODES } from "../utils/constants.js";
import jwt from 'jsonwebtoken';
import JWT_SECRET from "../config/jwt_secret.js";

class AuthMiddleware {
    /**
     * Middleware function to verify a JSON web token in the Authorization header
     * 
     * @async
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @param {Function} next - Express next function
     * @return {Object} Express response object
     */
    async auth(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: ERROR_CODES.UNAUTHORIZED });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: ERROR_CODES.UNAUTHORIZED });
        }

        let payload;
        try {
            payload = jwt.verify(token, JWT_SECRET);
        } catch (error) {
            return res.status(401).json({ error: ERROR_CODES.UNAUTHORIZED });
        }

        req.user = payload;
        next();
    }

    /**
     * Middleware function to check if the user is an admin
     * 
     * @async
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @param {Function} next - Express next function
     * @return {Object} Express response object
     */
    async isAdmin(req, res, next) {
        if (req.user.role === 'admin') {
            next();
        } else {
            return res.status(401).json({ error: ERROR_CODES.UNAUTHORIZED });
        }
    }

    /**
     * Function to generate a JSON web token for regular users
     * 
     * @param {Object} payload - Data to be encoded in the token
     * @return {String} JSON web token
     */
    generateToken(payload) {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    }

    /**
     * Function to generate a JSON web token for refreshing regular users' tokens
     * 
     * @param {Object} payload - Data to be encoded in the token
     * @return {String} JSON web token
     */
    generateRefreshToken(payload) {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
    }
}

const authMiddleware=new AuthMiddleware();

export default {
    auth: authMiddleware.auth.bind(authMiddleware),
    isAdmin: authMiddleware.isAdmin.bind(authMiddleware),
    generateToken: authMiddleware.generateToken.bind(authMiddleware),
    generateRefreshToken: authMiddleware.generateRefreshToken.bind(authMiddleware)
}

