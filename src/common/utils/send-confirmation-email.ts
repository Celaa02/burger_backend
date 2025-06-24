import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function sendOrderConfirmationEmail(
  to: string,
  orderId: number,
  total: number,
) {
  const msg = {
    to,
    from: 'darlys0794@gmail.com', // ← tu correo verificado
    subject: 'Confirmación de tu pedido 🍔',
    text: `Gracias por tu pedido en The Burger Station. Pedido #${orderId}. Total: $${total}`,
    html: `
      <h2>¡Gracias por tu pedido! 🍔</h2>
      <p>Hemos recibido tu orden <strong>#${orderId}</strong>.</p>
      <p>Total: <strong>$${total}</strong></p>
      <p>Te contactaremos cuando esté lista para entrega.</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log(`✅ Correo enviado a ${to}`);
  } catch (error) {
    console.error('❌ Error al enviar correo:', error.response?.body || error);
  }
}
