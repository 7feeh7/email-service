import { Request, Response } from 'express'

class EmailController {
    async postEmail(request: Request, response: Response) {
        console.log(request.body)
        return response.status(202).json({ message: "Email enviado" })
    }

    async postBatchEmaill(request: Request, response: Response) {
        console.log(request.body)
        return response.status(202).json({ message: "Email enviado" })
    }
}

export { EmailController }