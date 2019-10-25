import { Router } from 'express';
import passport from 'passport'
import authController from '@controllers/api/auth/auth.controller';
import LoginValidator from '@validators/auth/login.validator';
import RegisterValidator from '@validators/auth/register.validator';

const router = Router();

router.post('/login', LoginValidator,  authController.login);
router.post('/register', RegisterValidator, authController.register);

/**
 * added passport middleware
 */
router.use(passport.authenticate('jwt', { session: false }));

/**
 * protected routes
 */
router.get('/user', authController.user);

export default router;
