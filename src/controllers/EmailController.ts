import { Request, Response } from 'express'
import { EmailService } from '../services/EmailService'

class EmailController {
    async postEmail(request: Request, response: Response) {
        try {
            console.log(request.body)
            const service = new EmailService
            service.sendEmail()
            return response.status(202).json({ message: "Email enviado" })
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "Erro no servidor" })
        }
    }

    async postBulkEmaill(request: Request, response: Response) {
        try {
            console.log(request.body)
            const service = new EmailService
            service.sendBulkEmail()
            return response.status(202).json({ message: "Email enviado" })
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "Erro no servidor" })
        }
    }
}

export { EmailController }