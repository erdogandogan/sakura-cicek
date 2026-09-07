"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export interface FeatureStep {
  step: string;
  title?: string;
  icon: ReactNode;
  image: string;
}

interface FeatureStepsProps {
  features: FeatureStep[];
  title?: string;
  autoPlayInterval?: number;
  className?: string;
}

export function FeatureSteps({
  features,
  title,
  autoPlayInterval = 3000,
  className = "",
}: FeatureStepsProps) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((prev) => prev + 100);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // currentFeature turetilmis bir deger: React Strict Mode'da setState
  // guncelleyicisinin icinden baska bir setState tetiklemek (onceki
  // yaklasim) cift calisip adimin geriye atlamasina yol aciyordu. Tek
  // bir sayacdan turetmek bunu monotonik ve kararli hale getirir.
  const currentFeature =
    Math.floor(elapsed / autoPlayInterval) % features.length;

  return (
    <div className={className}>
      {title && (
        <h2 className="mb-8 font-display text-3xl font-semibold text-foreground md:text-4xl">
          {title}
        </h2>
      )}

      <div className="grid gap-6 md:grid-cols-2 md:gap-10">
        <div className="order-2 flex flex-col justify-center gap-5 md:order-1">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={false}
              animate={{ opacity: index === currentFeature ? 1 : 0.45 }}
              transition={{ duration: 0.4 }}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center border transition-colors duration-300 ${
                  index === currentFeature
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-surface text-muted-foreground"
                }`}
              >
                {feature.icon}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {feature.title || feature.step}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="relative order-1 h-[200px] overflow-hidden sm:h-[260px] md:order-2 md:h-full md:min-h-[280px]">
          <AnimatePresence mode="wait">
            {features.map(
              (feature, index) =>
                index === currentFeature && (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title || feature.step}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
