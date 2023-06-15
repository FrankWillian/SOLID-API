import { IMessage, ImailProvider } from "../IMailProviders";
import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements ImailProvider {
    private transporter;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'smtp.mailtrap.io',
                pass: 'smtp.mailtrap.io'
            }

        })

    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body,
        })
    }
}