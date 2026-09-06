import { WHATSAPP_PHONE } from "@/lib/whatsapp";

export const weeklyHours = [
  { day: "Pazartesi", open: "09:00", close: "20:00" },
  { day: "Salı", open: "09:00", close: "20:00" },
  { day: "Çarşamba", open: "09:00", close: "20:00" },
  { day: "Perşembe", open: "09:00", close: "20:00" },
  { day: "Cuma", open: "09:00", close: "20:00" },
  { day: "Cumartesi", open: "09:00", close: "20:00" },
  { day: "Pazar", open: null, close: null },
] as const;

export const shopInfo = {
  address: "Avenir Neva 125, B Blok, Mevlana Mah., Talas / Kayseri",
  phone: "0533 090 38 00",
  phoneLink: `tel:+${WHATSAPP_PHONE}`,
  mapUrl: "https://maps.app.goo.gl/17bQEv3HoFAFfLXQ7",
  instagramHandle: "@sakura.cicek.atolyesi",
  instagramUrl: "https://instagram.com/sakura.cicek.atolyesi",
  hours: [
    { day: "Pazartesi - Cumartesi", time: "09:00 - 20:00" },
    { day: "Pazar", time: "Kapalı" },
  ],
};
