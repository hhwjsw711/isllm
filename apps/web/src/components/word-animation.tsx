"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "《白鹤粱奇梦缘》",
  "《不一样的五星红旗》",
  "《愈炸愈强》",
  "《穿书奇缘》",
  "《火锅情暖山城》",
  "《江雾纤歌》",
  "《天梯之爱》",
  "《梦忆山城》",
  "《潮起潮落》",
  "《山城奇幻夜》",
  "《地府奇遇》",
  "《再见，绘心》",
  "《山城密语》",
  "《雾都英雄：变形的士》",
  "《龙魂觉醒，时光之旅》",
  "《川韵》",
  "《巫溪遗梦》",
  "《奇妙夜之旅》",
  "《一帘幽梦》",
  "《巫溪阴条岭的守望》",
  "《神女峰的传说》",
  "《漆艺之梦》",
  "《青春樱歌》",
  "《只有梦里看得见》",
  "《朝天门下时光门之秘》",
];

function useWordCycle(words: string[], interval: number) {
  const [index, setIndex] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (isInitial) {
      setIndex(Math.floor(Math.random() * words.length));
      setIsInitial(false);
      return;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval, isInitial]);

  return words[index];
}

export function WordAnimation() {
  const word = useWordCycle(words, 2100);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={word} className="text-primary inline-block">
        {word?.split("").map((char, index) => (
          <motion.span
            key={`${word}-${char}-${index.toString()}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
              duration: 0.15,
              delay: index * 0.015,
              ease: "easeOut",
            }}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
