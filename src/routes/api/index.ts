import { Router } from 'express';
import auth from '@src/routes/api/modules/auth.route'

/**
 * initializing Router
 */
const router = Router();

/**
 * registering auth routes
 */
router.use('/auth', auth)

export default router;