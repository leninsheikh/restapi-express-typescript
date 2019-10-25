import { Router } from 'express';
import passport from 'passport'
import authController from '@src/http/controllers/api/auth/auth.controller';

const router = Router();

router.post('/login',  authController.login);
router.post('/register', authController.register);

/**
 * added passport middleware
 */
router.use(passport.authenticate('jwt', { session: false }));

/**
 * protected routes
 */
router.get('/user', authController.user);

export default router;
