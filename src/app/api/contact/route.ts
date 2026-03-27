import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"ProfundaMente Contacto" <${process.env.GMAIL_USER}>`,
      to: 'siembrau@gmail.com',
      replyTo: email,
      subject: subject || `Contacto desde ProfundaMente — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #00426a; margin-bottom: 4px;">Nuevo mensaje desde ProfundaMente</h2>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; font-weight: bold; width: 120px;">Nombre</td>
              <td style="padding: 8px 0; color: #161c27;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; font-weight: bold;">Correo</td>
              <td style="padding: 8px 0; color: #161c27;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; font-weight: bold;">Asunto</td>
              <td style="padding: 8px 0; color: #161c27;">${subject || '—'}</td>
            </tr>
          </table>

          <div style="background: #f4f7fb; border-radius: 12px; padding: 20px;">
            <p style="color: #666; font-size: 12px; text-transform: uppercase; font-weight: bold; margin: 0 0 8px;">Mensaje</p>
            <p style="color: #161c27; white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
          </div>

          <p style="color: #999; font-size: 11px; margin-top: 24px;">
            Puedes responder directamente a este correo para contactar a ${name} en ${email}.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[POST /api/contact]', err)
    return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 })
  }
}
