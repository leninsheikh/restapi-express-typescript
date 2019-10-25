import { body, ValidationChain } from "express-validator";
import customValidators from '@src/http/validators/custom.validator';

/**
 * validation rules for user register
 * @var registerRequest
 * @type {ValidationChain[]}
 */
const registerRequest: ValidationChain[] = [
    body('email')
        .isEmail().withMessage('this not a valid email address')
        .custom(customValidators.isUniqueEmail),
    body('password').isLength({ min: 6 }),
    body('confirmPassword').custom(customValidators.isPasswordEqual),
    body('firstName', 'firstName is required').not().isEmpty(),
    body('lastName', 'lastName is required').not().isEmpty(),
];

/**
 * validation rule for user login
 * @var loginRequest
 * @type {ValidationChain[]}
 */
const loginRequest: ValidationChain[] = [
    body('email', 'this not a valid email address').isEmail(),
    body('password', 'password filed can not be empty').not().isEmpty()
];

export default {
    loginRequest,
    registerRequest
}
