import { Router } from 'express'
import { EmailController } from './controllers/EmailController'

const router = Router()

router.post('/send', new EmailController().postEmail)

router.post('/bulk-email', new EmailController().postBatchEmaill)

export { router }