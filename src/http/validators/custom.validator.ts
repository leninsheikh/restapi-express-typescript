import User from '@src/database/models/user';
/**
 * validation for password equality
 * @param value
 * @param req
 * @returns {boolean}
 */
const isPasswordEqual = (value: string, {req} : any) => {
    if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
    }
    return true;
};

/**
 * validation for unique email
 * @param value
 * @param req
 * @returns {Promise<boolean>}
 */
const isUniqueEmail = async (value: string, {req}: any) => {
    let user = await User.count({where: {email: value}});
    if (user > 0) {
         throw new Error(value + ' email is already taken');
    }
    return true;
};

export default {isPasswordEqual, isUniqueEmail}
