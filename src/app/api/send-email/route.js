// pages/api/send-email.js o app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();

  // Configuración para Hostinger
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // servidor SMTP de Hostinger
    port: 465, // puerto para SSL
    secure: true, // usar SSL
    auth: {
      user: process.env.EMAIL_USER, // tu email completo de Hostinger
      pass: process.env.EMAIL_PASSWORD // contraseña de tu email
    }
  });
  

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // tu email de Hostinger
      to: 'administration@dunyaidiomas.com',
      subject: `Nova Consulta: ${body.reason}, idioma materno (${body.nativeLanguage})`,
      text: `
        Nome: ${body.name}
        Sobrenome: ${body.surname}
        Email: ${body.email}
        Motivo: ${body.reason}
        
        Comentarios:
        ${body.comments}
      `,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}