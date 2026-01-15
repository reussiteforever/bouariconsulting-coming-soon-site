import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Send an email using Payload's configured email adapter
 */
export async function sendPayloadEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string
  subject: string
  html?: string
  text?: string
}) {
  const payload = await getPayload({ config })

  try {
    await payload.sendEmail({
      to,
      subject,
      html,
      text,
    })
    return { success: true }
  } catch (error) {
    console.error('Error sending email via Payload:', error)
    return { success: false, error }
  }
}

/**
 * Subscribe an email to the newsletter
 */
export async function subscribeToNewsletter(email: string) {
  const payload = await getPayload({ config })

  try {
    // Check if email already exists
    const existing = await payload.find({
      collection: 'newsletter-subscribers',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (existing.docs.length > 0) {
      return { success: false, message: 'Email already subscribed' }
    }

    // Create new subscriber
    await payload.create({
      collection: 'newsletter-subscribers',
      data: {
        email,
        subscribedAt: new Date().toISOString(),
        status: 'active',
      },
    })

    // Send confirmation email
    await sendPayloadEmail({
      to: email,
      subject: 'Bienvenue à la Newsletter BOEMIN!',
      text: 'Merci de vous être abonné à notre newsletter. Nous vous tiendrons informé de nos dernières nouveautés.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6;">Bienvenue à BOEMIN!</h1>
          <p>Merci de vous être abonné à notre newsletter.</p>
          <p>Nous vous tiendrons informé de nos dernières nouveautés et du lancement de notre nouveau site web.</p>
          <p style="margin-top: 30px;">
            <strong>BOEMIN</strong><br>
            Cabinet d'expertise géospatiale et environnementale
          </p>
        </div>
      `,
    })

    return { success: true, message: 'Successfully subscribed' }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return { success: false, message: 'Failed to subscribe', error }
  }
}
