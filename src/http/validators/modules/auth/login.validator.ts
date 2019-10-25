import validator from '@src/http/validators/validator';
import { body } from 'express-validator';

/**
 * validation rule for user login
 * @type {ValidationChain[]}
 */
export default validator ( [
    body('email', 'this not a valid email address').isEmail(),
    body('password', 'password filed can not be empty').not().isEmpty()
]);