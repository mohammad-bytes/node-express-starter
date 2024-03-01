const jwt = require("jsonwebtoken");
const ErrorHandler = require('../helpers/error-handler');

exports.isAuthenticatedUser = async (req, res, next) => {
	try {
		const token = req.headers.authorization;
		if (!token) {
			return next(new ErrorHandler("Please Login to access this resource", 401));
		};
		const verified = jwt.verify(token.substring(7), process.env.JWT_SECRET_KEY);
		req.user = verified;
		next();
	} catch (error) {
		return next(new ErrorHandler("Access Denied!", 401));
	}
}