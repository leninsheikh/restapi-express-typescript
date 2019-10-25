import { Router } from 'express';
import api from '@src/routes/api'

/**
 * initializing Router
 */
const router = Router();

/**
 * registering api routes
 */
router.use('/api', api)

export default router;