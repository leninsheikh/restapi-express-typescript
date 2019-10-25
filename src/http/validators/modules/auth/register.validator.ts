import validator from '@src/http/validators/validator';
import { body } from 'express-validator';
import customValidators from '@src/http/validators/customRules'

/**
 * validation rule for user register
 * @type {ValidationChain[]}
 */
export default validator ( [
    body('email')
        .isEmail().withMessage('this not a valid email address')
        .custom(customValidators.isUniqueEmail),
    body('password').isLength({ min: 6 }),
    body('confirmPassword').custom(customValidators.isPasswordEqual),
    body('firstName', 'firstName is required').not().isEmpty(),
    body('lastName', 'lastName is required').not().isEmpty(),
]);