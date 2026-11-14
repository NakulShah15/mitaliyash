import { useEffect, useState } from "react";

function computeTimeLeft(targetDate) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const distance = target - now;

  if (Number.isNaN(target) || distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: false };
}

// Live countdown to `targetDate` (ISO string or Date), recalculated every
// second from the system clock. Automatically reports `isPast: true` once
// the target date has passed, instead of counting negative numbers.
export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => computeTimeLeft(targetDate));

  useEffect(() => {
    setTimeLeft(computeTimeLeft(targetDate));
    const intervalId = setInterval(() => {
      setTimeLeft(computeTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return timeLeft;
}

export default useCountdown;
