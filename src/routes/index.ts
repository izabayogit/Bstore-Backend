import Router from 'express';
import userRoutes from "./usersRoutes"
import bookRoutes from "./bookRoutes"

const router = Router();

router.use(userRoutes);
router.use(bookRoutes)

export default router
