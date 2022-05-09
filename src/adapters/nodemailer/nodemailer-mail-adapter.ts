import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f17d68ef0a9132",
    pass: "0584a886f86163"
  }
});

export class NodemailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Adrian Valdes <adriangvaldes@gmail.com>',
      subject,
      html: body,
    })
  };
}