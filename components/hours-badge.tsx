"use client";

import { useEffect, useState } from "react";
import { weeklyHours } from "@/lib/shop-info";
import { getTodayHours, isOpenNow } from "@/lib/hours";

interface HoursBadgeProps {
  className?: string;
}

export default function HoursBadge({ className = "" }: HoursBadgeProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [today, setToday] = useState<(typeof weeklyHours)[number]>(
    weeklyHours[0],
  );

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setOpen(isOpenNow(now));
      setToday(getTodayHours(now));
    };
    update();
    setMounted(true);
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  const label = today.open
    ? `${today.day}: ${today.open} - ${today.close}`
    : `${today.day}: Kapalı`;

  return (
    <div className={`flex items-center gap-2 text-sm text-foreground ${className}`}>
      <span
        className={`h-2 w-2 shrink-0 rounded-none ${
          mounted && open ? "bg-accent-secondary" : "bg-muted-foreground"
        }`}
      />
      <span>{label}</span>
      {mounted && (
        <span
          className={`text-xs font-semibold ${
            open ? "text-accent-secondary" : "text-muted-foreground"
          }`}
        >
          · {open ? "Şu an açık" : "Şu an kapalı"}
        </span>
      )}
    </div>
  );
}
