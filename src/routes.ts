import { Router } from 'express'
import { EmailController } from './controllers/EmailController'

const router = Router()

router.post('/email', new EmailController().postEmail)

router.post('/email/bulk', new EmailController().postBulkEmaill)

export { router }