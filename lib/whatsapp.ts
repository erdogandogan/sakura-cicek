export const WHATSAPP_PHONE = "905330903800";

const GENERIC_MESSAGE = "Merhaba, sipariş vermek istiyorum.";

function buildMessage(productName?: string) {
  if (!productName) return GENERIC_MESSAGE;
  return `Merhaba, ${productName} hakkında bilgi almak istiyorum.`;
}

export function getWhatsAppLink(productName?: string) {
  const text = encodeURIComponent(buildMessage(productName));
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}
