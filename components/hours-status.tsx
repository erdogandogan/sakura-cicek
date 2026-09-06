"use client";

import { useEffect, useState } from "react";
import { weeklyHours } from "@/lib/shop-info";
import { getTodayIndex, isOpenNow } from "@/lib/hours";

export default function HoursStatus() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [todayIndex, setTodayIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setOpen(isOpenNow(now));
      setTodayIndex(getTodayIndex(now));
    };
    update();
    setMounted(true);
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex max-w-sm flex-col gap-4">
      <div
        className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
          mounted && open
            ? "border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary"
            : "border-border bg-surface text-muted-foreground"
        }`}
      >
        <span className="relative flex h-2.5 w-2.5">
          {mounted && open && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-75" />
          )}
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
              mounted && open ? "bg-accent-secondary" : "bg-muted-foreground"
            }`}
          />
        </span>
        {!mounted ? "Çalışma saatleri" : open ? "Şu an açık" : "Şu an kapalı"}
      </div>

      <div className="flex flex-col gap-1 rounded-panel border border-border bg-surface p-5">
        {weeklyHours.map((h, i) => {
          const isToday = mounted && todayIndex === i;
          const isClosed = !h.open;
          return (
            <div
              key={h.day}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                isToday ? "bg-accent-soft" : ""
              } ${isClosed && !isToday ? "opacity-60" : ""}`}
            >
              <span
                className={
                  isToday
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
                }
              >
                {h.day}
              </span>
              <span
                className={
                  isToday
                    ? "font-semibold text-accent-text"
                    : isClosed
                      ? "text-muted-foreground"
                      : "font-medium text-foreground"
                }
              >
                {isClosed ? "Kapalı" : `${h.open} - ${h.close}`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
