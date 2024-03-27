import { Router } from 'express'
import demo from './route/demo'

const router = Router()

router.use('/api/demo', demo)

export default router