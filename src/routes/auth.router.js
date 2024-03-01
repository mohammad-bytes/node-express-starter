const express = require('express');
const router = express.Router();

// file upload helper
const upload = require('../helpers/file-upload.helper').upload;

// controller
const userController = require('../controllers/user.controller');

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication operations
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profile:
 *                 type: string
 *                 format: binary
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               mobile:
 *                 type: number
 *     responses:
 *       200:
 *         description: User registered successfully
 */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: user login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User login successfully
 */

// all routes of auth module
router.post('/register', upload.single('profile'), userController.createUser);
router.post('/login', userController.login);


module.exports = router;