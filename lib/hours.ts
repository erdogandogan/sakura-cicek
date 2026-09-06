import { weeklyHours } from "@/lib/shop-info";

// Date.getDay(): 0 = Pazar ... 6 = Cumartesi. weeklyHours is Pazartesi-first (index 0-6).
const JS_DAY_TO_WEEKLY_INDEX = [6, 0, 1, 2, 3, 4, 5];

export function getTodayIndex(date: Date = new Date()) {
  return JS_DAY_TO_WEEKLY_INDEX[date.getDay()];
}

export function getTodayHours(date: Date = new Date()) {
  return weeklyHours[getTodayIndex(date)];
}

export function isOpenNow(date: Date = new Date()) {
  const today = getTodayHours(date);
  if (!today.open || !today.close) return false;

  const [openHour, openMinute] = today.open.split(":").map(Number);
  const [closeHour, closeMinute] = today.close.split(":").map(Number);
  const minutesNow = date.getHours() * 60 + date.getMinutes();

  return (
    minutesNow >= openHour * 60 + openMinute &&
    minutesNow < closeHour * 60 + closeMinute
  );
}
