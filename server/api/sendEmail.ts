import { defineEventHandler, readBody } from 'h3';
import { z } from 'zod';
import nodemailer from 'nodemailer';
const config = useRuntimeConfig();

const schema = z.object({
  firstName: z.string().trim().min(2).max(50),
  lastName: z.string().trim().min(2).max(50),
  subject: z.string().trim().min(5).max(100),
  message: z.string().trim().min(10).max(500),
  acceptprivacypolicy: z.boolean().refine((val) => val, {
    message: 'You must accept the privacy policy to send a message'
  })
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const result = schema.parse(body);

    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: parseInt(config.smtpPort, 10),
      secure: true,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass
      }
    });

    const mailOptions = {
      from: 'Contact form',
      to: 'wendy@shrevestaxservice.com',
      subject: result.subject,
      text: `Message from ${result.firstName} ${result.lastName}: ${result.message}`
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    return createError({
      statusCode: 400,
      statusMessage: 'Validation failed or email sending error',
      data: error
    });
  }
});
