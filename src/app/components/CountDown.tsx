/* 'use client'

import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2025-05-01")

const CountDown = () => {
  return (
    <Countdown 
        date={endingDate}
        className='font-bold text-yellow-400 text-5xl'
    />
  )
}

export default CountDown */
/* "use client"
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date('2025/05/01').getTime();
  const [delay, setDelay] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const newDelay = targetDate - Date.now();
      if (newDelay <= 0) {
        clearInterval(timer);
      } else {
        setDelay(newDelay);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  const d = Math.floor(delay / (1000 * 60 * 60 * 24));
  const h = Math.floor((delay / (1000 * 60 * 60)) % 24);
  const m = Math.floor((delay / 1000 / 60) % 60);
  const s = Math.floor((delay / 1000) % 60);

  return (
    <div className="font-bold text-5xl text-yellow-300">
      {d}:{h.toString().padStart(2, '0')}:{m.toString().padStart(2, '0')}:{s.toString().padStart(2, '0')}
    </div>
  );
};

export default CountDown; */
"use client"
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setIsClient(true); // Marca que estamos no cliente
    const targetDate = new Date('2025-05-01').getTime();

    const updateTimer = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    };

    // Atualiza imediatamente antes de configurar o intervalo
    setTimeLeft(updateTimer());

    const timer = setInterval(() => {
      setTimeLeft(updateTimer());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    // Retorna null durante o SSR para evitar discrepância
    return null;
  }

  return (
    <div className="font-bold text-5xl text-yellow-300" suppressHydrationWarning>
      {timeLeft.days}:{timeLeft.hours.toString().padStart(2, '0')}:
      {timeLeft.minutes.toString().padStart(2, '0')}:
      {timeLeft.seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default CountDown;

