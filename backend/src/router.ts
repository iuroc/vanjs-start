import { Router } from 'express'
import demo from './route/demo'
import { join } from 'path'

const router = Router()

router.use('/api/demo', demo)
// 这里可以创建更多路由
// 这里可以创建更多路由
// 这里可以创建更多路由

export default router